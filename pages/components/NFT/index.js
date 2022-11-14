import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function SideMenuItem({ img, title }) {
  return (
    <Link href="/each">
      <div className="m-5">
        <Image
          src={img}
          alt={title}
          width={200}
          height={200}
          className={clsx("")}
        />
        <div className="p-2" style={{ backgroundColor: "#282828" }}>{title}</div>
      </div>
    </Link>
  );
}
