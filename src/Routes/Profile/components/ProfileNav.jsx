import { Link } from "react-router-dom";
import { ProfileNavs } from "../../../utils";
import { useState } from "react";

export const ProfileNav = ({ id }) => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <nav className="w-full -translate-y-[5rem]">
        <ul className="flex justify-center items-start gap-[2rem]">
          {ProfileNavs.map((item, index) => (
            <li key={index} className="uppercase">
              <Link
                to={`/profile/${id}/${item.url}`}
                onClick={() => setSelected(item.name)}
                className={`${
                  selected === item.name
                    ? "border-b-2 border-[#389FDD] duration-300"
                    : "border-b-2 border-transparent duration-300"
                } text-[1.2rem] font-medium`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
