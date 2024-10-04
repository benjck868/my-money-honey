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
    <header className="bg-white p-4 mb-2 flex justify-between">
      <div className="block lg:hidden">
        <Sheets />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Form method="POST">
            <Button type="submit">Log Out</Button>
          </Form>
        </div>
      </div>
    </header>
  )
}
