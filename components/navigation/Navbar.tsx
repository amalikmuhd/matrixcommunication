"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import Logo from "@/components/Logo";
import { STORE } from "@/lib/links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(10);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isOpen && "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60",
        scrolled
          ? "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"
          : "lg:bg-transparent md:shadow-none",
      )}
    >
      <nav className="container flex items-center px-4 py-4 lg:px-12">
        <Logo />

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <NavItem to="/about-us">About us</NavItem>
          <NavItem to="/#howitworks">How it works</NavItem>
          <NavItem to="/#features">Features</NavItem>
          <NavItem to="/#faq">FAQ</NavItem>

          <Button
            asChild
            className="h-12.5 cursor-pointer rounded-[14px] bg-[#031B1C] px-5 py-3 font-bold text-lg text-white hover:bg-[#031B1C]"
          >
            <a href={STORE.play}>Download Now</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          className="ml-auto p-0 hover:bg-transparent lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="menu-button"
        >
          {isOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
        </Button>
      </nav>

      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] z-50 bg-white/80 shadow-md backdrop-blur-md transition-all duration-300 supports-[backdrop-filter]:bg-white/60 lg:hidden">
          <div className="flex flex-col gap-2 px-4 pb-4">
            <NavItem to="/about-us" onClick={() => setIsOpen(false)}>
              About us
            </NavItem>
            <NavItem to="/#howitworks" onClick={() => setIsOpen(false)}>
              How it works
            </NavItem>
            <NavItem to="/#features" onClick={() => setIsOpen(false)}>
              Features
            </NavItem>
            <NavItem to="/#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </NavItem>

            <Button
              asChild
              className="h-12.5 cursor-pointer rounded-[14px] bg-[#031B1C] px-5 py-3 font-bold text-lg text-white hover:bg-[#031B1C]"
            >
              <a href={STORE.play}>Download Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
