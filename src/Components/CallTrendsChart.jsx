import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calls: 45 },
  { day: "Tue", calls: 65 },
  { day: "Wed", calls: 50 },
  { day: "Thu", calls: 70 },
  { day: "Fri", calls: 80 },
  { day: "Sat", calls: 85 },
  { day: "Sun", calls: 50 },
];

const CallTrendsChart = () => {
  return (
    <div className="w-full bg-[#0F172B80] rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Call Trends - This Week
          </h3>
          <p className="text-sm text-[#90A1B9] font-medium">Total: 472 calls</p>
        </div>
        <div>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#1D293D] border-none shadow-none text-[#FFFF]"
            >
              This Week ⬇
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-[#1D293D] rounded-box z-1 w-32 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#F3F4F6"
              strokeDasharray="5 5"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#callGradient)"
              dot={{ r: 4, fill: "#3B82F6", stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrendsChart;
