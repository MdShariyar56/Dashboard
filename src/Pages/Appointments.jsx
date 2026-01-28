import React, { useState } from "react";
import { CiCalendar, CiCircleCheck } from "react-icons/ci";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

const Appointments = () => {
  const [page, setPage] = useState(1);

  const bookingsPage1 = Array(6).fill({
    name: "Jane.D",
    phone: "01960685765",
    email: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    type: "Screen",
    date: "02/06/2026",
    slot: "1",
    time: "09:00",
  });

  const bookingsPage2 = Array(6).fill({
    name: "John.S",
    phone: "01712345678",
    email: "john@gmail.com",
    device: "Samsung/Note 20",
    type: "Battery",
    date: "03/06/2026",
    slot: "2",
    time: "10:00",
  });

  const bookings = page === 1 ? bookingsPage1 : bookingsPage2;

  return (
    <div className="min-h-screen text-slate-200 p-4 sm:p-6 md:p-8 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="bg-[#111827] border border-slate-800 p-4 sm:p-6 h-36 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 text-[#90A1B9] mb-1">
            <CiCalendar size={24} color="#51A2FF" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Total Booked
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-semibold py-2">34</div>
          <div className="text-green-500 text-sm mt-1">+8 this week</div>
        </div>

        <div className="bg-[#111827] border border-slate-800 p-4 sm:p-6 h-36 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 text-[#90A1B9] mb-1">
            <CiCircleCheck size={24} color="#05DF72" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              AI Booked
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-semibold py-2">28</div>
          <div className="text-slate-400 text-sm mt-1">82% of total</div>
        </div>

        <div className="bg-[#111827] border border-slate-800 p-4 sm:p-6 h-36 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 text-[#90A1B9] mb-1">
            <RiErrorWarningLine size={24} color="#FDC700" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Pending
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-semibold py-2">3</div>
          <div className="text-slate-400 text-sm mt-1">
            Awaiting confirmation
          </div>
        </div>
      </div>

      <div className="bg-[#111827] border border-slate-800 p-4 sm:p-6 rounded-xl mb-6">
        <p className="text-slate-400 mb-2 text-sm">Booking Link</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value="https://techstore.com/book?id=store123"
            readOnly
            className="input input-bordered w-full bg-[#0d121f] border-slate-700 text-slate-300 focus:outline-none"
          />
          <button className="btn btn-primary bg-[#152252] hover:bg-[#111B3C] border-none px-6 flex items-center justify-center">
            <MdOutlineContentCopy size={26} />
            Copy Link
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-[#111827] border border-slate-800 rounded-xl">
        <table className="table w-full min-w-[700px] sm:min-w-full">
          <thead className="bg-[#111827]">
            <tr className="border-b border-green-800 text-slate-400">
              <th>Client Name</th>
              <th>Client Phone</th>
              <th>Client Mail</th>
              <th>Device</th>
              <th>Repair Type</th>
              <th>Date</th>
              <th>Slot no</th>
              <th>Start Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
              >
                <td className="text-blue-400 font-medium cursor-pointer">
                  {item.name}
                </td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.device}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.slot}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button
          className={`btn btn-ghost ${
            page === 1 ? "text-slate-400" : "text-[#0F62FE]"
          }`}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          « Previous
        </button>

        <button
          className={`btn ${
            page === 1
              ? "btn-active bg-[#A6C8FF] border-none text-[#001D6C]"
              : "btn-ghost text-blue-400"
          }`}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          className={`btn ${
            page === 2
              ? "btn-active bg-[#A6C8FF] border-none"
              : "btn-ghost text-blue-400"
          }`}
          onClick={() => setPage(2)}
        >
          2
        </button>

        <button
          className={`btn btn-ghost ${
            page === 2 ? "text-slate-400" : "text-[#0F62FE]"
          }`}
          disabled={page === 2}
          onClick={() => setPage(page + 1)}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default Appointments;
