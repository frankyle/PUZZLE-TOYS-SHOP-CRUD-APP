import React, { useState, useEffect } from "react";
import { getAllToys, deleteToy } from "../../services/toysServices";
import ToyItem from "./ToysItems";
import ToyForm from "./ToysForm";

const ToyList = () => {
  const [toys, setToys] = useState([]);
  const [editingToy, setEditingToy] = useState(null);

  const fetchToys = async () => {
    const data = await getAllToys();
    setToys(data);
  };

  useEffect(() => {
    fetchToys();
  }, []);

  const handleDelete = async (id) => {
    await deleteToy(id);
    fetchToys();
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <h2 className="font-bold text-lg mb-4">Toy Form</h2>
        <ToyForm toy={editingToy} setEditingToy={setEditingToy} fetchToys={fetchToys} />
      </div>
      <div className="col-span-2">
        <h2 className="font-bold text-lg mb-4">Toy List</h2>
        <div className="grid grid-cols-2 gap-4">
          {toys.map((toy) => (
            <ToyItem key={toy.id} toy={toy} onEdit={setEditingToy} onDelete={handleDelete} />
          ))}
        </div>
      </div> 
    </div>
  );
};

export default ToyList;
