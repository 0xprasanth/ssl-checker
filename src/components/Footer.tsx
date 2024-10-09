import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-white/30 box-border w-full sticky bottom-0 backdrop-blur-lg border-t border-white/10 text-center py-4 mt-8">
      <div className="container mx-auto">
        <p className="text-sm text-gray-300">Made with ❤️ by Prasanth A R</p>
        <p className="text-xs text-gray-400 mt-2">
          Follow us on
          <a
            href="https://twitter.com/yourcompany"
            className="text-blue-400 hover:underline mx-1"
          >
            Twitter
          </a>
          and
          <a
            href="https://linkedin.com/yourcompany"
            className="text-blue-400 hover:underline mx-1"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
