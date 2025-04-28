import { brainwave } from "../assets";
import { navigation } from "../constants";
// import { useLocation } from "react-router-dom";
import Button from "./Btn";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
export const Header = () => {
  // const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handelClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed w-full text-white top-0 z-50 bg-n-8 backdrop-blur-sm border-b
    border-n-6 lg:bg-[#0e0c15] lg:backdrop-blur-sm ${
      openNavigation ? "bg-[#0e0c15]" : "bg-[#13101d7f]"
    }`}
    >
      <div
        className="flex items-center px-5 lg:px-7.5
      xl:px-10 max-lg:py-4"
      >
        <a href="" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>

        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handelClick}
                className={`block relative font-code text-2xl uppercase  text-[#6c7275] transition-colors hover:text-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1 transition-colors hover:text-n-1 lg:block"
        >
          new Account
        </a>

        <Button className="hidden">sign in</Button>

        <Button onClick={toggleNavigation} className="ml-auto lg:hidden px-3">
          <MenuSvg className="" openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

// 40:00 min
