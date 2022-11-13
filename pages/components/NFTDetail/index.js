import Image from "next/image";

export default function NFTDetail({ NFT }) {
  return (
    <div className="bg-app-black-dark flex px-2 py-1">
      <Image src={NFT.src} alt={NFT.title} title={NFT.title} />
      <div className="flex flex-col gap-4 mx-3">
        <h1 className="tet-3xl">{NFT.title}</h1>
        <h2 className="text-xl text-app-orange">OWNED</h2>
        <h2 className="text-xl">{NFT.fee}</h2>
        <h2 className="text-xl">{NFT.bundle}</h2>
      </div>
      <div className="flex mx-5">
        <svg width="4" height="170" viewBox="0 0 4 170" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="8.74228e-08" x2="1.99999" y2="170" stroke="#FB713A" strokeWidth="4" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg">SPENT</h3>
        <h2 className="text-app-orange">{NFT.spent}</h2>
      </div>
    </div>
  )
}