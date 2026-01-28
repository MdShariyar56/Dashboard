import { createBrowserRouter } from "react-router";
import CallLogs from "../Pages/CallLogs";
import DashboardLayout from "../Layout/DashboardLayout";
import Overview from "../Pages/Overview";
import Settings from "../Pages/Settings";
import Appointments from "../Pages/Appointments";


export const router = createBrowserRouter([

    {
     path: "/",
     element: <DashboardLayout />,
     children:[
        {
            path: "/",
            element: <Overview></Overview>
        },
        {
        path: "/Calls",
        element: <CallLogs />
        },
        {
            path: "/appointments",
            element: <Appointments></Appointments>
        },
        {
          path: "/Settings",
          element: <Settings></Settings>
        }
     ]
    },
    
])