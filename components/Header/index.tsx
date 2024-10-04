import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import { CircleCheck, Expand, Presentation, SquareCheckBig } from "lucide-react";

const Header = () => {
  return (
    <header className="flex w-full justify-end bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-10 2xsm:gap-7">
          <ul className="flex items-center gap-10 2xsm:gap-4">
            <li><span className="flex items-center gap-2 cursor-pointer hover:text-primary"><Presentation size={20} />Meetings</span></li>
            <li><span className="flex items-center gap-2 cursor-pointer hover:text-primary"><SquareCheckBig size={20} />Tasks</span></li>
            <li><span className="flex items-center gap-2 cursor-pointer hover:text-primary"><CircleCheck size={20} />Approvals</span></li>
          </ul>
          <ul className="flex items-center gap-10 mr-10 2xsm:gap-4">

            <Expand size={20} className="hover:text-primary cursor-pointer" />

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
