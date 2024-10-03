import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { useContext, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { DashboardContext } from "~/context/DashboardProvider";
import Sheets from "./MobileSidebar";
import { Form } from "@remix-run/react";

export default function Navbar() {
  const dashboard = useContext(DashboardContext)
  const sidebarStatus = dashboard&&dashboard.state.sidebar
  const themeStatus = dashboard&&dashboard.state.theme
  useEffect(()=>{
    console.log(JSON.stringify(dashboard))
  },[sidebarStatus,themeStatus])
  return (
    <header className="bg-white p-4 mb-4 flex justify-between">
      <div className="block lg:hidden">
        <Sheets />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Welcome, John Doe</h1>
        <div className="flex items-center">
          <img src="https://via.placeholder.com/32" alt="Profile" className="rounded-full mr-2" />
          <span className="text-gray-600">John Doe</span>
          <Form method="POST">
            <Button type="submit">Log Out</Button>
          </Form>
        </div>
      </div>
    </header>
  )
}
