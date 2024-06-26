import { Container } from "../components/container";
import { Search, User, ShoppingBag, AlignLeft } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

const UL = () => {
  const listItems = [
    "ABOUT",
    "CATEGORIES",
    "SHOP",
    "BLOGS",
    "REVIEWS",
    "CONTACT",
  ];
  return (
    <ul className="hidden cursor-pointer flex-row gap-8 xl:flex">
      {listItems.map((item) => (
        <li className="text-[14px] text-[#000000]">{item}</li>
      ))}
    </ul>
  );
};

const Right = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative flex items-center gap-6">
      <div className="relative hidden w-[200px] lg:block">
        <Search
          size={22}
          onClick={() => setisOpen(!isOpen)}
          className={`absolute bottom-1/2 right-0 hidden translate-y-1/2 cursor-pointer ${!isOpen ? "lg:block" : "lg:hidden"}`}
        />
        {/* input div */}
        <div
          className={`relative flex w-full items-center justify-between overflow-hidden rounded-full border border-neutral-500/10 bg-[#F8F1E8] px-4 py-2 outline-none transition-all duration-500 ${!isOpen ? "invisible opacity-0" : "visible opacity-100"}`}
        >
          <div className="flex items-center gap-2">
            <Search className="" size={18} />
            <input
              placeholder="Search"
              type="text"
              className="w-3/5 rounded-full bg-transparent placeholder-black outline-none"
            />
          </div>
          <X
            onClick={() => setisOpen(false)}
            className={`absolute right-4 z-30 size-5 cursor-pointer transition-all duration-500 ${!isOpen ? "hidden" : "block"}`}
          />
        </div>
      </div>

      <User className="cursor-pointer" size={22} />
      <div className="flex items-center justify-center gap-4">
        <ShoppingBag size={22} className="cursor-pointer" />
        <p className="hidden cursor-pointer lg:block">Cart(2)</p>
      </div>
      <AlignLeft size={22} className="cursor-pointer lg:hidden" />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="relative hidden w-full flex-row items-center justify-center py-2 lg:flex">
        <div
          className="bg-no-repeat-x absolute top-0 h-12 w-full bg-contain"
          style={{
            backgroundImage: "url('images/header-image.svg')",
          }}
        ></div>
        <Container>
          <div className="relative z-20 flex justify-between text-[12px] text-[#000000]">
            <p>From bowls to beds, we've got it all.</p>
            <p>Summer Deal 20% Off</p>
          </div>
        </Container>
      </header>

      <div className="flex w-full justify-center border-b border-gray-500/10 bg-[#FAEADA] py-6">
        <Container>
          <nav className="flex w-full items-center justify-between">
            <img className="cursor-pointer" src="images/logo.svg" alt="" />
            <UL />
            <Right />
          </nav>
        </Container>
      </div>
    </>
  );
};

export { Header };
