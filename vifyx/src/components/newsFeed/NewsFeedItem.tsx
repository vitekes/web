import avatar from "images/icons/avatar.jpg";
import ch_plus from "images/icons/ch_plus.svg";
import dots from "images/icons/dots.svg";
import like from "images/icons/like.svg";
import view from "images/icons/view.svg";

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
      year: "numeric"
    });
  }

  return (
    <div className="flex rounded-xl border border-black">
      <div className="size-min:text-base m-[5px] flex flex-auto flex-col gap-[10px] p-[5px] text-[8px] sm:m-[10px] sm:text-base">
        <div className="flex items-center gap-[15px]">
          <div className="h-[20px] w-[20px] sm:h-[40px] sm:w-[40px]">
            <img src={avatar} alt="avatar" />
          </div>
          <div>{props.user}</div>
        </div>
        <div>
          <span className="font-bold">{props.title}</span>
        </div>
        <div
          className="line-clamp-3 max-w-[210px] flex-auto sm:max-w-[438px] lg:line-clamp-4"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
        <div className="flex justify-between gap-[5px] sm:gap-[15px]">
          <div className="flex items-center gap-[25px]">
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
          <div className="flex items-center gap-[30px]">
            <div className="w-[10px] sm:w-[30px]">
              <img src={ch_plus} alt="ch_plus" />
            </div>
            <div className="w-[10px] sm:w-[30px]">
              <img src={dots} alt="dots" />
            </div>
          </div>
        </div>
      </div>
      <div className="m-[5px] max-h-[233px] max-w-[264px] sm:m-[10px]">
        <img
          className="h-[130px] w-[130px] rounded-lg object-cover object-center sm:h-[233px] sm:w-[264px]"
          src={`${"http://167.172.96.11"}${props.preview}`}
          alt="preview"
        />
      </div>
    </div>
  );
}
