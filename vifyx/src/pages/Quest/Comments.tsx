import man from "images/icons/avatar.jpg";
import { GoComment, GoDiscussionClosed, GoHeartFill } from "react-icons/go";
export function Comments() {
  return (
    <div className="comments">
      <h2 className="comments__count">
        <GoDiscussionClosed />
        Комментарии 2
      </h2>
      <textarea rows={1} className="comments__input" placeholder="Написать комментарий..." />
      <section className="comments__list">
        <article className="comment">
          <div className="comment__img">
            <img src={man} alt="" />
          </div>
          <div className="comment__content">
            <h4>Игорь</h4>
            <time dateTime="">20 Июня 2024</time>
            <p>
              С другой стороны рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании
              существенных финансовых и административных условий. Не следует, однако забыв
            </p>
          </div>
          <section className="comment__stats">
            <span>
              <GoHeartFill /> 226
            </span>
            <span>
              <GoComment /> Ответить
            </span>
          </section>
        </article>
        <hr />
        <article className="comment">
          <section className="comment__img">
            <img src={man} alt="" />
          </section>
          <section className="comment__content">
            <h4>Слава</h4>
            <time dateTime="">23 Июня 2024</time>
            <p>Круто!</p>
          </section>
          <section className="comment__stats">
            <span>
              <GoHeartFill /> 561
            </span>
            <span>
              <GoComment /> Ответить
            </span>
          </section>
        </article>
        <hr />
      </section>
    </div>
  );
}
