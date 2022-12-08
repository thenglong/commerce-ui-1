import Link from "next/link";

import CommerceJsSVG from "../svg/commercejs.svg";
import Logo from "../svg/commercejs.svg";

function Footer() {
  return (
    <footer className="py-6 lg:py-12">
      <div className="container mx-auto px-3 md:px-4 lg:px-5 md:flex md:items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <Link href="/" title="Return to ChopChop">
            <Logo className="w-full md:w-auto md:h-8" />
          </Link>
        </div>

        <div className="w-full md:w-1/3 flex items-center md:justify-center">
          <a
            href="https://commercejs.com"
            title="Visit Commerce.js website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-faded-black hover:text-black transition-colors">
            <span>Powered by</span>
            <CommerceJsSVG className="h-4" />
          </a>
        </div>

        <div className="w-full md:w-1/3">
          <div className="md:text-right space-x-1">
            <Link href="/" className="text-black">
              Shop
            </Link>
            ,
            <a
              href="https://github.com/chec/commercejs-chopchop-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black">
              About
            </a>
            ,
            <a
              href="https://twitter.com/commercejs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black">
              Contact
            </a>
            ,
            <Link href="/" className="text-black">
              Legal
            </Link>
            ,
            <Link href="/" className="text-black">
              Privacy
            </Link>
            ,<span>&copy; 2021</span>
            <p className="hidden md:block italic font-serif">
              Fine tools for thoughtful cooks
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
