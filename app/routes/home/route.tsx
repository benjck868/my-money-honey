import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
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
      <div className="flex min-h-svh font-sans relative">
        <Sidebar />
        <main className="bg-slate-500 w-full min-h-full flex flex-col lg:ml-64">
          <Navbar />
          <div className="lg:px-2">
            <Outlet />
          </div>
        </main>
      </div>
    )
}
