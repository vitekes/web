import avatar2 from "images/icons/avatar2.jpg";
import { useFetchPopularNowQuery } from "src/redux/api/blog";

export default function PopularNow() {
  const { data } = useFetchPopularNowQuery({ page: 1 });

  return (
    <div className="space-y-[20px] pl-[15px] xl:pl-0">
      <div className="text-base font-bold lg:text-2xl">Популярное сейчас</div>
      <div className="space-y-[20px]">
        {data?.popular_day?.map(item => (
          <div className="border-b" key={item.id}>
            <div className="flex items-center gap-[5px]">
              <div className="mb-[6px] mr-[10px] h-[30px] w-[30px] rounded-full lg:h-[30px] lg:min-w-[30px]">
                <img
                  className="h-[30px] w-[30px] rounded-full object-cover lg:h-[30px] lg:min-w-[30px]"
                  src={avatar2}
                  alt="avatar"
                />
              </div>
              <span className="text-[14px]">{item.user}</span>
            </div>
            <div className="font-bold">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
