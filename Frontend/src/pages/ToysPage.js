// src/pages/ToysPage.js
import React from "react";
import ToysForm from "../components/toys/ToysForm";
import ToysList from "../components/toys/ToysList";

const ToysPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Manage Toys</h2>
      <ToysList />
    </div>
  );
};

export default ToysPage;
