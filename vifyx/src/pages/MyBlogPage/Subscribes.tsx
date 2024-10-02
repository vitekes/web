const subscribes = [
  {
    id: 1,
    name: "Минимальная",
    price: 150,
    prev: ["Доступ к двум роликам", "Доступ к прямым эфирам"]
  },
  {
    id: 2,
    name: "Средняя",
    price: 210,
    prev: ["Доступ к двум роликам", "Доступ к прямым эфирам", "Доступ к тгк"]
  },
  {
    id: 3,
    name: "VIP",
    price: 300,
    prev: ["Доступ к двум роликам", "Доступ к прямым эфирам", "Доступ к тгк", "VIP оформление"]
  }
];
export function Subscribes() {
  return (
    <section className="subscribes container mx-auto px-1 md:w-[1120px] md:px-0">
      <h2 className="text-center">Выберите подписку</h2>
      <section className="subscribes__blocks">
        {subscribes.map(({ name, price, prev, id }) => (
          <article className="subscribes__block" key={id}>
            <div className="subscribes__block-title">
              <h3>{name}</h3>
              <span>${price} в месяц</span>
            </div>
            <ul>
              {prev.map((pr, index) => (
                <li key={index}>{pr}</li>
              ))}
            </ul>
            <button className="subscribes__block-btn">Подписаться</button>
          </article>
        ))}
      </section>
    </section>
  );
}
