import { Post } from "src/components/contests/type";
import avatar from "images/icons/avatar.jpg";
import like from "images/icons/like.svg";
import view from "images/icons/view.svg";
import comment from "images/icons/comment.svg";
import share from "images/icons/share.svg";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { API_URL_CLIENT } from "src/constants/api.constants";

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <div className="flex rounded-xl border border-black">
      <div className="size-min:text-base m-[5px] flex flex-auto flex-col gap-[10px] p-[5px] text-[8px] sm:m-[10px] sm:text-base">
        <div className="flex items-center gap-[15px]">
          <div className="h-[20px] w-[20px] sm:h-[40px] sm:w-[40px]">
            <img src={avatar} alt="avatar" />
          </div>
          <div>{post.user}</div>
        </div>
        <div>
          <span className="font-bold">{post.title}</span>
        </div>
        <div
          className="line-clamp-3 max-w-[210px] flex-auto sm:max-w-[438px] lg:line-clamp-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex gap-[5px] sm:gap-[15px]">
          <div className="flex items-center gap-[25px]">
            {post.date && <div>{format(new Date(post.date), "dd MMMM yyyy", { locale: ru })}</div>}
            {post.count_views && (
              <div className="flex items-center gap-[5px]">
                <div className="w-[10px] sm:w-[30px]">
                  <img src={view} alt="view" />
                </div>
                <span className="font-bold">{post.count_views}</span>
              </div>
            )}
            <div className="flex items-center gap-[5px]">
              <div className="w-[10px] sm:w-[30px]">
                <img src={like} alt="like" /> {/* Provide like icon */}
              </div>
              <span className="font-bold">{post.count_likes}</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="w-[10px] sm:w-[30px]">
                <img src={comment} alt="comment" />
              </div>
              <span className="font-bold">{post.count_comments}</span>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="ml-[100px] w-[10px] sm:w-[30px]">
              <img src={share} alt="share" />
            </div>
          </div>
        </div>
      </div>
      <div className="m-[5px] max-h-[233px] max-w-[264px] items-center sm:m-[10px]">
        <div className="h-[130px] w-[130px] overflow-hidden rounded-lg">
          {post.preview ? (
            <img
              className="h-full w-full object-cover object-center sm:h-[233px] sm:w-[264px]"
              src={API_URL_CLIENT + post.preview}
              alt="preview"
            />
          ) : (
            <div className="h-full w-full bg-gray-600" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
