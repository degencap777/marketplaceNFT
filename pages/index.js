import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout';
import NFTList from './components/NFTList';

export default function Home() {
  return (
    <Layout>
      <NFTList/>
    </Layout>
  )
}
