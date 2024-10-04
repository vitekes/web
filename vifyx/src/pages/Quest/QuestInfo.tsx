import image from "images/wom.png";
import { GoArrowRight, GoBook, GoEye, GoGift, GoHeart, GoRepo } from "react-icons/go";
export function QuestInfo() {
  const date = new Date();
  return (
    <div className="questInfo">
      <div className="left">
        <img className="quest__img" src={image} alt="" />
        <div className="left__btn">
          <button>
            <GoBook />
            Читать\Купить за $10
          </button>
          <button>Добавить в коллекцию</button>
        </div>
      </div>
      <div className="right">
        <h1 className="quests__title">Почему пингвины не летают</h1>
        <h3 className="quest__author">Владимир</h3>
        <span className="category flex items-center gap-1">
          {<GoRepo />}Животные {<GoArrowRight />} пингвины
        </span>

        <span className="quest__time">
          Опубликовано: <time dateTime={date.toISOString()}>{date.toLocaleString()}</time>
        </span>
        <section className="icons">
          <span>
            <GoHeart /> 52
          </span>
          <span>
            <GoEye /> 1161
          </span>
          <span>
            <GoGift /> 488
          </span>
        </section>
        <section className="tags">
          <div className="tag">Животные</div>
          <div className="tag">Пингвины</div>
          <div className="tag">Биология</div>
        </section>
        <hr />
        <section className="quest__description">
          <h2 className="quests__title">Описание</h2>
          <p>
            С другой стороны рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании
            существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и
            сфера нашей активности требуют определения и уточнения существенных финансовых и административных условий.
            Повседневная практика показывает, что новая модель организационной деятельности требуют определения и уточнения
            системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что реализация
            намеченных плановых заданий позволяет выполнять важные задания по разработке дальнейших направлений развития.
            Разнообразный и богатый опыт рамки и место обучения кадров позволяет оценить значение модели развития.
          </p>
        </section>
      </div>
    </div>
  );
}
