import { Link } from "@remix-run/react"
import { HandCoinsIcon, HomeIcon, LucideProps } from "lucide-react"
import { ReactNode } from "react"
import { ScrollArea } from "~/components/ui/scroll-area"

type MenuItemProps = {
  name: string,
  href: string,
  icon?: ReactNode
}
 export const menuItems:MenuItemProps[] = [
    { name: "Home", href: "/home", icon:<HomeIcon />},
    { name: "Expenses", href: "/home/expenses" , icon: <HandCoinsIcon /> },
    { name: "Projects", href: "#" },
    { name: "Tasks", href: "#" },
    { name: "Reporting", href: "#" },
    { name: "Users", href: "#" },
    { name: "Messages", href: "#" },
    { name: "Files", href: "#" },
    { name: "Calendar", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Help & Support", href: "#" },
    { name: "Billing", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "API", href: "#" },
    { name: "Documentation", href: "#" },
    
  ]

export default function SidebarNavigation() {
  return (
    <>
    <div className="flex flex-col h-full border-r">
          <ScrollArea className="flex-1 px-4 mt-16">
            <nav className="flex flex-col gap-2 py-4">
              {menuItems.map(({name, href, icon},index) => (
                <Link
                  key={index}
                  to={href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors"
                >
                  {icon&&icon}
                  {name}
                </Link>
              ))}
            </nav>
          </ScrollArea>
          <div className="border-t p-4">
            <p className="text-sm text-muted-foreground">
              Logged in as <strong>user@example.com</strong>
            </p>
          </div>
        </div>
    </>
  )
}
