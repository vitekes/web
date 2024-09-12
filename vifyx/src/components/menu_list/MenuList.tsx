import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface IMenuList {
  hidden?: boolean
}

export default function MenuList({ hidden = true }: IMenuList ) {
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
            <li>
              <Link to="/">Лента</Link>
            </li>
            <li>
              <Link to="/my-blog">Мой блог</Link>
            </li>
            <li>
              <Link to="/collection">Коллекция</Link>
            </li>
            <li>
              <Link to="/company">Компании</Link>
            </li>
            <li>
              <Link to="/ratings">Рейтинги</Link>
            </li>
          </ul>
        </nav>
      </div>
    )}
    </>
  )
}
