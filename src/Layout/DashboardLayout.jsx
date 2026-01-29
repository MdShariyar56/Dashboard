import { BsLightningCharge } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { NavLink, Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let title;
  switch (location.pathname) {
    case "/":
      title = "Dashboard Overview";
      break;
    case "/calls":
      title = "Call Logs & History";
      break;
    case "/appointments":
      title = "Appointments";
      break;
    case "/settings":
      title = "Settings";
      break;
    default:
      title = "Dashboard";
  }

  useEffect(() => {
    document.title = `Dashboard || ${title}`;
  }, [title]);

  return (
    <div className="flex h-screen bg-[#111B3C] text-white fixed w-full  ">
      <aside className="hidden md:flex w-64 bg-[#0f172a] flex-col py-4 border-r border-[#2B7FFF33]">
        <div className="flex items-center justify-center my-14">
          <h1 className="w-14 h-12 bg-gradient-to-b from-[#00FF88] to-[#00D4FF] rounded flex items-center justify-center text-black font-bold ">
            <BsLightningCharge className="text-3xl" />
          </h1>
        </div>
        <nav className="flex flex-col gap-4 px-2">
          <SidebarLink
            to="/"
            label="Dashboard Overview"
            icon={<FaHome size={24} />}
          />
          <SidebarLink
            to="/calls"
            label="Call Logs"
            icon={<IoCallOutline size={26} />}
          />
          <SidebarLink
            to="/appointments"
            label="Appointments"
            icon={<CiCalendar size={26} />}
          />
          <SidebarLink
            to="/settings"
            label="Settings"
            icon={<IoSettingsOutline size={26} />}
          />

          <button className="flex items-center gap-3 relative top-94 p-3 rounded-xl transition text-[#FF1100] hover:bg-[#111B3C] ">
            <IoIosLogOut size={30} color="#000000" />
            Log Out
          </button>
        </nav>
      </aside>

      {sidebarOpen && (
        <aside className="fixed inset-0 z-50 w-64 bg-[#0f172a] flex flex-col py-4 border-r border-gray-800 md:hidden">
          <button
            className="self-end m-4 text-white text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
          <div className="flex items-center justify-center mb-8">
            <h1 className="w-14 h-12 bg-gradient-to-b from-[#00FF88] to-[#00D4FF] rounded flex items-center justify-center text-black">
              <BsLightningCharge className="text-3xl" />
            </h1>
          </div>
          <nav className="flex flex-col gap-4 px-2">
            <SidebarLink
              to="/"
              label="Dashboard Overview"
              icon={<FaHome size={24} />}
            />
            <SidebarLink
              to="/calls"
              label="Call Logs"
              icon={<IoCallOutline size={26} />}
            />
            <SidebarLink
              to="/appointments"
              label="Appointments"
              icon={<CiCalendar size={26} />}
            />
            <SidebarLink
              to="/settings"
              label="Settings"
              icon={<IoSettingsOutline size={26} />}
            />
            <button className="flex items-center gap-3 relative top-94 p-3 rounded-xl transition text-[#FF1100] hover:bg-[#111B3C] ">
              <IoIosLogOut size={30} color="#000000" />
              Log Out
            </button>
          </nav>
        </aside>
      )}

      <main className="flex-1 overflow-y-auto">
        <header className="flex justify-between items-center md:hidden bg-[#0f172a] px-4 py-3 sticky top-0 ">
          <button
            className="text-[#FFFFFF] text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-xl text-[#FFFFFF] font-semibold">{title}</h1>
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.ibb.co/VYCWzyw9/Elipse-5.png"
            alt="user"
          />
        </header>
        <header className="hidden md:flex justify-between items-center mb-4 px-6 py-2 bg-[#0f172a] sticky top-0 z-50">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="flex items-center gap-10">
            <button>
              <IoMdNotificationsOutline size={30} color="#FFFFFF" />
            </button>
            <img
              className="w-16 h-16 rounded-full"
              src="https://i.ibb.co/VYCWzyw9/Elipse-5.png"
              alt="user"
            />
          </div>
        </header>
        <div className="px-4 md:px-6 bg-[#111B3C]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const SidebarLink = ({ to, label, icon }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-xl transition
      ${
        isActive
          ? "bg-gradient-to-r from-[#152252] to-[#111B3C] text-[#FFFFFF] border  shadow-[0_0_30px_rgba(210,234,255,0.8)]"
          : "text-[#FFFFFF] hover:bg-[#111B3C]"
      }`
    }
  >
    <span>{icon}</span> {label}
  </NavLink>
);

export default DashboardLayout;
