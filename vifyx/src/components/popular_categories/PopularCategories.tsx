import React from "react";
import { Link } from "react-router-dom";

export default function PopularCategories() {
  const categoryList = [
    {
      name: "Психология",
      link: "/"
    },
    {
      name: "IT",
      link: "/"
    },
    {
      name: "Путешествия",
      link: "/"
    }
  ];

  return (
    <div className="space-y-[20px] pb-[30px] xl:pb-0">
      <div className="text-base font-bold lg:text-2xl">Популярные категории</div>
      <ul className="flex flex-wrap gap-[8px] xl:gap-[15px]">
        {categoryList.map(item => (
          <li key={item.name}>
            <Link
              to={item.link}
              className="inline-block rounded-full border border-black px-[12px] py-[6px] font-medium lg:px-[12px] lg:py-[6px]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
