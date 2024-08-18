import { NavLink, Outlet } from "react-router-dom";
import Modal from "./ui/Modal";
import Input from "./ui/Input";

const Navbar = () => {
  return (
    <>
      <div className="navbar px-10 z-50 sticky top-0 shadow-[0_1px_5px_1px_rgba(0,0,0,0.1)] backdrop-blur shadow-white bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu flex flex-col justify-center items-center menu-sm dropdown-content h-screen w-[90vw] bg-white  rounded-box z-[1] mt-3  shadow"
            >
              <li className="font-semibold">
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li className="font-semibold">
                <NavLink to={"/overview"}>Overview</NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/approach"}>Our Approach</NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/review"}>Review</NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/faq"}>FAQ</NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/testApi"}>TestApi</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            <img
              src="../../images/imagecompressor/logo-min.png"
              alt="logo"
              height={"150px"}
              width={"150px"}
            />
          </NavLink>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className="font-semibold">
              <NavLink to={"/overview"}>Overview</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/approach"}>Our Approach</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/review"}>Review</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/faq"}>FAQ</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/testApi"}>TestApi</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative hidden lg:flex gap-5 items-center ">
            <img
              className="w-8 h-8 z-10 bg-blue-600 rounded-full p-2 cursor-pointer"
              src="../../images/phone.png"
              alt="phone"
            />
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
            <NavLink>
              <Modal className="bg-white">
                <form onSubmit={(e) => e.preventDefault()} method={"POST"} className="flex flex-col gap-5">
                  <Input
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    label={"Email"}
                  />
                  <Input
                    type={"phone"}
                    name={"phone"}
                    placeholder={"Phone"}
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    label={"Phone"}
                  />
                  <label className="text-blue-600 text-sm">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="textarea bg-black/10 textarea-bordered h-24"
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </Modal>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
