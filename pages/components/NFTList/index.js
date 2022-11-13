import React, { useState } from "react";
import clsx from "clsx";

import NFT from "../NFT";

const NFTs = [
  {
    img: "/nft1.png",
    title: "Central Cee",
  },
  {
    img: "/nft2.png",
    title: "Digga D",
  },
  {
    img: "/nft3.png",
    title: "Bullet Train",
  },
  {
    img: "/nft4.png",
    title: "Impulsive-EP 3",
  },
];

export default function NFTList() {
  const [nfts] = useState(NFTs);
  return (
    <>
      <h1 className="text-white text-3xl mt-20 mb-10" style={{ fontFamily: 'Campton' }}>NFTs for Sale</h1>
      <div className="flex flex-wrap">
        {nfts.map((nft, idx) => (
          <NFT key={idx} {...nft} />
        ))}
      </div>
    </>
  );
}
