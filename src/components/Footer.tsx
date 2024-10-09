import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SeparatorVertical } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-white/30 box-border w-full fixed bottom-0 backdrop-blur-lg border-t border-white/10 text-center py-4 mt-8">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <p className="text-sm text-gray-300">
          Made with <span className="">❤️</span> by Prasanth A R
        </p>
        <p className=""> {" | "}</p>
        <Link
          href={"https://github.com/0xprasanth/ssl-checker"}
          target="_blank"
          className="flex items-center justify-center gap-2 animate-pulse text-xl text-white"
        >
          <GitHubLogoIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
