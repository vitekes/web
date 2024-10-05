import React, { useState } from "react";

const listButton = [
  {
    id: 1,
    name: "Лента",
    active: true
  },
  {
    id: 2,
    name: "Альбомы",
    active: false
  },
  {
    id: 3,
    name: "Квесты",
    active: false
  },
  {
    id: 4,
    name: "Об авторе",
    active: false
  }
];

export default function BlogNav() {
  const [activeButton, setActiveButton] = useState(listButton);

  const clickHandler = (id: number) => {
    setActiveButton(prev => {
      const newList = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id === id) {
          prev[i].active = true;
        } else {
          prev[i].active = false;
        }
        newList.push(prev[i]);
      }

      return newList;
    });
  };

  return (
    <div className="mb-[30px] flex items-center justify-center border-b border-t border-[#000]">
      <ul className="my-[15px] flex gap-[10px] font-[Inter] text-[18px] text-[#737373] md:gap-[30px]">
        {listButton.map(item => (
          <li key={item.id}>
            <button type="button" className={item.active ? "font-bold" : ""} onClick={() => clickHandler(item.id)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
