import React from "react";
import exportFromJSON from "export-from-json";

export default function Button({ favoriteItems }) {
  const exportJson = () => {
    const fileName = "favorite";
    const exportType = "json";
    exportFromJSON({ data: favoriteItems, fileName, exportType });
  };

  return (
    <div>
      <button
        onClick={exportJson}
        className="fixed py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"
      >
        Export Favorite Items as JSON File
      </button>
    </div>
  );
}
