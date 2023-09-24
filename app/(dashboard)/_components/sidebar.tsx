import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
  return (
    <div className="h-full border-r border-black flex flex-col overflow-y-auto      bg-gradient-to-r from-[#FAF3F0] via-[#C4DFDF] to-[#DBC4F0]
     
    shadow-sm">
      <div className="p-6 ">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}