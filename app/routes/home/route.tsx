import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useRouteError } from "@remix-run/react";
import { authenticator } from "~/.server/services/auth";

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
  return (
    <div className="bg-gray-100 font-sans">
        <div className="flex h-screen bg-red-400">
            <aside className="bg-gray-800 w-64 flex flex-col fixed z-10 h-full">
                <div className="flex items-center justify-center h-16 bg-gray-900 text-white font-bold">
                    <span>Honey Money</span>
                </div>
                <div className="flex flex-col h-full justify-between">
                    <ul className="flex flex-col mt-4">
                        <li className="px-4 py-2 hover:bg-gray-700 rounded-md">
                        <a href="#" className="text-gray-300 hover:text-white">Overview</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 rounded-md">
                        <a href="#" className="text-gray-300 hover:text-white">Analytics</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 rounded-md">
                        <a href="#" className="text-gray-300 hover:text-white">Settings</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col mt-4">
                        <li className="px-4 py-2 hover:bg-gray-700 rounded-md">
                        <Form method="post">
                            <button className="text-white">Log Out</button>
                        </Form>
                        </li>
                    </ul>
                </div>            
            </aside>

            <main className="bg-gray-100 w-full flex flex-col p-4 ml-64">
            <header className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">My Dashboard</h1>
                    <div className="size-12 bg-slate-200 rounded-full"></div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
                <div className="text-4xl font-bold text-gray-700">$10,000</div>
                <div className="text-sm text-gray-500 mt-2">Last 30 days</div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold mb-2">New Users</h2>
                <div className="text-4xl font-bold text-gray-700">100</div>
                <div className="text-sm text-gray-500 mt-2">This week</div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold mb-2">Active Projects</h2>
                <div className="text-4xl font-bold text-gray-700">5</div>
                <div className="text-sm text-gray-500 mt-2">In progress</div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
                <ul className="list-disc pl-4">
                <li className="text-gray-600">New project added: "Website Redesign"</li>
                <li className="text-gray-600">Invoice #12345 sent to John Doe</li>
                <li className="text-gray-600">Completed task: "Write blog post"</li>
                </ul>
            </div>
            <div>
                {JSON.stringify(loaderData)}
            </div>
            </main>
        </div>
    </div>
  )
}
