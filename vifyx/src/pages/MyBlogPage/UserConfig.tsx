import album from "images/icons/album.svg";
import humans from "images/icons/humans.svg";
import money from "images/icons/money.svg";
import moneyHumans from "images/icons/money_humans.svg";
const options = [
  {
    id: 1,
    icon: humans,
    value: 52,
    name: "участника"
  },
  {
    id: 2,
    icon: moneyHumans,
    value: 100,
    name: "платных подписчиков"
  },
  {
    id: 3,
    icon: album,
    value: 10,
    name: "публикаций"
  },
  {
    id: 4,
    icon: money,
    value: "$4300",
    name: "за месяц"
  }
];
export function UserConfig() {
  return (
    <div className="user__config container mx-auto px-1 md:w-[1120px] md:px-0">
      <section>
        <h1>Название</h1>
        <p>
          Описание автора, что подписчик увидит в данном блоге в данном блоге блоге Описание автора, что подписчик увидит в данном
          блоге в данном блоге блоге Описание автора, что подписчик увидит в данном блоге в данном блоге блоге Описание автора,
          что подписчик увидит в данном блоге в данном блоге блоге Описание автора, что подписчик увидит в данном блоге в данном
          блоге блоге
        </p>
        <hr />
        <section className="user__config-info">
          <ul>
            {options.map(({ icon, id, name, value }) => (
              <li key={id}>
                <img src={icon} alt="icon" />
                <h4 className="val">{value} </h4>
                <h4 className="nam">{name} </h4>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
