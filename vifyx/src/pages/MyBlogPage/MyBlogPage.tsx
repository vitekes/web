import avatar from "images/icons/avatar.jpg";
import image from "images/peoples_blog.jpg";
import "./MyBlogPage.sass";
export default function MyBlogPage() {
  return (
    <>
      <div className="container mx-auto px-1 md:w-[1120px] md:px-0">
        <img src={image} alt="er" />
        <img className="ava h-40 w-40" src={avatar} alt="Avatar" />
        <section className="profile">
          <h1 className="profile__name">KinoBar</h1>
          <h3 className="profile__subscribes">
            <span className="font-semibold">1204</span> подписчиков
          </h3>
          <p className="profile__description">Описание сайта, что пользователь здесь увидит</p>
        </section>
      </div>
      ;
    </>
  );
}
