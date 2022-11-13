import Link from "next/link";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function SideMenuItem({ select, icon, title, selected, handleClick, url }) {
  const router=useRouter()
  console.log(router.pathname)
  return (
    <Link href={url}>
      <div className="flex my-5 items-center hover:cursor-pointer" onClick={handleClick}>
        {
          router.pathname==url ? (
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

        <div className={"col-span-3 ml-5 " + (router.pathname==url ? "text-app-orange" : "text-white")}>{title}</div>
      </div>
    </Link>
  );
}
