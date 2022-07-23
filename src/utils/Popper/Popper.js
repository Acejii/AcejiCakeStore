import React from "react";

function Popper({ cakes }) {
  return (
    <div className="min-w-[200px] p-3 absolute z-30 top-[20px] left-0 bg-primary">
      <ul>
        {cakes.map((cake) => (
          <li key={cake.item} className="mb-2 font-medium hover:text-button">
            {cake.item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Popper;
