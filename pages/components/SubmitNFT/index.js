

export default function SubmitNFT() {
  return (
    <div className="flex flex-col">
      <h4 className="text-white mb-2">NFT NAME</h4>
      <div className="flex gap-5">
        <input className="w-1/2 placeholder-app-black rounded px-4 flex py-2 bg-app-black outline-none text-white text-xl font-semibold" placeholder="Insert Artist Name" />
        <div className="flex gap-5 w-1/2">
          <div className="flex w-1/2 items-center justify-center rounded bg-app-black gap-1 hover:cursor-pointer">
            <h1 className="text-white font-bold text-xl">Upload</h1>
            <h1 className="text-orange-500 font-bold text-xl">.pptx file*</h1>
          </div>
          <div className="flex w-1/2 items-center justify-center rounded bg-app-black gap-1 hover:cursor-pointer">
            <h2 className="text-white font-bold text-xl">Upload</h2>
            <h2 className="text-orange-500 font-bold text-xl">IMAGE*</h2>
          </div>
        </div>
      </div>
      <div className="flex gap-32 my-7">
        <div className="flex flex-col gap-3 w-1/2">
          <h4 className="text-white">Total Amount Raising</h4>
          <div className="flex gap-2">
            <div className="rounded-l flex items-center text-orange-600 bg-app-black px-3">$</div>
            <div className="rounded-r flex items-center px-2 text-white bg-app-black py-2 w-full">220,000</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <h4 className="text-white">Ownership Offering</h4>
          <div className="flex gap-2">
            <div className="rounded-l flex items-center text-orange-600 bg-app-black px-3">%</div>
            <div className="rounded-r flex items-center px-2 text-white bg-app-black py-2 w-full">30</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col w-1/4 gap-1">
          <h2 className="text-lg">Answer Questioins</h2>
          <div className="flex rounded-t-md bg-app-black gap-1 py-2 justify-end pr-3">
            <h4 className="text-orange-500 font-medium text-lg">Price</h4>
            <h4 className="text-lg font-medium">Per Token</h4>
          </div>
          <div className="flex rounded-t-md bg-app-black gap-1 py-2 justify-end pr-3">
            <h4 className="text-lg text-app-black">Total Amount Available</h4>
          </div>
        </div>
        <div className="w-3/4 gap-1"></div>
      </div>
    </div>
  )
}