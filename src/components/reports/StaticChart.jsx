import {
  BarChart,
  Bar,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

function StaticChart({data}) {
  return (
    <div className="bg-secondary h-[435px] rounded-[10px] p-2 w-full text-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Income" fill="#C4DEFF" />
          <Bar dataKey="Expense" fill="#00BA9D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StaticChart