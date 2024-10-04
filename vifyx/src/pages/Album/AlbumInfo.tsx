import image from "images/wom.png";
import { GoCommentDiscussion, GoEye, GoGift, GoHeart, GoShare } from "react-icons/go";
import { Tags } from "src/components/tags/Tags";
import "./Album.sass";
export function AlbumInfo() {
  const date = new Date();
  return (
    <div className="album">
      <h1>Название альбома</h1>
      <h2>Username</h2>
      <Tags tags={["Add text", "Tag"]} />
      <p>
        С другой стороны рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании
        существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и
        сфера нашей активности требуют определения и уточнения существенных финансовых и административных условий. Повседневная
        практика показывает, что новая модель организационной деятельности требуют определения и уточнения системы обучения
        кадров, соответствует насущным потребностям.
      </p>

      <img src={image} alt="Image" />

      <section className="album__icons">
        <time dateTime={date.toISOString()}>13 Июня 2024</time>
        <button>
          <GoEye />
          125
        </button>
        <button>
          <GoHeart />
          896
        </button>
        <button>
          <GoGift />
          235
        </button>
        <button>
          <GoCommentDiscussion />
          234
        </button>
        <button>
          <GoShare />
        </button>
      </section>
    </div>
  );
}
