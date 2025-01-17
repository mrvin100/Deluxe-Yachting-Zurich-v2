import { FC } from "react";
import { AppContainer } from "./app-container";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Button } from "../ui/button";
interface navItem {
  title: string;
  link: string;
}
export const Header: FC = () => {
  const navItems: navItem[] = [
    { title: "our charter", link: "/charter" },
    { title: "our events", link: "/events" },
    { title: "water taxi", link: "/water-taxi" },
    { title: "about us", link: "/about" },
    { title: "get in touch", link: "/get-in-touch" },
  ];
  return (
    <header>
      <AppContainer className="flex gap-8 justify-between items-center py-6 md:px-8 max-w-full">
        <Link href={"/"}>
          <Image
            src={"/wpc-logo.png"}
            height={100}
            width={100}
            alt="logo image"
            className="h-auto w-auto max-h-12 bg-white rounded-full"
          />
        </Link>
        <nav className="hidden md:min-w-[50vw] md:flex justify-between items-center gap-8">
          {navItems &&
            navItems.length > 0 &&
            navItems.map((navItem) => (
              <Link
                key={navItem.title}
                href={navItem.link}
                className="uppercase font-normal text-xs tracking-widest hover:text-primary"
              >
                {navItem.title}
              </Link>
            ))}
        </nav>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <LayoutGrid />
        </Button>
      </AppContainer>
    </header>
  );
};