import { LineChart, Line } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page D',
    uv: 2280,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 2790,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page C',
    uv: 3200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 4280,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 3490,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page B',
    uv: 2200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2300,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page F',
    uv: 9390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 21490,
    pv: 4300,
    amt: 2100,
  },
];

export default function TinyLineChart() {
  return (
    <LineChart width={700} height={160} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
      <Line type="monotone" dataKey="uv" stroke="#FF4E4E" strokeWidth={2} />
    </LineChart>
  );
}
