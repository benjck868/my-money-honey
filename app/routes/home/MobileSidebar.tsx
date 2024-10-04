import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { BarChart3, HandCoinsIcon, SettingsIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Sheets() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 px-0 pt-0 border-none">
        <VisuallyHidden.Root>
          <SheetHeader>
          <SheetTitle>Sidebar menu</SheetTitle>
          <SheetDescription>
            Please select sidebar menu
          </SheetDescription>
        </SheetHeader>
        </VisuallyHidden.Root>
        <div>
          <div className="h-16 flex items-center justify-center mb-2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">MONEY HONEY</h2>
        </div>
        <ul>
            <SheetClose asChild>
                <Link to="/home" className="flex items-center space-x-4">
                    <li className="flex items-center p-6 gap-5 hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                        <BarChart3 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">Dashboard</span>
                    </li>
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link to="/home/expenses" className="flex items-center space-x-4">
                    <li className="flex items-center p-6 gap-5 hover:bg-gray-100 w-full dark:hover:bg-gray-700">
                        <HandCoinsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium">Expenses</span>
                    </li>
                </Link>
            </SheetClose>
            
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
