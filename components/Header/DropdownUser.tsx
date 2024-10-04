import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from '../../images/profile.jpg'
import {  ChevronDown, LogOut, Settings, User } from "lucide-react";
const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            className="rounded-full"
            src={profile}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>
        <span className="hidden text-left lg:block mr-5">
          <span className="block  font-semibold text-black">
            Jane Doe
          </span>
          <span className="block text-xs">Admin</span>
        </span>
        <ChevronDown size={20} />

      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 pb-7.5 pt-6  dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <User size={20}/>
              My Profile
            </Link>
          </li>
       
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 pb-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Settings size={20} />
              Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <LogOut size={20} />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
