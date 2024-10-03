import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import SidebarNavigation from "./SidebarNavigation"

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
          <SidebarNavigation />
        </div>
      </SheetContent>
    </Sheet>
  )
}
