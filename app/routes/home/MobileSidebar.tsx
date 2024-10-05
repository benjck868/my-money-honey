import { useState } from "react"
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "~/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { VisuallyHidden } from "node_modules/@radix-ui/react-visually-hidden/dist"

export default function Component() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Dashboard", href: "#" },
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 left-4 z-40">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>
              SideBar Menu
            </SheetTitle>
            <SheetDescription>
              This menu use sheet component of shadcn
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 h-16 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>
          <ScrollArea className="flex-1 px-4">
            <nav className="flex flex-col gap-2 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </ScrollArea>
          <div className="border-t p-4">
            <p className="text-sm text-muted-foreground">
              Logged in as <strong>user@example.com</strong>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}