import React from "react";
import icon_bell from "images/icons/Bell.svg";
import icon_share from "images/icons/Share.svg";
import icon_mdi_bell_outline from "images/icons/mdi_bell-outline.svg";
import icon_mdi_donation from "images/icons/mdi_donation.svg";
import IconButton from "../button/IconButton";

const actions = [
  {
    id: 1,
    icon: icon_bell,
    onclick: () => null
  },
  {
    id: 2,
    icon: icon_share,
    onclick: () => null
  },
  {
    id: 3,
    icon: icon_mdi_bell_outline,
    onclick: () => null
  },
  {
    id: 4,
    icon: icon_share,
    onclick: () => null
  },
  {
    id: 5,
    icon: icon_mdi_donation,
    onclick: () => null
  }
];

export default function BlogActionGroup() {
  return (
    <div className="flex flex-wrap gap-[8px]">
      {actions.map(item => (
        <IconButton key={item.id}  icon_url={item.icon} onClick={item.onclick} />
      ))}
    </div>
  );
}
