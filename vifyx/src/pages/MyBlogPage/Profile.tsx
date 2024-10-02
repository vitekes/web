import pencil from "images/icons/pencil.svg";
export function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__name">KinoBar</h1>
      <h3 className="profile__subscribes">
        <span className="font-semibold">1081</span> подписчиков
      </h3>
      <p className="profile__description">Описание сайта, что пользователь здесь увидит</p>
      <button className="profile__button" type="button">
        <img src={pencil} alt="Pencil" />
        Написать пост
      </button>
    </section>
  );
}
