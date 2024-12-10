import React from "react";

export default function PhotoCard({ url, description, context }) {
  return (
    <div className="h-64 relative">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
        <img src={url} alt={description} className="h-64 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{context}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
