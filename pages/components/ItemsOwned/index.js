import React from 'react';
import { NFTDetailList } from "./dataList"
import NFTDetail from "../NFTDetail"

export default function ItemsOwned() {
  console.log(NFTDetailList);
  return (
    <div className="flex flex-col py-5">
      <h1 className="text-4xl font-bold py-8">ITEMS OWNED</h1>
      <div className="flex flex-col gap-8 w-3/4">
        {NFTDetailList.map((menu, idx) => {
          console.log(menu);
          return (
            <NFTDetail NFT={menu} key={idx} />
          );
        }
        )}
      </div>
    </div>
  )
}