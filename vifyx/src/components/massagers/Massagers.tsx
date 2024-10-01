import instagram_icon from "images/icons/Link (1).svg";
import telegram_icon from "images/icons/Link (2).svg";
import vk_icon from "images/icons/Link.svg";
import { Link } from "react-router-dom";

const icons = [
  {
    id: 1,
    icon: vk_icon,
    name: "vk",
    link: "/",
  },
  {
    id: 2,
    name: "instagram",
    icon: instagram_icon,
    link: "/",
  },
  {
    id: 3,
    name: "telegram",
    icon: telegram_icon,
    link: "/",
  },
];

export default function Massagers() {
  return (
    <div className="flex gap-[18px]">
      {icons.map(({ icon, id, link, name }) => (
        <div key={id}>
          <Link to={link}>
            <img src={icon} alt={name} />
          </Link>
        </div>
      ))}
    </div>
  );
}
