import avatar from "images/icons/avatar.jpg";
import image from "images/peoples_blog.jpg";
import "./MyBlogPage.sass";
import { Profile } from "./Profile";
import { ProfileNav } from "./ProfileNav";
import { Subscribes } from "./Subscribes";
import { UserConfig } from "./UserConfig";
export default function MyBlogPage() {
  return (
    <>
      <div className="container mx-auto px-1 md:w-[1120px] md:px-0">
        <img src={image} alt="er" />
        <img className="ava h-40 w-40" src={avatar} alt="Avatar" />
        <Profile />
      </div>
      <ProfileNav />
      <Subscribes />
      <UserConfig />
    </>
  );
}
