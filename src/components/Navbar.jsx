import { FaChevronDown } from "react-icons/fa";
import Button from "./home/Button";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
  SideContent,
  SideItems,
  DropDown
} from "responsive-navigation";
const navigation = () => {
  return (
    // <nav className="py-5 bg-[rgba(22,12,109,0.8)] absolute top-0 left-0 w-full z-50">
    //   <div className="container">
    //     <div className="flex items-center">
    //       <div className="w-1/5">
    //         <img src="/logo.png" alt="logo" />
    //       </div>
    //       <div className="w-3/5">
    //         <ul className="text-[#EFF4FA] flex gap-10 font-semibold text-lg items-center justify-center">
    //           <li>
    //             <Link
    //               to="/"
    //               className="group transition-all flex items-center gap-2"
    //             >
    //               <span className="group-hover:text-brand">Home</span>
    //               <FaChevronDown className="text-xs" />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="about"
    //               className="group transition-all flex items-center gap-2"
    //             >
    //               <span className="group-hover:text-brand">About</span>
    //               <FaChevronDown className="text-xs" />
    //             </Link>
    //           </li>
    //           <li>
    //             <a className="group transition-all flex items-center gap-2">
    //               <span className="group-hover:text-brand">Service</span>
    //               <FaChevronDown className="text-xs" />
    //             </a>
    //           </li>
    //           <li>
    //             <a className="group transition-all flex items-center gap-2">
    //               <span className="group-hover:text-brand">Portfolio</span>
    //               <FaChevronDown className="text-xs" />
    //             </a>
    //           </li>
    //           <li>
    //             <a className="group transition-all flex items-center gap-2">
    //               <span className="group-hover:text-brand">Price</span>
    //               <FaChevronDown className="text-xs" />
    //             </a>
    //           </li>
    //           <li>
    //             <a className="group transition-all flex items-center gap-2">
    //               <span className="group-hover:text-brand">Blog</span>
    //               <FaChevronDown className="text-xs" />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="w-1/5">
    //         <Button title="Contact Us" />
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <Navbar
    style={{
      backgroundColor: "white",
      borderBottom: "1px solid #dee2e6",
      padding: "20px 0",
    }}
  >
  <NavbarBrand>
   <Link to="/"> LOGO</Link>
  </NavbarBrand>
  <NavbarContent>
    <NavItem>
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem>
      <Link to="/about">About</Link>
    </NavItem>
    <DropDown style={{ width: "150px", zIndex: "999" }} label="Services">
      <NavItem>
        <a href="/">Service 1</a>
      </NavItem>
      <NavItem>
        <a href="/">Service 2</a>
      </NavItem>
      <NavItem>
        <a href="/">Service 3</a>
      </NavItem>
    </DropDown>
    <NavItem>
      <a href="/">Contact</a>
    </NavItem>
  </NavbarContent>
  <SideContent>
    <SideItems>Sign In</SideItems>
    <SideItems>Sign Up</SideItems>
  </SideContent>
    </Navbar>
  );
};

export default navigation;
