"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

type NavbarProps = {
  variant?: "red" | "grey";
};

export default function NavbarWrapper({ variant = "red" }: NavbarProps) {
  const pathname = usePathname();
  if (pathname === "/hello") return null;
  return <Navbar variant={variant} />;
}
