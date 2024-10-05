import React from 'react'
import { useFetchBestBlogsQuery } from 'src/redux/api/blog';
import avatar2 from "images/icons/avatar2.jpg";
import icon_users from "images/icons/users.svg";


export default function PopularUsers() {
    const { data } = useFetchBestBlogsQuery({ page: 1 });

    return (
      <div className="space-y-[20px] pl-[15px] xl:pl-0">
        <div className="text-base font-bold lg:text-2xl">Популярные авторы</div>
        <div className="space-y-[20px]">
          {data?.data?.map(item => (
            <div className="border-b" key={item.id}>
              <div className="flex items-center gap-[5px]">
                <div className="h-[40px] w-[40px] rounded-lg lg:h-[40px] lg:min-w-[40px] ml-1">
                  <img
                    className="h-[40px] w-[40px] rounded-lg object-cover lg:h-[40px] lg:min-w-[40px]"
                    src={avatar2}
                    alt="avatar"
                  />
                </div>
                <span className="font-bold flex-auto">{item.title}</span>
                <div className='font-bold flex gap-1'>
                    <img src={icon_users} alt='icon_users'/>
                    <span>{item.subscribers}</span>
                </div>
              </div>
              {/* <div className="font-bold">{item.views_week}</div> */}
            </div>
          ))}
        </div>
      </div>
    );
}
