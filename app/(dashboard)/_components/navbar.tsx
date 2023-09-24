import { NavbarRoutes } from "@/components/navbar-routes"

import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b border-black h-full flex items-center bg-gradient-to-l from-[#FAF3F0] via-[#C4DFDF] to-[#DBC4F0]
    shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}