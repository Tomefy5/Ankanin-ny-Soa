import React from "react";

export default function PhotoFilter({filterHandler, photoShown}) {
  const buttonFilter = [
    { id: "all", label: "All Photos" },
    { id: "picnic", label: "Picnic" },
    { id: "event", label: "Event" },
    { id: "quotidien", label: "Quotidian Photos" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {buttonFilter.map((btn, index) => (
        <button onClick={() => filterHandler(btn.id)} key={index} className={`mx-3 my-2 group border border-yellow-400 hover:bg-yellow-400 py-2 px-6 rounded-xl transition-all duration-300 hover:text-white ${photoShown === btn.id ? 'bg-yellow-400 text-white' : 'bg-transparent text-yellow-400'}`}>
          <span className="font-medium">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
