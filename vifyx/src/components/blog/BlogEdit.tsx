import React from "react";
import { Link } from "react-router-dom";

export default function BlogEdit() {
  const edit_links = [
    {
      name: "Редактировать страницу",
      link: "edit/"
    },
    {
      name: "Редактировать уровни подписки",
      link: "edit/level/subscribe/"
    },
    {
      name: "Редактировать черновики",
      link: "edit/draft/"
    }
  ];
  return (
    <div className="absolute right-[10px] top-[50%] w-[235px] -translate-y-1/2 bg-white">
      <ul className="my-[20px] font-[Inter] text-[11px]">
        {edit_links.map(item => (
          <li key={item.link} className="border-b border-t">
            <Link to={item.link} className="block py-[8px] pl-[23px] hover:bg-[#E9E9E9]">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
