import React from "react";

const TeamImage = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>

          
    </div>
  );
};

export default TeamImage;
