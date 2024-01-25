import {  useState } from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { CurrencyDollarIcon } from "@heroicons/react/16/solid";
const Navbar = () => {
 
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <>
        <div className="navbar justify-between bg-base-100 shadow-xl">
            <button id="main-title" className="ml-4 flex gap-2 text-4xl font-bold">
              <CurrencyDollarIcon className="h-10 w-10 text-white-500 self-end"/>
              Expenser
              </button>
            <div className="flex gap-5" id="left-end">
            <div className="w-8 h-8">
                <ThemeButton/>
            </div>  
                <div className="avatar">
                    <div className="w-12 rounded-xl">
                        <img src="https://th.bing.com/th/id/R.05208c284fe4c902f5be6b8dde947b5f?rik=q01m42bpKHRVfA&pid=ImgRaw&r=0" />
                    </div>        
                </div>
               
            </div>
        </div>
    </>
  );
};

export default Navbar;
