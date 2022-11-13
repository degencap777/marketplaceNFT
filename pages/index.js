import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout';
import NFTList from './components/NFTList';
import SubmitNFT from './components/SubmitNFT';
import EachNFT from './components/EachNFT';
import ItemsOwned from './components/ItemsOwned';

export default function Home() {
  return (
    <Layout>
      <SubmitNFT />
    </Layout>
  )
}
