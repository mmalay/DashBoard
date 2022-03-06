import TriangularRightArrow from './icons/TriangularRightArrow';

type Props = {
  title: string;
  number: number;
};

const DataItem = ({ title, number }: Props) => (
  <section className="flex flex-col text-center mx-2">
    <span className="font-semibold text-gray-800">{title}</span>
    <span className="font-bold text-blue-600 text-xl">{number}</span>
  </section>
);

const DashBoard = () => {
  return (
    <div className="flex w-full">
      <div className="flex mx-auto w-[77%]">
        <div className="flex bg-white w-full rounded-md justify-around mt-4 ml-3 py-6 shadow-md shadow-gray-300">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">HYGIENE INDEX</span>
            <span className="text-base font-semibold text-gray-400">
              Data displayed in the graph
            </span>
          </div>
          <section className="flex flex-col items-center">
            <span className="text-xl text-blue-500 font-semibold">
              SOP Detection
            </span>
            <div className="flex">
              <DataItem number={105} title="Hairnets" />
              <DataItem number={157} title="Masks" />
              <DataItem number={785} title="Gloves" />
            </div>
          </section>
          <section className="flex flex-col items-center">
            <span className="text-xl text-blue-500 font-semibold">
              Deviation Detection
            </span>
            <div className="flex">
              <DataItem number={105} title="Hairnets" />
              <DataItem number={157} title="Masks" />
              <DataItem number={785} title="Gloves" />
            </div>
          </section>
        </div>
        <div className="relative bg-white h-8 w-8 rounded-full -ml-4 mt-16 shadow-md shadow-gray-300 flex items-center justify-center">
          <TriangularRightArrow styles="fill-current text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
