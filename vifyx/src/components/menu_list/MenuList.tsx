import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IMenuList {
  hidden?: boolean;
}
interface ILink {
  link: string;
  name: string;
}
const links: ILink[] = [
  {
    link: "/",
    name: "Лента",
  },
  {
    link: "/",
    name: "Мой блог",
  },
  {
    link: "/collection",
    name: "Коллекция",
  },
  {
    link: "/company",
    name: "Компании",
  },
  {
    link: "/ratings",
    name: "Рейтинги",
  },
];

export default function MenuList({ hidden = true }: IMenuList) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (hidden) {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hidden]);

  return (
    <>
      {(!hidden || width >= 768) && (
        <div>
          <nav>
            <ul className="flex gap-[11px] lg:gap-[22px] flex-col items-center md:items-start md:flex-row">
              {links.map(({ link, name }, index) => (
                <li key={index}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
