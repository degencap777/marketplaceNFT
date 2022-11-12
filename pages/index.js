import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout';
import NFTList from './components/NFTList';
import SubmitNFT from './components/SubmitNFT';
import EachNFT from './components/EachNFT';

export default function Home() {
  return (
    <Layout>
      <EachNFT />
    </Layout>
  )
}
