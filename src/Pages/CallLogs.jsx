import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { IoCallOutline, IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const CallLogs = () => {
  const calls = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      status: "AI Resolved",
      type: "Screen",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      action: "Quote Provided",
      color: "badge-success",
    },
    {
      id: 2,
      phone: "+1 (555) 345-6789",
      status: "Warm Transfer",
      type: "Software",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      action: "Escalated to technician",
      color: "badge-warning",
    },
    {
      id: 3,
      phone: "+1 (555) 345-6789",
      status: "Appointment",
      type: "Battery",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      action: "Appointment Booked",
      color: "badge-info",
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      status: "Dropped",
      type: "Unknown",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "0:20",
      action: "Call Dropped",
      color: "badge-error",
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      status: "AI Resolved",
      type: "Screen",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      action: "Quote Provided",
      color: "badge-success",
    },
  ];

  return (
    <div className="min-h-screen text-slate-300 p-4 sm:p-6 ">
      <div className="flex flex-col lg:flex-row gap-4 mb-6 px-">
        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="input input-bordered bg-[#16213e] w-full lg:w-1/2"
        />
        <div className="flex gap-2 w-full lg:w-1/2 lg:justify-end">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 py-6 lg:py-0  bg-[#1D293D] border-none shadow-none text-[#FFFF]"
            >
              All Type ⬇
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-[#1D293D] rounded-box z-1 w-28 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 py-6 lg:py-0 bg-[#1D293D] border-none shadow-none text-[#FFFF]"
            >
              All Issues ⬇
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-[#1D293D] rounded-box z-1 w-29 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 py-6 lg:py-0 bg-[#1D293D] border-none shadow-none text-[#FFFF]"
            >
              Today ⬇
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-[#1D293D] rounded-box z-1 w-24 p-2 shadow-sm"
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-[#111d35] rounded-xl p-4 shadow-lg max-h-[95vh] ">
          <h2 className="text-lg sm:text-xl font-semibold border-b border-slate-700 pb-2 mb-4 text-white">
            Call List
          </h2>

          <div className="space-y-4">
            {calls.map((call) => (
              <div
                key={call.id}
                className="p-4 border-b border-slate-700 hover:bg-[#1c2b4a] cursor-pointer transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex gap-3">
                    <div className="p-2 bg-[#2B7FFF] rounded-lg text-white">
                      <IoCallOutline size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{call.phone}</p>
                      <p className="text-xs text-[#90A1B9]">
                        {call.date} • {call.time}
                      </p>
                    </div>
                  </div>

                  <span className={`badge ${call.color} badge-outline text-xs`}>
                    {call.status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <MdOutlineWatchLater />
                    <span>{call.duration}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <GoCheckCircle />
                    <span>{call.action}</span>
                  </div>

                  <span className="bg-blue-900 px-2 py-1 rounded text-blue-300">
                    {call.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111d35] rounded-xl p-4 shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 border-b border-slate-700 pb-2 text-white">
            Call Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 mb-8 text-sm">
            <div>
              <p className="text-slate-500 pb-1">Phone Number</p>
              <p className="text-white font-medium">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-slate-500 pb-1">Duration</p>
              <p className="text-white font-medium">4:32</p>
            </div>
            <div>
              <p className="text-slate-500 pb-1">Date & Time</p>
              <p className="text-white font-medium">2025-12-16 10:45 AM</p>
            </div>
            <div>
              <p className="text-slate-500 pb-1">Issue Type</p>
              <p className="text-white font-medium">Screen</p>
            </div>
          </div>
          <div className="mb-6">
            {" "}
            <p className="text-slate-500 text-sm mb-2 ">Call Type</p>
            <span className="border border-green-200 rounded-xl px-2 py-1 text-[#05DF72] ">
              {" "}
              AI Resolved{" "}
            </span>
          </div>
          <div className="mb-6">
            <p className="text-slate-500 text-sm mb-1">Outcome</p>
            <span className=" badge-success text-white">Quote provided</span>
          </div>

          <button className="btn btn-primary w-full bg-purple-900 border-none hover:bg-purple-800 text-sm text-white mb-6">
            <IoPlayCircleOutline /> Play Audio Recording
          </button>

          <h3 className="flex items-center gap-2 text-sm font-semibold mb-4 text-white">
            <FaRegFileAlt color="#51A2FF" /> Conversation Transcript
          </h3>

          <div className="bg-[#0d172a] rounded-lg p-4  h-107 lg:h-90">
            {" "}
            <div className="space-y-4 text-sm">
              <span className="text-green-400 font-bold">AI Assistant:</span>
              <p>Thank you for calling UBreakiFix! How can I help?</p>
              <span className="text-blue-400 font-bold">Customer:</span>
              <p>Hi, my iPhone 13 screen is cracked. Cost?</p>
              <span className="text-green-400 font-bold">AI Assistant:</span>
              <p>
                {" "}
                I can help you with that! For an iPhone 13 screen repair, our
                price is $199. This includes parts, labor, and comes with a
                90-day warranty. Would you like to book an appointment?{" "}
              </p>
              <span className="text-blue-400 font-bold">Customer:</span>
              <p>Yes, please! When are you available?</p>
              <span className="text-green-400 font-bold">AI Assistant:</span>
              <p>
                {" "}
                Great! I have availability today at 2:00 PM or tomorrow at 10:00
                AM. Which works better for you?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
