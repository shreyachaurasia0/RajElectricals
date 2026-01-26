import React from "react";
import { assets } from "../assets/frontend_assets/assets";


const products = [
  { name: "Usha Wall Fan",  img: assets.c5 },
  { name: "Milton Electric Kettle",  img: assets.c3 },
  { name: "Bajaj Mixer Grinder",  img: assets.c2 },
  { name: "Prestige Induction Stove" , img: assets.c9 },
  { name: "Milton Flask",  img: assets.c6 },
  { name: "Drill Machine",  img: assets.c7 },
  { name: "LED Bulb",  img:  assets.c1 },
  { name: "Immersion Heater",   img: assets.c4 },
  { name: "M/S House Wires",  img: assets.c8  },
  { name: "Electric Rice Cooker",  img: assets.c10  },
  { name: "Camera",  img: assets.b3  },
];

const HorizontalProduct = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide py-15 px-2 bg-white shadow rounded">
      <div className="flex space-x-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[120px] flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 p-3 rounded-md transition duration-200"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-sm font-medium text-center">{product.name}</p>
            <p className="text-xs text-green-600 font-semibold">
              {product.discount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalProduct;
