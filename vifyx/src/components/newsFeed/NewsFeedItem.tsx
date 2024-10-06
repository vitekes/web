import { useEffect, useState } from "react";

import avatar from "../../images/icons/avatar.jpg";
import view from "../../images/icons/view.svg";
import like from "../../images/icons/like.svg";
import shared from "../../images/icons/sh.svg";
// import dots from "../../images/icons/dots.svg";
import category_text from "../../images/icons/category_text.svg";
import book from "../../images/icons/Book.svg";
import photo from "../../images/icons/photo.svg";
import mess_count from "../../images/icons/mess_count.svg";
import big_default_img from "../../images/images/default_264X233.png";
import min_default_img from "../../images/images/default_130X130.png";
import { INewsFeedItem } from "src/redux/api/blog";


const type_content_icons = {
  posts: category_text,
  tests: book,
  quests: book,
  albums: photo
};

export default function NewsFeedItem(props: INewsFeedItem) {
  let formattedDate = "";
  if (props.date) {
    const date = new Date(props.date);
    formattedDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    // Удаляем обработчик при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let previewImage = ""

  if (props.preview) {
    previewImage = props.preview;
  } else {
    if (windowSize.width > 639) {
      previewImage = big_default_img;
    } else {
      previewImage = min_default_img;
    }
  }

  const parseHTMLString = (htmlString: string): string => {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, "text/html");
    return parsedDocument.body.textContent || "";
  };

  const parse_content_text = parseHTMLString(props.content ? props.content : "");

  return (
    <div className="flex gap-[20px] rounded-xl border border-black p-[5px] md:p-[15px] h-[145px] md:h-[280px] lg:h-[310px] shadow-xl">
      <div className="size-min:text-base flex h-full flex-auto flex-col justify-between text-[8px] sm:text-base">
        <div className="flex items-center gap-[15px]">
          <div className="h-[20px] w-[20px] sm:h-[40px] sm:w-[40px]">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="text-[8.6px] md:text-[16px]">{props.user}</div>
        </div>
        <div>
          <span className="font-[Inter] font-bold leading-normal">{props.title}</span>
        </div>
        <div className="flex h-[15px] items-center gap-[5px]">
          <img className="w-[7px] md:w-auto" src={type_content_icons[props.namespace]} alt={props.namespace} />
          <span className="font-[Inter] text-[5px] md:text-[10px]"> {props?.label_info?.replace("->", ">")}</span>
        </div>
        <div className="flex gap-[6px]">
          {props.tags?.map(tag => (
            <span className="border-[1px] md:border-[2px] border-green-500 bg-green-50 px-3 text-[5px] md:text-[12px] leading-normal text-green-600 font-[Inter]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="line-clamp-4  lx:line-clamp-5 md:max-h-[6em] lx:max-h-[7.5em] max-w-[210px] flex-auto md:max-w-[438px]">{parse_content_text}</div>
        <div className="flex justify-between gap-[5px] sm:gap-[15px]">
          <div className="flex items-center gap-[25px]">{formattedDate && <div>{formattedDate}</div>}</div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[5px]">
              <div className="lg:w-[22px] sm:w-[22px] w-[10px]">
                <img src={view} alt="view" />
              </div>
              <span className="text-[#737373]">{props.count_views}</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="lg:w-[22px] sm:w-[22px] w-[10px]">
                <img src={like} alt="like" />
              </div>
              <span className="text-[#737373]">{props.count_likes}</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="lg:w-[22px] sm:w-[22px] w-[10px]">
                <img src={mess_count} alt="mess_count" />
              </div>
              <span className="text-[#737373]">{props.count_comments}</span>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="lg:w-[22px] sm:w-[22px] w-[10px]">
              <img src={shared} alt="shared" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-[5px] max-h-[134px] md:max-h-[267px] max-w-[134px] md:max-w-[252px]">
        <img
          className="rounded-lg object-cover object-center h-full"
          src={previewImage}
          alt="preview"
        />
      </div>
    </div>
  );
}
