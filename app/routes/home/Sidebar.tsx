import SidebarNavigation from "./SidebarNavigation";
export default function Sidebar() {
    return (
        <aside className="w-64 hidden h-full lg:flex flex-col fixed z-10 ">
            <SidebarNavigation />
        </aside>
    )
}
