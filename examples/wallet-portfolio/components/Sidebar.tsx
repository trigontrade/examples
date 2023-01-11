import {
  faGear,
  faLineChart,
  faMessage,
  faOtter,
  faQuestionCircle,
  faRotate,
  faStar,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="relative hidden h-screen py-5 pt-8 transition-all duration-700 ease-in-out group md:flex md:flex-col bg-slate-800 md:w-40 lg:w-52">
      <Link
        id="sidebar-item-Home"
        className="relative flex items-center px-4 py-2 text-orange-300 group hover:bg-slate-700"
        href="/"
      >
        <div className="flex items-center justify-center mr-2 text-orange-500">
          <FontAwesomeIcon icon={faOtter} />
        </div>
        <span className="truncate">MetaWallet</span>
      </Link>

      <div className="flex flex-col overflow-y-auto">
        <nav className="mt-6">
          <div className="space-y-3">
            <Link
              id="sidebar-item-Portfolio"
              className="relative flex items-center px-4 py-2 text-white group hover:bg-slate-700"
              href="/"
            >
              <div className="flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faLineChart} />
              </div>
              <span className="truncate">Portfolio</span>
            </Link>

            <Link
              id="sidebar-item-Swap"
              className="relative flex items-center px-4 py-2 font-semibold group hover:bg-slate-700 text-midnight-primary dark:text-white"
              href="/swap"
              aria-current="page"
            >
              <div className="hidden md:inline-block h-6 w-0.5 bg-midnight-primary absolute right-0"></div>
              <div className="flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faRotate} />
              </div>
              <span className="truncate">Bridge & Swap</span>
            </Link>

            <Link
              id="sidebar-item-Watchlist"
              className="relative flex items-center px-4 py-2 text-white group hover:bg-slate-700"
              href="/watchlist"
            >
              <div className="flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="truncate">Watchlist</span>
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex flex-1 mt-3">
        <div className="w-full">
          <Link
            id="sidebar-item-Settings"
            className="relative flex items-center px-4 py-2 text-white group hover:bg-slate-700"
            href="/watchlist"
          >
            <div className="flex items-center justify-center mr-2">
              <FontAwesomeIcon icon={faGear} />
            </div>
            <span className="truncate">Settings</span>
          </Link>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <div>
          <div className="w-full mt-3">
            <Link
              href="/swap"
              className="relative flex items-center px-4 py-2 text-white group hover:bg-slate-700"
            >
              <div className="flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>
              <span className="truncate">FAQ</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href="/swap"
              className="relative flex items-center px-4 py-2 text-white group hover:bg-slate-700"
            >
              <div className="flex items-center justify-center mr-2">
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <span className="truncate">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      <Link
        id="terms-of-service-desktop"
        href="/swap"
        className="flex items-center px-6 py-4 -mb-5 text-white border-t cursor-pointer border-slate-700 hover:bg-slate-700"
      >
        <div className="mr-2 text-sm font-medium">Terms of service</div>
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </Link>
    </div>
  );
}
