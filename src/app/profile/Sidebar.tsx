"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="text-center font-semibold">
      <div className="flex flex-col space-y-5">
        <Link
          href={"/profile"}
          className={
            pathname == "/profile"
              ? "text-white bg-baseBgColor py-1 rounded"
              : "border rounded py-1"
          }
        >
          Profile
        </Link>
        <Link
          href={"/profile/myhotel"}
          className={
            pathname == "/profile/myhotel"
              ? "text-white bg-baseBgColor py-1 rounded"
              : "border rounded py-1"
          }
        >
          My Room
        </Link>
        <Link
          href={"/profile/change-password"}
          className={
            pathname == "/profile/change-password"
              ? "text-white bg-baseBgColor py-1 rounded"
              : "border rounded py-1"
          }
        >
          Change Password
        </Link>
 
      </div>
    </div>
  );
};

export default Sidebar;
