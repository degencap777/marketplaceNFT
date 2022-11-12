import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function SideMenuItem({ select, icon, title, selected, handleClick }) {
  return (
    <div className="flex my-5 items-center hover:cursor-pointer" onClick={handleClick}>
      {
        selected ? (
          <Image
            src={select}
            alt={title}
            width={30}
            height={30}
            className={clsx("")}
          />
        ) : (
          <Image
            src={icon}
            alt={title}
            width={30}
            height={30}
            className={clsx("")}
          />
        )
      }


      <div className={"col-span-3 ml-5 " + (selected ? "text-app-orange" : "text-white")}>{title}</div>
    </div>
  );
}
