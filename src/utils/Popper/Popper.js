import React from "react";
import { Link } from "react-router-dom";
import { cakePopper } from "../../components/CakeDataList";
function Popper({ type }) {
  const cakes = cakePopper.filter((cake) => cake.type === type);

  return (
    <div>
      {cakes.map((cake) => (
        <Link
          to={cake.path}
          key={cake.item}
          className="flex mb-2 font-medium hover:text-button"
        >
          {cake.item}
        </Link>
      ))}
    </div>
  );
}

export default Popper;
