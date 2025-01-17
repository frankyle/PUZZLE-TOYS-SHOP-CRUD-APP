import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PuzzleDetail = () => {
  const { id } = useParams();
  const [puzzle, setPuzzle] = useState(null);
  const [relatedPuzzles, setRelatedPuzzles] = useState([]);

  useEffect(() => {
    // Fetch the puzzle data by ID (replace with real API call)
    const fetchPuzzle = async () => {
      const response = await fetch(`/api/puzzles/${id}`);
      const data = await response.json();
      setPuzzle(data);
      // You could also fetch related puzzles here based on category or type
      const relatedResponse = await fetch(`/api/puzzles/related`);
      const relatedData = await relatedResponse.json();
      setRelatedPuzzles(relatedData);
    };
    fetchPuzzle();
  }, [id]);

  if (!puzzle) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={puzzle.image}
          alt={puzzle.name}
          className="w-full h-80 object-cover rounded-md mb-6"
        />
        <h2 className="text-3xl font-bold">{puzzle.name}</h2>
        <p className="text-gray-600 mb-4">{puzzle.description}</p>
        <div className="space-y-2">
          <p><strong>Category:</strong> {puzzle.category}</p>
          <p><strong>Difficulty Level:</strong> {puzzle.difficulty_level}</p>
          <p><strong>Price:</strong> ${puzzle.price}</p>
          <p><strong>Stock:</strong> {puzzle.stock}</p>
        </div>
        <Link
          to="/puzzles"
          className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Back to Puzzle List
        </Link>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">Other Puzzles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedPuzzles.map((relatedPuzzle) => (
            <div key={relatedPuzzle.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={relatedPuzzle.image}
                alt={relatedPuzzle.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{relatedPuzzle.name}</h3>
              <p className="text-gray-600 mb-4">{relatedPuzzle.description}</p>
              <Link
                to={`/puzzles/${relatedPuzzle.id}`}
                className="text-indigo-600 hover:text-indigo-800"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PuzzleDetail;
