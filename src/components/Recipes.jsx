import React from "react";

const Recipes = (props) => {
  return (
    <div className="w-[400px] rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-[2px] shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-300">
      <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden">
        <div className="h-[180px] overflow-hidden">
          <img
            src={props.elem.image}
            alt="Classic Margherita Pizza"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-5 text-white">
          <h2 className="text-lg font-semibold tracking-wide">
            {props.elem.name}
          </h2>

          <p className="text-sm text-orange-300 mt-1">
            {props.elem.prepTimeMinutes} mins
          </p>

          <p className="text-sm text-gray-300 mt-3 leading-relaxed">
            {props.elem.ingredients}
          </p>

          <div className="flex gap-2 flex-wrap mt-4">
            {props.elem.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs rounded-full border
                ${
                  index === 0
                    ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                    : "bg-pink-500/20 text-pink-300 border-pink-500/30"
                }`}
              >
                {tag}
              </span>
            ))}
            {/* <span className="px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
              {props.elem.tags}
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
              {props.elem.tags[1]}
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
