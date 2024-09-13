import React from "react";

import avatar from "../../images/icons/avatar.jpg";
import view from "../../images/icons/view.svg";
import like from "../../images/icons/like.svg";
import ch_plus from "../../images/icons/ch_plus.svg";
import dots from "../../images/icons/dots.svg";
import temp_img from "../../images/temp/Rectangle 369.jpg";

export interface INewsFeedItem {
  user: string;
  preview: string;
  title: string;
  content: string;
  date: string;
}

export default function NewsFeedItem(props: INewsFeedItem) {
  let formattedDate = "";
  if (props.date) {
    const date = new Date(props.date);
    formattedDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="flex border border-black rounded-xl">
      <div className="m-[5px] sm:m-[10px] p-[5px] flex gap-[10px] flex-col flex-auto  text-[8px] sm:text-base size-min:text-base">
        <div className="flex items-center gap-[15px]">
          <div className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]">
            <img src={avatar} alt="avatar" />
          </div>
          <div>{props.user}</div>
        </div>
        <div>
          <span className="font-bold">{props.title}</span>
        </div>
        <div className="max-w-[210px] sm:max-w-[438px] flex-auto line-clamp-3 lg:line-clamp-4" dangerouslySetInnerHTML={{ __html: props.content }}>
        </div>
        <div className="flex justify-between gap-[5px] sm:gap-[15px]">
          <div className="flex gap-[25px] items-center">
            {formattedDate && <div>{formattedDate}</div>}
            <div className="flex items-center gap-[5px]">
              <div className="w-[10px] sm:w-[30px]">
                <img src={view} alt="view" />
              </div>
              <span className="font-bold">18k</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="w-[10px] sm:w-[30px]">
                <img src={like} alt="like" />
              </div>
              <span className="font-bold">22</span>
            </div>
          </div>
          <div className="flex gap-[30px] items-center">
            <div className="w-[10px] sm:w-[30px]">
              <img src={ch_plus} alt="ch_plus" />
            </div>
            <div className="w-[10px] sm:w-[30px]">
              <img src={dots} alt="dots" />
            </div>
          </div>
        </div>
      </div>
      <div className="m-[5px] sm:m-[10px] max-w-[264px] max-h-[233px]">
        <img
          className="w-[130px] sm:w-[264px] h-[130px] sm:h-[233px] object-cover object-center rounded-lg"
          src={`${"http://167.172.96.11"}${props.preview}`}
          alt="preview"
        />
      </div>
    </div>
  );
}
