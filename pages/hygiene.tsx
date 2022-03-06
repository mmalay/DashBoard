import Head from 'next/head';
import Star from '../components/icons/Star';
import Info from '../components/icons/Info';
import LineChart from '../components/charts/LineChart';

const Hygiende = () => {
  return (
    <div>
      <Head>
        <title>OurEye.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <div className="h-5/6 w-2/3 mx-auto mt-10 py-6 rounded-md bg-white">
          <div className="flex justify-between items-center mx-12">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-3xl font-bold">HYGIENE INDEX</span>
                <Star styles="fill-current text-blue-500" />
              </div>
              <span className="text-base font-semibold text-gray-400">
                DATA FOR OCTOBER 25'2021 FROM 12:00 AM TO 11:58:21 AM
              </span>
            </div>
            <Info styles="fill-current text-blue-500" />
          </div>
          <section className="mx-16 my-8">
            <div className="flex flex-col">
              <span className="text-xl font-semibold">PPE CHECK</span>
              <span className="text-base font-bold text-blue-500">
                Hygiene Deviation Trend
              </span>
              <span className="text-base font-bold text-gray-400">
                Hygiene Index value at 06:00 is 1.81
              </span>
            </div>
            <div className="h-80 mt-8 overflow-y-auto">
              <LineChart />
              <LineChart />
              <LineChart />
              <LineChart />
              <LineChart />
              <LineChart />
              <LineChart />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hygiende;
