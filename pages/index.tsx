import Head from 'next/head';
import Card from '../components/Card';
import DashBoard from '../components/DashBoard';
import TinyLineChart from '../components/charts/TinyLineChart';
import Star from '../components/icons/Star';

export default function Home() {
  return (
    <div>
      <Head>
        <title>OurEye.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <div className="bg-blue-500 flex flex-col items-center h-[16rem]">
          <div className="mx-auto mt-4">
            <TinyLineChart />
          </div>
          <section className="flex gap-3  ">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white opacity-40"></div>
            <div className="h-3 w-3 rounded-full bg-white opacity-40"></div>
          </section>
          <div className="fixed right-0 top-36 bg-blue-600 h-14 w-16 rounded-l-2xl flex justify-center items-center">
            <Star styles="fill-current text-white" />
          </div>
        </div>
        <div className="fixed w-full -mt-14">
          <DashBoard />
          <div className="flex mx-auto justify-center mt-1">
            <Card
              title="HYGIENE"
              features={[
                'HYGIENE INDEX',
                'PPE DEVIATION',
                'FLOOR MOPPING',
                '20 SECONDS HANDWASH RULE',
              ]}
            />
            <Card
              title="SAFETY"
              features={['SOCIAL DISTANCING VIOLATIONS', 'CCTV TAMPERING']}
            />
            <Card
              title="QUALITY"
              features={[
                'FREQUENT AGE GROUP VISITORS',
                'CUSTOMER EMOTIONS',
                'CUSTOMER UNATTENDED',
                'AVERAGE TIME SPENT',
                'KITCHEN ORDER TICKET',
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
