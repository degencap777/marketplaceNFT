import React from 'react';
import Link from "next/link";

export default function SubmitNFT() {

  const fileRef = React.useRef();
  const imageRef = React.useRef();
  let [file, setFile] = React.useState();
  let [image, setImage] = React.useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  }

  return (
    <div className="flex flex-col py-12" style={{ fontFamily: 'Campton' }}>
      <h4 className="mb-2">NFT NAME</h4>
      <div className="flex gap-5">
        <input className="w-1/2 placeholder-app-black rounded px-4 flex py-2 bg-app-black outline-none text-xl font-medium" placeholder="Insert Artist Name" />
        <div className="flex gap-5 w-1/2">
          <button className="flex w-1/2 items-center justify-center rounded bg-app-black gap-1 hover:cursor-pointer font-medium" onClick={() => { fileRef.current.click() }}>
            <h1 className="text-xl">Upload</h1>
            <h1 className="text-app-orange text-xl">.pptx file*</h1>
            <input id="upload" name="upload" type="file" ref={fileRef} hidden
              onChange={handleChange} />
          </button>
          {file && file !== undefined && file !== null &&
            <div>
              <p className='text-sm'>{file.name}</p>
            </div>
          }
          <button className="flex w-1/2 items-center justify-center rounded bg-app-black gap-1 hover:cursor-pointer font-medium" onClick={() => imageRef.current.click()}>
            <h2 className="text-xl">Upload</h2>
            <h2 className="text-app-orange text-xl">IMAGE*</h2>
            <input id="uploadimage" name="uploadimage" type="file" ref={imageRef} hidden
              onChange={handleImage} />
          </button>
          {image && image !== undefined && image !== null &&
            <div>
              <p className='text-sm'>{image.name}</p>
            </div>
          }
        </div>
      </div>
      <div className="flex gap-32 my-7">
        <div className="flex flex-col gap-3 w-1/2">
          <h4>Total Amount Raising</h4>
          <div className="flex gap-2">
            <div className="rounded-l flex items-center text-app-orange bg-app-black px-3">$</div>
            <div className="rounded-r flex items-center px-2 bg-app-black py-2 w-full">220,000</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <h4>Ownership Offering</h4>
          <div className="flex gap-2">
            <div className="rounded-l flex items-center text-app-orange bg-app-black px-3">%</div>
            <div className="rounded-r flex items-center px-2 bg-app-black py-2 w-full">30</div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-1/4 gap-1">
          <h2 className="text-xl">Answer Questioins</h2>
          <div className="flex rounded-t-md bg-app-black gap-1 h-9 justify-end items-center pr-3">
            <h4 className="text-app-orange font-medium text-lg">Price</h4>
            <h4 className="text-lg font-medium">Per Token</h4>
          </div>
          <div className="flex bg-app-black gap-1 h-9 justify-end items-center pr-3">
            <h4 className="text-lg text-app-black">Total Amount Available</h4>
          </div>
          <div className="text-lg pt-1 h-52 bg-app-black rounded-b flex justify-end pr-3">Features</div>
        </div>
        <div className="flex w-3/4 gap-1">
          <div className="w-1/3 gap-1 flex flex-col">
            <h2 className="text-xl">Basic Bundle</h2>
            <div className="flex rounded-t-md bg-app-black gap-1 h-9 items-center px-5">
              99
            </div>
            <div className="flex bg-app-black gap-1 h-9 items-center px-5">
              <h4 className="text-app-black-type">2,222</h4>
            </div>
            <textarea className="pt-1 h-52 bg-app-black rounded-b flex flex-col px-5 outline-none placeholder-app-black resize-none" placeholder={"Type Here...\n↩To Add another Feature"} />
          </div>
          <div className="w-1/3 gap-1 flex flex-col">
            <div className="text-xl gap-1 flex">
              <h2 className="text-app-blue">Premium</h2>
              <h2>Bundle</h2>
            </div>
            <div className="flex rounded-t-md bg-app-black gap-1 h-9 px-5 items-center">
              199
            </div>
            <div className="flex bg-app-black gap-1 h-9 px-5 items-center">
              <h4 className="text-app-black-type">502</h4>
            </div>
            <textarea className="pt-1 h-52 bg-app-black rounded-b flex flex-col px-5 outline-none placeholder-app-black resize-none" placeholder={"Type Here...\n↩To Add another Feature"} />
          </div>
          <div className="w-1/3 gap-1 flex flex-col">
            <div className="text-xl gap-1 flex">
              <h2 className="text-app-orange">Luxury</h2>
              <h2>Bundle</h2>
            </div>
            <div className="flex rounded-t-md bg-app-black gap-1 h-9 px-5 items-center">
              1,999
            </div>
            <div className="flex bg-app-black gap-1 h-9 px-5 items-center">
              <h4 className="text-app-black-type">55</h4>
            </div>
            <textarea className="pt-1 h-52 bg-app-black rounded-b flex flex-col px-5 outline-none placeholder-app-black resize-none" placeholder={"Type Here...\n↩To Add another Feature"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 gap-1">
        <div className="flex gap-1">
          <h2 className="w-1/4 rounded-tl flex justify-end pr-5 h-14 items-center text-app-orange font-medium bg-app-black text-2xl">Total Equity Given</h2>
          <div className="w-3/4 flex gap-1">
            <div className="w-1/3 flex items-center gap-1 bg-app-black px-12">
              <h4 className="text-app-orange text-xl">%</h4>
              <h4 className="text-app-black-type text-xl">Automatically Added</h4>
            </div>
            <div className="flex w-2/3 bg-app-black rounded-tr">
              <div className="w-1/2 flex items-center gap-1 bg-app-black px-5">
                <h4 className="text-app-orange text-xl">%</h4>
                <h4 className="text-app-black-type text-xl">Automatically Added</h4>
              </div>
              <div className="w-1/2 flex items-center gap-1 bg-app-black px-5">
                <h4 className="text-app-orange text-xl">%</h4>
                <h4 className="text-app-black-type text-xl">Automatically Added</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <h2 className="w-1/4 rounded-bl flex justify-end pr-5 h-14 items-center text-app-orange font-medium bg-app-black text-2xl">Total Album Valuation</h2>
          <h2 className="w-3/4 px-12 bg-app-black rounded-br text-app-black-type flex items-center text-xl">Automatically Added</h2>
        </div>
      </div>
      <Link href="/myportfolio">
        <div className="flex gap-12 text-app-orange justify-end">
          <h1 className="text-4xl font-semibold">List NFT</h1>
          <svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.63278 40.7074L0.559122 35.6292L15.7892 20.3945L0.559122 5.16074L5.63734 0.0825195L25.9457 20.3945L5.63278 40.7074Z" fill="#FB713A" />
          </svg>
        </div>
      </Link>
    </div>
  )
}