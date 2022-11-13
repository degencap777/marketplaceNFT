import { Routes, Route, Outlet, useRoutes } from "react-router-dom";

import Layout from './components/Layout';
import NFTList from './components/NFTList';
import SubmitNFT from './components/SubmitNFT';
import EachNFT from './components/EachNFT';
import ItemsOwned from './components/ItemsOwned';
import { Suspense } from "react";

export default function Home() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<NFTList />} />
        <Route path="/submit" element={<SubmitNFT />} />
        <Route path="/nftpage" element={<EachNFT />} />
        <Route path="/myportfolio" element={<ItemsOwned />} />
      </Routes>
    </Layout>
  )
}

// const App = () => {
//   return (
//     <Layout>
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </Layout>
//   );
// };

// const protectedRoutes = [
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/home', element: <NFTList /> },
//       { path: '/submit', element: <SubmitNFT /> },
//       { path: '/nftpage', element: <EachNFT /> },
//       { path: '/myportfolio', element: <ItemsOwned /> },
//     ],
//   },
// ];

// export default function Home() {
//   return <>{protectedRoutes}</>
// }
