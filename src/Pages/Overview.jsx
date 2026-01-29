import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbXboxX } from "react-icons/tb";
import CallTrendsChart from "../Components/CallTrendsChart";

const Dashboard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const stats = [
    {
      id: 1,
      title: "Total Calls Today",
      value: "127",
      trend: "+12%",
      bgColor: "bg-[#2B7FFF]",
      icon: <IoCallOutline size={24} />,
    },
    {
      id: 2,
      title: "AI-Handled Calls",
      value: "98",
      trend: "+77%",
      bgColor: "bg-gradient-to-r from-[#AD46FF] to-[#F6339A]",
      icon: <FaAirbnb size={24} />,
    },
    {
      id: 3,
      title: "Warm Transfer",
      value: "23",
      trend: "+18%",
      bgColor: "bg-gradient-to-r from-[#FF6900] to-[#FB2C36]",
      icon: <GoArrowSwitch size={24} />,
    },
    {
      id: 4,
      title: "Appointments Booked",
      value: "34",
      trend: "+8%",
      bgColor: "bg-gradient-to-r from-[#00C950] to-[#00BC7D]",
      icon: <CiCalendar size={24} />,
    },
    {
      id: 5,
      title: "Missed/Failed Calls",
      value: "6",
      trend: "-3%",
      bgColor: "bg-gradient-to-r from-[#FB2C36] to-[#FF2056]",
      icon: <TbXboxX size={24} />,
    },
    {
      id: 6,
      title: "Avg Call Duration",
      value: "3:42",
      trend: "+15%",
      bgColor: "bg-[#2B7FFF]",
      icon: <MdOutlineWatchLater size={24} />,
    },
  ];

  const activities = [
    {
      id: 1,
      text: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      color: "bg-[#05DF72]",
    },
    {
      id: 2,
      text: "Warm transfer to technician - Software Issue",
      time: "5 min ago",
      color: "bg-[#FF8904]",
    },
    {
      id: 3,
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      color: "bg-[#05DF72]",
    },
    {
      id: 4,
      text: "Call dropped after 12 seconds",
      time: "15 min ago",
      color: "bg-[#FF6467]",
    },
  ];

  const repairs = [
    { label: "Screen Repair", requests: 156, percentage: "75%" },
    { label: "Battery Replacement", requests: 89, percentage: "55%" },
    { label: "Back Glass Repair", requests: 67, percentage: "45%" },
    { label: "Software Issues", requests: 45, percentage: "35%" },
  ];

  return (
    <div className="min-h-screen p-2 md:p-6 bg-[#111B3C]  space-y-6 mb-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {stats.map((card) => (
          <StatCard
            key={card.id}
            {...card}
            active={activeCard === card.id}
            onClick={() => setActiveCard(card.id)}
          />
        ))}
      </div>

      <CallTrendsChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#161D31] rounded-2xl p-6 border border-[#2B7FFF33] ">
          <h2 className="text-xl text-[#FFFFFF] font-semibold mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {activities.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E2746] p-4 rounded-xl flex items-start gap-4 transition transform hover:scale-105"
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1.5 ${item.color}`}
                ></div>
                <div>
                  <p className="text-[#FFFFFF] text-sm font-medium">
                    {item.text}
                  </p>
                  <p className="text-[#7A8BA4] text-xs mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#161D31] rounded-2xl p-6 border border-[#2B7FFF33] space-y-6">
          <h2 className="text-xl text-[#FFFFFF] font-semibold">
            Top Repair Requests
          </h2>
          {repairs.map((repair, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-[#FFFFFF]">
                  {repair.label}
                </span>
                <span className="text-sm text-[#C0CCDD]">
                  {repair.requests} requests
                </span>
              </div>
              <div className="w-full bg-[#1E2746] rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] h-2 rounded-full transition-all duration-500"
                  style={{ width: repair.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, icon, bgColor, active, onClick }) => (
  <div
    onClick={onClick}
    className={`
      p-4 rounded-2xl border cursor-pointer
      flex flex-col justify-between
      transition transform hover:scale-105
      ${active ? "border-yellow-500 ring-1 ring-yellow-500 bg-[#111827]" : `border-[#2B7FFF33] bg-[#0f172a]`}
    `}
  >
    <div className="flex justify-between items-start mb-4 h-6 ">
      <p className="text-gray-400 text-sm md:text-base">{title}</p>
      <div
        className={`p-3 rounded-xl flex items-center justify-center ${bgColor} text-white text-lg md:text-xl`}
      >
        {icon}
      </div>
    </div>
    <div className="text-2xl md:text-4xl font-semibold text-white mb-2">
      {value}
    </div>
    <div
      className={`text-xs md:text-sm font-medium ${trend.startsWith("+") ? "text-[#05DF72]" : "text-[#FD244A]"}`}
    >
      {trend}
    </div>
  </div>
);

export default Dashboard;
