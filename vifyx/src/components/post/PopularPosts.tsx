import React from "react";
import avatar2 from "images/icons/avatar2.jpg";
import default_image from "images/images/default_264X233.png";
import { IPostItem, useFetchPopularPostsQuery } from "src/redux/api/post";

interface ICustomPostItem extends IPostItem {
  index: number;
}
function PostItem(props: ICustomPostItem) {
  const date = new Date(props.date);

  const day = date.getDate(); // Получаем день месяца (1-31)
  const month = date.toLocaleString("ru-RU", { month: "long" }); // Получаем название месяца на русском
  const hours = String(date.getHours()).padStart(2, "0"); // Получаем часы и добавляем ведущий ноль
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Получаем минуты и добавляем ведущий ноль

  // Формируем финальную строку
  const formatted_data = `${day} ${month} в ${hours}:${minutes}`;

  return (
    <div className="flex gap-[10px]">
      <div className="flex-shrink-0 flex-grow-0 basis-[128px]">
        <img
          src={props.preview || default_image}
          alt={props.namespace}
          className="h-[85px] w-[128px] rounded-md object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-[20px] font-black text-[#252A3D]">{props.index + 1}</span>{" "}
          <span className="text-[20px] font-medium">{props.title}</span>
        </div>
        <div>{formatted_data}</div>
      </div>
    </div>
  );
}

export default function PopularPosts() {
  const { data } = useFetchPopularPostsQuery({ page: 1 });

  return (
    <div className="space-y-[20px] pl-[15px] xl:pl-0">
      <div className="text-base lg:text-2xl">Популярные посты</div>
      <div className="space-y-[20px]">
        {data?.results?.map((item, index) => {
          const key_str = `${item.id}_${item.date}`;
          if (data?.results?.length - 1 !== index) {
            return (
              <div key={key_str} className="space-y-[10px]">
                <PostItem {...item} index={index} />
                <div className="flex justify-end">
                  <hr className="block w-[55%] border-black" />
                </div>
              </div>
            );
          } else {
            return <PostItem key={key_str} {...item} index={index} />;
          }
        })}
      </div>
    </div>
  );
}
