import type { MetaFunction } from "@remix-run/node";
import { Link, useRouteError } from "@remix-run/react";
import { isErrorResponse } from "@remix-run/react/dist/data";

export const meta: MetaFunction = () => {
  return [
    { title: "honey money" },
    { name: "description", content: "welcome to your expense tracker" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-100 font-sans lg:px-60">

        <header className="bg-cover bg-center bg-no-repeat py-24 px-4 relative">            
            <div className="container mx-auto text-center text-gray-700">
                <h1 className="text-5xl font-bold mb-4">Say Goodbye to Money Fights! Honey, let's make this easier! 💖</h1>
                <p className="text-xl mb-8">Money Honey: The app that makes couples' money management easy, transparent, and even a little fun.</p>
                <div className="text-center mt-12">
                  <Link to="/signup" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg">Sign Up Free</Link>
                </div>
            </div>
        </header>

        <main className="container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">Track Shared Expenses</h3>
                    <p className="text-gray-600">Easily add bills, groceries, entertainment, and more to your shared budget.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">Monitor Individual Spending</h3>
                    <p className="text-gray-600">Track your own personal expenses for greater awareness and control.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">Set Financial Goals</h3>
                  <p className="text-gray-600">Work together to reach your financial goals, whether it's saving for a vacation or a down payment.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">Enjoy Financial Peace</h3>
                    <p className="text-gray-600">Build a stronger financial foundation and reduce financial stress with Money Honey.</p>
                </div>
            </div>

            <div className="text-center mt-12">
                <Link to="/signup" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg">Sign Up Free</Link>
            </div>
        </main>

        <footer className="bg-gray-900 text-white py-4 px-4 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Money Honey</p>
            </div>
        </footer>

    </div>
  );
}

export function ErrorBoundary(){
  const error = useRouteError()
  if(isErrorResponse(error)){
    return(
      <div>{JSON.stringify(error)}</div>
    )
  }
}
