"use client";
import React from "react";
import { FloatingNav } from "../ui/framerUI/floating-navbar";
import { itemsNavbar } from "@/data";
export function Navbar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={itemsNavbar} />
    </div>
  );
}
