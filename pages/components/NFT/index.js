import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function SideMenuItem({ img, title }) {
  return (
    <div className="m-5">
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className={clsx("")}
      />
      <div className="text-white p-2" style={{ backgroundColor: "#282828" }}>{title}</div>
    </div>
  );
}
