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
      color: "text-[#05DF72]",
      bgColor: "bg-gradient-to-r from-[#00C95033] to-[#00BC7D33]",
      borderColor: "border border-[#00C9504D]",
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
      color: "text-[#FF8904]",
      bgColor: "bg-gradient-to-r from-[#FF690033] to-[#FB2C3633]",
      borderColor: "border border-[#FF69004D]",
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
      color: "text-[#51A2FF]",
      bgColor: "bg-gradient-to-r from-[#2B7FFF33] to-[#00B8DB33]",
      borderColor: "border border-[#2B7FFF4D]",
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
      color: "text-[#FF0404]",
      bgColor: "bg-gradient-to-r from-[#FF150033] to-[#FB2C3633]",
      borderColor: "border border-[#FF69004D]",
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
      color: "text-[#05DF72]",
      bgColor: "bg-gradient-to-r from-[#00C95033] to-[#00BC7D33]",
      borderColor: "border border-[#00C9504D]",
    },
  ];

  return (
    <div className="min-h-screen  bg-[#111B3C] p-2 md:p-0">
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="input input-bordered border rounded-xl border-[#2B7FFF33] bg-[#16213e] w-full lg:w-1/2"
        />
        <div className="flex items-center justify-center gap-2 w-full lg:w-1/2 lg:justify-end">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 py-6 lg:py-0  bg-[#1D293D] border border-[#2B7FFF33] shadow-none text-[#FFFFFF]"
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
              className="btn m-1 py-6 lg:py-0 bg-[#1D293D] border border-[#2B7FFF33] shadow-none text-[#FFFFFF]"
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
              className="btn m-1 py-6 lg:py-0 bg-[#1D293D] border border-[#2B7FFF33] shadow-none text-[#FFFFFF]"
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
        <div className="bg-[#111d35] rounded-xl p-4 shadow-lg max-h-[95vh]  border border-[#2B7FFF33]">
          <h2 className="text-lg sm:text-xl font-semibold border-b border-[#2B7FFF33] pb-2 mb-4 text-[#FFFFFF]">
            Call List
          </h2>

          <div className="space-y-4">
            {calls.map((call) => (
              <div
                key={call.id}
                className="p-4 border-b border-[#2B7FFF33] hover:bg-[#1c2b4a] cursor-pointer transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex gap-3">
                    <div className="p-2 bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] rounded-lg text-[#FFFFFF]">
                      <IoCallOutline size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{call.phone}</p>
                      <p className="text-xs text-[#90A1B9]">
                        {call.date} • {call.time}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`badge ${call.color} ${call.bgColor} ${call.borderColor} badge-outline text-xs`}
                  >
                    {call.status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <MdOutlineWatchLater />
                    <span>{call.duration}</span>
                  </div>

                  <div className="flex items-center text-[#90A1B9] gap-1">
                    <GoCheckCircle />
                    <span>{call.action}</span>
                  </div>

                  <span className="bg-[#2B7FFF33] px-2 py-1 rounded text-[#51A2FF]">
                    {call.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111d35] rounded-xl p-4 shadow-lg border border-[#2B7FFF33]">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 border-b border-[#2B7FFF33] pb-2 text-white">
            Call Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 mb-8 text-sm">
            <div>
              <p className="text-[#90A1B9] pb-1">Phone Number</p>
              <p className="text-[#FFFFFF] font-medium">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-[#90A1B9] pb-1">Duration</p>
              <p className="text-[#FFFFFF] font-medium">4:32</p>
            </div>
            <div>
              <p className="text-[#90A1B9] pb-1">Date & Time</p>
              <p className="text-[#FFFFFF] font-medium">2025-12-16 10:45 AM</p>
            </div>
            <div>
              <p className="text-[#90A1B9] pb-1">Issue Type</p>
              <p className="text-[#FFFFFF] font-medium">Screen</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-[#90A1B9] text-sm mb-2 ">Call Type</p>
            <span className="border border-green-200 rounded-xl px-2 py-1 text-[#05DF72] ">
              AI Resolved{" "}
            </span>
          </div>
          <div className="mb-6">
            <p className="text-[#90A1B9] text-sm mb-1">Outcome</p>
            <span className=" badge-success text-[#FFFFFF]">
              Quote provided
            </span>
          </div>

          <button className="btn  w-full bg-gradient-to-r from-[#020685bc] to-[#1b0011d8] border-none  shadow-none text-sm text-[#dfbcfd] mb-6">
            <IoPlayCircleOutline /> Play Audio Recording
          </button>

          <h3 className="flex items-center gap-2 text-sm font-semibold mb-4 text-[#FFFFFF]">
            <FaRegFileAlt size={16} color="#51A2FF" /> Conversation Transcript
          </h3>

          <div className="bg-[#0d172a] rounded-lg p-4  h-107 lg:h-90">
            <div className="space-y-4 text-sm">
              <span className="text-[#05DF72] font-bold">AI Assistant:</span>
              <p className="text-[#FFFFFF]">
                Thank you for calling UBreakiFix! How can I help?
              </p>
              <span className="text-[#51A2FF] font-bold">Customer:</span>
              <p className="text-[#FFFFFF]">
                Hi, my iPhone 13 screen is cracked. Cost?
              </p>
              <span className="text-[#05DF72] font-bold">AI Assistant:</span>
              <p className="text-[#FFFFFF]">
                I can help you with that! For an iPhone 13 screen repair, our
                price is $199. This includes parts, labor, and comes with a
                90-day warranty. Would you like to book an appointment?{" "}
              </p>
              <span className="text-[#51A2FF] font-bold">Customer:</span>
              <p className="text-[#FFFFFF]">
                Yes, please! When are you available?
              </p>
              <span className="text-[#05DF72] font-bold">AI Assistant:</span>
              <p className="text-[#FFFFFF]">
                Great! I have availability today at 2:00 PM or tomorrow at 10:00
                AM. Which works better for you?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
