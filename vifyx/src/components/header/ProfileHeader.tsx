import { ReactElement } from "react";
import image from "images/peoples_blog.jpg";

export interface IProfileHeader {
  children: ReactElement;
}

export default function ProfileHeader({ children }: IProfileHeader) {
  return (
    <div className="relative h-[280px] pt-1">
      <div className="absolute -z-10">
        <img src={image} alt="profile_header" className="h-[270px] w-full object-cover" />
      </div>
      <div className="relative h-full">{children}</div>
    </div>
  );
}
