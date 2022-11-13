import NFTImage from "../../../public/nft1.png";
import Image from "next/image";

export default function EachNFT() {
  return (
    <div className="flex flex-col gap-3 py-12">
      <div className="flex">
        <div className="flex gap-2 flex-col w-1/4">
          <h2 className="text-4xl font-medium" style={{ fontFamily: "Furore" }}>CENTRAL CEE</h2>
          <Image src={NFTImage} alt="image" title="NFTImage" />
        </div>
        <div className="px-8 rounded-md flex justify-between items-center w-3/4 bg-app-black">
          <h1 className="text-5xl text-app-orange">&#8592;</h1>
          <h4>POWER POINT PRESENTATION .pptx</h4>
          <h1 className="text-5xl text-app-orange">&#8594;</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16 py-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl" style={{fontFamily: 'Campton'}}>Basic Bundle</h1>
          <div className="flex flex-col gap-1">
            <div className="flex rounded-t-md bg-app-black px-4 justify-between items-center h-20">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl">0.0433%</h3>
                <h5 className="text-app-orange-type text-sm">Ownership Per Token</h5>
              </div>
              <div className="flex gap-3 items-center">
                <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.4976 8.61249C23.2053 8.45404 22.879 8.37115 22.5476 8.37115C22.2162 8.37115 21.8899 8.45404 21.5976 8.61249L17.1613 11.2617L14.1522 12.9507L9.79548 15.6041C9.50314 15.7626 9.17685 15.8455 8.84546 15.8455C8.51406 15.8455 8.18777 15.7626 7.89543 15.6041L4.48873 13.5137C4.19936 13.3403 3.95953 13.0934 3.79292 12.7972C3.62631 12.501 3.53869 12.1658 3.5387 11.8247V7.80519C3.54094 7.46456 3.62952 7.13024 3.79591 6.83443C3.9623 6.53863 4.20089 6.29129 4.48873 6.11623L7.89543 4.10648C8.18777 3.94803 8.51406 3.86514 8.84546 3.86514C9.17685 3.86514 9.50314 3.94803 9.79548 4.10648L13.2001 6.19696C13.4895 6.37028 13.7293 6.61723 13.8959 6.91343C14.0625 7.20963 14.1501 7.54483 14.1501 7.88592V10.5394L17.1592 8.7697V6.0355C17.157 5.69487 17.0684 5.36055 16.902 5.06474C16.7356 4.76894 16.497 4.5216 16.2092 4.34654L9.875 0.569222C9.58266 0.41077 9.25637 0.327881 8.92497 0.327881C8.59358 0.327881 8.26729 0.41077 7.97495 0.569222L1.47961 4.42727C1.18877 4.57807 0.945497 4.80879 0.777528 5.09313C0.60956 5.37747 0.523648 5.704 0.529585 6.0355V13.5944C0.531824 13.935 0.620403 14.2693 0.786792 14.5652C0.953182 14.861 1.19178 15.1083 1.47961 15.2834L7.89543 19.0628C8.18777 19.2212 8.51406 19.3041 8.84546 19.3041C9.17685 19.3041 9.50314 19.2212 9.79548 19.0628L14.1522 16.4901L17.1613 14.7204L21.5181 12.1476C21.8104 11.9892 22.1367 11.9063 22.4681 11.9063C22.7995 11.9063 23.1258 11.9892 23.4181 12.1476L26.8227 14.1574C27.1121 14.3307 27.3519 14.5777 27.5185 14.8738C27.6851 15.17 27.7728 15.5052 27.7727 15.8463V19.8722C27.7705 20.2129 27.6819 20.5472 27.5155 20.843C27.3491 21.1388 27.1105 21.3861 26.8227 21.5612L23.4955 23.5709C23.2032 23.7294 22.8769 23.8123 22.5455 23.8123C22.2141 23.8123 21.8878 23.7294 21.5955 23.5709L18.1909 21.5548C17.9024 21.382 17.6632 21.1361 17.4966 20.8411C17.3301 20.5461 17.2419 20.2122 17.2408 19.8722V17.2931L14.2317 19.0628V21.7163C14.2339 22.0561 14.322 22.3897 14.4876 22.6851C14.6532 22.9805 14.8908 23.2277 15.1776 23.4031L21.5934 27.1826C21.8857 27.341 22.212 27.4239 22.5434 27.4239C22.8748 27.4239 23.2011 27.341 23.4934 27.1826L29.9093 23.4031C30.1986 23.2298 30.4385 22.9828 30.6051 22.6866C30.7717 22.3904 30.8593 22.0552 30.8593 21.7141V14.066C30.857 13.7254 30.7685 13.3911 30.6021 13.0953C30.4357 12.7995 30.1971 12.5521 29.9093 12.3771L23.4976 8.61249Z" fill="#FB713A" />
                </svg>
                <h1 className="text-4xl text-app-orange">571.046</h1>
              </div>
            </div>
            <div className="flex flex-col rounded-b-md bg-app-black px-4 h-96 py-5 justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl">🎧 Exclusive Access To Unreleased Music</h3>
                <h3 className="text-2xl">💬 Access To Radioverse Collector Discord Channel</h3>
              </div>
              <div className="flex justify-between">
                <div className="bg-app-orange-dark flex justify-center items-center rounded-md px-6 py-3">BUY</div>
                <h4 className="flex items-center text-lg">99 Available</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-3xl gap-2 flex" style={{fontFamily: 'Campton'}}>
            <h1 className="text-app-orange-type">Premium</h1>
            <h1>Bundle</h1>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex rounded-t-md bg-app-orange-dark px-4 justify-between items-center h-20">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl">0.0866%</h3>
                <h5 className="text-black text-sm">Ownership Per Token</h5>
              </div>
              <div className="flex gap-3 items-center">
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.1547 8.8929C18.9109 8.73445 18.6388 8.65156 18.3625 8.65156C18.0861 8.65156 17.814 8.73445 17.5702 8.8929L13.8705 11.5421L11.361 13.2311L7.72766 15.8846C7.48386 16.043 7.21174 16.1259 6.93537 16.1259C6.659 16.1259 6.38689 16.043 6.14308 15.8846L3.30202 13.7941C3.0607 13.6208 2.86069 13.3738 2.72174 13.0776C2.5828 12.7814 2.50972 12.4462 2.50973 12.1051V8.0856C2.5116 7.74496 2.58547 7.41065 2.72423 7.11484C2.863 6.81903 3.06198 6.57169 3.30202 6.39664L6.14308 4.38688C6.38689 4.22843 6.659 4.14554 6.93537 4.14554C7.21174 4.14554 7.48386 4.22843 7.72766 4.38688L10.567 6.47737C10.8083 6.65068 11.0083 6.89764 11.1473 7.19384C11.2862 7.49004 11.3593 7.82523 11.3593 8.16633V10.8198L13.8688 9.05011V6.31591C13.8669 5.97527 13.793 5.64095 13.6543 5.34515C13.5155 5.04934 13.3165 4.802 13.0765 4.62694L7.79397 0.849618C7.55017 0.691166 7.27806 0.608276 7.00169 0.608276C6.72532 0.608276 6.4532 0.691166 6.2094 0.849618L0.792528 4.70767C0.549973 4.85847 0.347095 5.08919 0.207016 5.37353C0.0669363 5.65787 -0.00471069 5.9844 0.000240284 6.31591V13.8748C0.00210794 14.2154 0.075979 14.5498 0.214742 14.8456C0.353504 15.1414 0.552485 15.3887 0.792528 15.5638L6.14308 19.3432C6.38689 19.5017 6.659 19.5846 6.93537 19.5846C7.21174 19.5846 7.48386 19.5017 7.72766 19.3432L11.361 16.7705L13.8705 15.0008L17.5039 12.428C17.7477 12.2696 18.0198 12.1867 18.2961 12.1867C18.5725 12.1867 18.8446 12.2696 19.0884 12.428L21.9277 14.4378C22.1691 14.6111 22.3691 14.8581 22.508 15.1543C22.647 15.4505 22.72 15.7857 22.72 16.1268V20.1526C22.7182 20.4933 22.6443 20.8276 22.5055 21.1234C22.3668 21.4192 22.1678 21.6666 21.9277 21.8416L19.153 23.8514C18.9092 24.0098 18.6371 24.0927 18.3607 24.0927C18.0843 24.0927 17.8122 24.0098 17.5684 23.8514L14.7291 21.8352C14.4885 21.6625 14.289 21.4165 14.1501 21.1215C14.0112 20.8265 13.9377 20.4927 13.9368 20.1526V17.5735L11.4273 19.3432V21.9967C11.4291 22.3366 11.5026 22.6702 11.6407 22.9655C11.7789 23.2609 11.977 23.5081 12.2161 23.6835L17.5667 27.463C17.8105 27.6214 18.0826 27.7043 18.359 27.7043C18.6353 27.7043 18.9075 27.6214 19.1513 27.463L24.5018 23.6835C24.7431 23.5102 24.9431 23.2633 25.0821 22.9671C25.221 22.6709 25.2941 22.3357 25.2941 21.9946V14.3464C25.2922 14.0058 25.2184 13.6715 25.0796 13.3757C24.9408 13.0799 24.7419 12.8325 24.5018 12.6575L19.1547 8.8929Z" fill="white" />
                </svg>
                <h1 className="text-4xl">1300.611</h1>
              </div>
            </div>
            <div className="flex flex-col rounded-b-md bg-app-orange-dark px-4 h-96 py-5 justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl">💎 First Dibs On Next Central Cee Drop</h3>
                <h3 className="text-2xl">🛏 Exclusive Merch Drop </h3>
                <h3 className="text-2xl">🎵 Early Release On Next Album </h3>
              </div>
              <div className="flex justify-between">
                <div className="bg-app-black-button flex justify-center items-center rounded-md px-6 py-3">BUY</div>
                <h4 className="flex items-center text-lg">199 Available</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex text-3xl gap-2" style={{fontFamily: 'Campton'}}>
            <h1 className="text-app-orange">Luxury</h1>
            <h1>Bundle</h1>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex rounded-t-md bg-app-orange px-4 justify-between items-center h-20">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl">0.5866%</h3>
                <h5 className="text-black text-sm">Ownership Per Token</h5>
              </div>
              <div className="flex gap-3 items-center">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9266 9.08089C21.6596 8.91366 21.3615 8.82617 21.0588 8.82617C20.7561 8.82617 20.458 8.91366 20.191 9.08089L16.1385 11.8769L13.3898 13.6595L9.41001 16.46C9.14296 16.6272 8.84491 16.7147 8.54218 16.7147C8.23946 16.7147 7.9414 16.6272 7.67436 16.46L4.56241 14.2537C4.29808 14.0707 4.079 13.8101 3.92681 13.4975C3.77461 13.1849 3.69457 12.8311 3.69458 12.4711V8.22885C3.69663 7.86934 3.77754 7.51649 3.92953 7.20429C4.08153 6.89209 4.29948 6.63105 4.56241 6.44629L7.67436 4.32516C7.9414 4.15792 8.23946 4.07044 8.54218 4.07044C8.84491 4.07044 9.14296 4.15792 9.41001 4.32516L12.52 6.53149C12.7844 6.71442 13.0035 6.97506 13.1557 7.28767C13.3078 7.60028 13.3879 7.95406 13.3879 8.31405V11.1146L16.1366 9.24681V6.36109C16.1346 6.00157 16.0537 5.64873 15.9017 5.33653C15.7497 5.02433 15.5317 4.76328 15.2688 4.57853L9.48265 0.591874C9.2156 0.424641 8.91754 0.337158 8.61482 0.337158C8.3121 0.337158 8.01404 0.424641 7.74699 0.591874L1.81365 4.66373C1.54797 4.82289 1.32575 5.06639 1.17231 5.36649C1.01888 5.66659 0.940397 6.01121 0.94582 6.36109V14.3389C0.947866 14.6984 1.02878 15.0512 1.18077 15.3634C1.33277 15.6756 1.55072 15.9367 1.81365 16.1214L7.67436 20.1103C7.9414 20.2776 8.23946 20.365 8.54218 20.365C8.84491 20.365 9.14296 20.2776 9.41001 20.1103L13.3898 17.395L16.1385 15.5273L20.1183 12.8119C20.3854 12.6447 20.6834 12.5572 20.9862 12.5572C21.2889 12.5572 21.5869 12.6447 21.854 12.8119L24.964 14.9331C25.2283 15.116 25.4474 15.3766 25.5996 15.6892C25.7518 16.0019 25.8319 16.3556 25.8318 16.7156V20.9646C25.8298 21.3241 25.7489 21.677 25.5969 21.9892C25.4449 22.3014 25.2269 22.5624 24.964 22.7472L21.9247 24.8683C21.6577 25.0355 21.3596 25.123 21.0569 25.123C20.7542 25.123 20.4561 25.0355 20.1891 24.8683L17.079 22.7404C16.8155 22.5581 16.597 22.2985 16.4448 21.9872C16.2927 21.6759 16.2122 21.3235 16.2112 20.9646V18.2426L13.4624 20.1103V22.9109C13.4644 23.2696 13.5449 23.6217 13.6962 23.9334C13.8475 24.2451 14.0645 24.5061 14.3264 24.6912L20.1871 28.6801C20.4542 28.8473 20.7522 28.9348 21.055 28.9348C21.3577 28.9348 21.6557 28.8473 21.9228 28.6801L27.7835 24.6912C28.0478 24.5082 28.2669 24.2476 28.4191 23.935C28.5713 23.6224 28.6513 23.2686 28.6513 22.9086V14.8366C28.6493 14.4771 28.5684 14.1243 28.4164 13.8121C28.2644 13.4999 28.0464 13.2388 27.7835 13.0541L21.9266 9.08089Z" fill="black" />
                </svg>
                <h1 className="text-4xl text-black">9300.611</h1>
              </div>
            </div>
            <div className="flex flex-col rounded-b-md bg-app-orange px-4 h-96 py-5 justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl">💎 First Dibs On All Central Cee Drops</h3>
                <h3 className="text-xl">🛏 2-Night/3-Day Stay At Leonardo Hotel</h3>
                <h3 className="text-xl">🥇 Vip Access On Next Live Show</h3>
                <h3 className="text-xl">🤝 Virtual Meet-And-Greet With Central Cee</h3>
                <h3 className="text-xl">👕 Signed Merch Package</h3>
              </div>
              <div className="flex justify-between">
                <div className="bg-app-black-button flex justify-center items-center rounded-md px-6 py-3">BUY</div>
                <h4 className="flex items-center text-lg">199 Available</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}