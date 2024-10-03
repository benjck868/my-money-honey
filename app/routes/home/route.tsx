import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "~/.server/services/auth";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { DashboardContext } from "~/context/DashboardProvider";
import { twMerge } from "tailwind-merge";

export async function loader({request}:LoaderFunctionArgs){
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return user
};

export async function action({request}:ActionFunctionArgs) {
  await authenticator.logout(request, { redirectTo: "/login" });
}

export default function route() {
    const loaderData = useLoaderData<typeof loader>()
    const dashboard = useContext(DashboardContext)
    const sidebarStatus = dashboard&&dashboard.state.sidebar
    return (
      <div className="flex h-screen">
        <Sidebar />
        <main className={twMerge("bg-gray-100 w-full flex flex-col lg:ml-64")}>
          <Navbar />
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
                <div className="text-2xl font-bold">$10,000</div>
              </div>
              <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-bold mb-2">New Customers</h2>
                <div className="text-2xl font-bold">100</div>
              </div>
              <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-bold mb-2">Active Users</h2>
                <div className="text-2xl font-bold">500</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}
