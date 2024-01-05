import Image from 'next/image'
import Layout from "@/app/components/Layout";
import Banner from "@/app/components/Banner";




export default function Home() {
  return (
    <main>
     <div className="w-full bg-banner-bg bg-center">
        <div className="w-full bg-black opacity-80 text-white">
        <Layout>
          <Banner />
        </Layout>
        </div>
      </div>
    </main>
  )
}
