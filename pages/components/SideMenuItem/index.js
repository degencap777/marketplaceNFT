import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function SideMenuItem({ icon, title }) {
  return (
    <div className="flex my-5 items-center">
      <Image
        src={icon}
        alt={title}
        width={30}
        height={30}
        className={clsx("")}
      />

      <div className="col-span-3 ml-5 text-white">{title}</div>
    </div>
  );
}
