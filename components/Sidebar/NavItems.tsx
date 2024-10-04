import { usePathname } from "next/navigation";
import {  FileCheck2,  LayoutDashboard, ShoppingBag, ShoppingCart,  TrendingUpDown, UserRound, UsersRound } from "lucide-react";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "Dashboard",
      href: "/",
      icon: <LayoutDashboard size={20} />,
      active: pathname === "/",
      position: "top",
    },
    {
      name: "Customers",
      href: "/customers",
      icon: <UserRound size={20} />,
      active: isNavItemActive(pathname, "/customers"),
      position: "top",
    },
    {
      name: "Suppliers",
      href: "/suppliers",
      icon: <UsersRound size={20} />,
      active: isNavItemActive(pathname, "/suppliers"),
      position: "top",
    },
    {
      name: "Products",
      href: "/products",
      icon: <ShoppingCart size={20} />,
      active: isNavItemActive(pathname, "/products"),
      position: "top",
    },
    {
      name: "Trading",
      href: "/trading",
      icon: <TrendingUpDown size={20} />,
      active: isNavItemActive(pathname, "/trading"),
      position: "top",
    },
    {
      name: "Sales",
      href: "/sales",
      icon: <ShoppingBag size={20} />,
      active: isNavItemActive(pathname, "/sales"),
      position: "top",
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <FileCheck2 size={20} />,
      active: isNavItemActive(pathname, "/reports"),
      position: "top",
    },
  ];
};
