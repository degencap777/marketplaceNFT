import { NFTDetailList } from "./dataList"
import NFTDetail from "../NFTDetail"

export default function ItemsOwned() {
  return (
    <div className="flex flex-col py-10">
      <h1 className="text-4xl">ITEMS OWNED</h1>
      <div>
        {NFTDetailList.map((idx, menu) => {
          console.log(menu);
          return (
            <NFTDetail NFT={menu} key={idx} />
          )
        }


        )}

      </div>
    </div>

  )
}