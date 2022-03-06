import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    time: '00:00',
    'Hygiene Index Value': 1.81,
  },
  {
    time: '02:00',
    'Hygiene Index Value': 1.5,
  },
  {
    time: '04:00',
    'Hygiene Index Value': 2,
  },
  {
    time: '06:00',
    'Hygiene Index Value': 1.81,
  },
  {
    time: '08:00',
    'Hygiene Index Value': 5,
  },
  {
    time: '10:00',
    'Hygiene Index Value': 4,
  },
  {
    time: '12:00',
    'Hygiene Index Value': 5.6,
  },
  {
    time: '14:00',
    'Hygiene Index Value': 7,
  },
  {
    time: '16:00',
    'Hygiene Index Value': 6,
  },
  {
    time: '18:00',
    'Hygiene Index Value': 4.3,
  },
  {
    time: '20:00',
    'Hygiene Index Value': 3.5,
  },
  {
    time: '22:00',
    'Hygiene Index Value': 4,
  },
  {
    time: '24:00',
    'Hygiene Index Value': 2.9,
  },
];

const LineChartComponent = () => {
  return (
    <div className="w-[78%] m-auto py-8">
      <LineChart
        width={690}
        height={280}
        data={data}
        margin={{ top: 0, right: 60, left: 15, bottom: 25 }}
      >
        <XAxis dataKey="time">
          <Label value="Time" offset={-25} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: 'Hygine Index Value',
            angle: -90,
            position: 'insideBottomLeft',
            offset: 15,
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={20} color="#00FA9A" />
        <Line type="linear" dataKey="Hygiene Index Value" stroke="#00FA9A" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
