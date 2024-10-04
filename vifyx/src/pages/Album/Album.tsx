import { Comments } from "../Quest/Comments";
import { AlbumInfo } from "./AlbumInfo";

export function Album() {
  return (
    <div className="album__wrapper container mx-auto px-1 md:w-[1120px] md:px-0">
      <AlbumInfo />
      <hr className="mb-6" />
      <Comments />
    </div>
  );
}
