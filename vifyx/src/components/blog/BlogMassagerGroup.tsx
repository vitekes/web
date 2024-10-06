import { Link } from "react-router-dom";

import icon_instagram from "src/images/icons/instagram.svg";
import icon_facebook from "images/icons/facebook.svg";
import icon_vk from "images/icons/vk.svg";
import icon_youtube from "images/icons/youtube.svg";
import icon_telegram from "images/icons/telegram.svg";

export default function BlogMassagerGroup() {
  const massagers = [
    {
      icon: icon_instagram,
      link: "/"
    },
    {
      icon: icon_facebook,
      link: "/"
    },
    {
      icon: icon_vk,
      link: "/"
    },
    {
      icon: icon_youtube,
      link: "/"
    },
    {
      icon: icon_telegram,
      link: "/"
    }
  ];

  return (
    <ul className="flex max-w-[200px] flex-wrap gap-[15px]">
      {massagers.map(item => (
        <li key={item.icon} className="max-h-[48px]">
          <Link to={item.link} className="inline-block rounded-lg border border-[#676767] p-[8px]">
            <img src={item.icon} alt="" className="h-[30px] w-[30px]" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
