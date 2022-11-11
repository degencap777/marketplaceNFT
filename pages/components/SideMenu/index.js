import React from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./SideMenu.module.css";
import SideMenuItem from "../SideMenuItem";

export default function SideMenu() {
  return (
    <>
      <div className="grid grid-cols-10">
        <Image
          src={"/logo.svg"}
          alt={"Logo Image"}
          width={100}
          height={100}
          className={clsx("col-start-2 col-span-7", styles.logo)}
        />

        <div className="col-span-2 relative">
          <div
            className={clsx(
              "rounded-full w-9 h-9 flex justify-center items-center absolute right-0",
              styles.toggleBtn
            )}
          >
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.87594 18.7455L12.8193 18.7455L6.21556 9.5002L12.8193 0.254917L6.87594 0.254917L0.272168 9.5002L6.87594 18.7455Z"
                fill="#222222"
              />
              <path
                d="M16.1213 18.7455L22.0647 18.7455L15.4609 9.5002L22.0647 0.254917L16.1213 0.254916L9.51753 9.5002L16.1213 18.7455Z"
                fill="#222222"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 my-10">
        <button
          className={clsx(
            "col-start-2 col-span-8 h-9 rounded-lg text-white",
            styles.connectBtn
          )}
        >
          Connect Wallet
        </button>
      </div>

      <div className="container mx-8">
        <SideMenuItem icon="/home.png" title="Home" />
        <SideMenuItem icon="/submit.png" title="Submit" />
        <SideMenuItem icon="/portfolio.png" title="My Portfolio" />
      </div>
    </>
  );
}
