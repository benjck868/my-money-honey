import { Link } from "@remix-run/react";
import { BarChart3, HandCoinsIcon, SettingsIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";

export default function SidebarNavigation() {
  return (
    <>
        <div className="h-16 flex items-center justify-center mb-2">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">MONEY HONEY</h2>
            </div>
            <ul>
                
                <Link to="/home" className="flex items-center space-x-4">
                    <li className="flex items-center p-6 gap-5 hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                    
                        <BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">Dashboard</span>
                    
                    </li>
                </Link>
                <Link to="/home/expenses" className="flex items-center space-x-4">
                    <li className="flex items-center p-6 gap-5 hover:bg-gray-100 w-full dark:hover:bg-gray-700">
                        
                        <HandCoinsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">Expenses</span>
                        
                    </li>
                </Link>
                <Link to="#" className="flex items-center space-x-4">
                    <li className="flex items-center p-6 gap-5 hover:bg-gray-100 w-full dark:hover:bg-gray-700">
                        
                        <ShoppingCartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">Orders</span>
                        
                    </li>
                </Link>
                <Link to="#" className="flex items-center space-x-4">
                    <li className="flex items-center p-6 gap-5 w-full hover:bg-gray-100 dark:hover:bg-gray-700">                    
                        <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">Settings</span>                    
                    </li>
                </Link>
            </ul>
    </>
  )
}
