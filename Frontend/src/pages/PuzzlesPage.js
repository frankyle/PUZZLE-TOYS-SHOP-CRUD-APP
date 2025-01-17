import React, { useState, useEffect } from "react";
import PuzzleForm from "../components/puzzles/PuzzleForm";
import PuzzleFilter from "../components/puzzles/PuzzleFilter";
import PuzzleList from "../components/puzzles/PuzzleList";
import { getAllPuzzles, deletePuzzle } from "../services/puzzlesSevices";

const PuzzlesPage = () => {
  const [puzzles, setPuzzles] = useState([]);
  const [filteredPuzzles, setFilteredPuzzles] = useState([]);
  const [editingPuzzle, setEditingPuzzle] = useState(null);

  const fetchPuzzles = async () => {
    const data = await getAllPuzzles();
    setPuzzles(data);
    setFilteredPuzzles(data);
  };

  useEffect(() => {
    fetchPuzzles();
  }, []);

  const handleFilterChange = (ageGroup) => {
    if (ageGroup === "all") {
      setFilteredPuzzles(puzzles);
    } else {
      setFilteredPuzzles(
        puzzles.filter((puzzle) => puzzle.age_group === ageGroup)
      );
    }
  };

  const handleDelete = async (puzzleId) => {
    await deletePuzzle(puzzleId);
    fetchPuzzles();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <PuzzleForm
        puzzle={editingPuzzle}
        fetchPuzzles={fetchPuzzles}
        setEditingPuzzle={setEditingPuzzle}
      />
      <PuzzleFilter onFilterChange={handleFilterChange} />
      <PuzzleList
        puzzles={filteredPuzzles}
        onEdit={setEditingPuzzle}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PuzzlesPage;

