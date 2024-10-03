import { Post } from 'src/components/contests/type';
import avatar from "images/icons/avatar.jpg";
import like from "images/icons/like.svg";
import view from "images/icons/view.svg";
import comment from "images/icons/comment.svg";
import share from "images/icons/share.svg";

interface Props {
    post: Post
}

const NewFeedListItem = ({post}:Props) => {
    let formattedDate = "";
    if (post.date) {
        const date = new Date(post.date);
        formattedDate = date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
        });
    }
  return (
      <div className="flex rounded-xl border border-black">
        <div className="size-min:text-base m-[5px] flex flex-auto flex-col gap-[10px] p-[5px] text-[8px] sm:m-[10px] sm:text-base">
          <div className="flex items-center gap-[15px]">
              <div className="h-[20px] w-[20px] sm:h-[40px] sm:w-[40px]">
                  <img src={avatar} alt="avatar" />
              </div>
              <div>{post.user}</div> {/* Render the username */}
          </div>
          <div>
              <span className="font-bold">{post.title}</span> {/* Render the title */}
          </div>
          <div
            className="line-clamp-3 max-w-[210px] flex-auto sm:max-w-[438px] lg:line-clamp-4"
            dangerouslySetInnerHTML={{ __html: post.content }} // Render content as HTML
          ></div>
          <div className="flex  gap-[5px] sm:gap-[15px]">
              <div className="flex items-center gap-[25px]">
                {formattedDate && <div>{formattedDate}</div>}
                    {post.count_views && (
                      <div className="flex items-center gap-[5px]">
                          <div className="w-[10px] sm:w-[30px]">
                              <img src={view} alt="view" /> {/* Provide view icon */}
                          </div>
                          <span className="font-bold">{post.count_views}</span> {/* Render views */}
                      </div>
                    )}
                  <div className="flex items-center gap-[5px]">
                      <div className="w-[10px] sm:w-[30px]">
                          <img src={like} alt="like" /> {/* Provide like icon */}
                      </div>
                      <span className="font-bold">{post.count_likes}</span> {/* Render likes */}
                  </div>
                  <div className="flex items-center gap-[5px]">
                      <div className="w-[10px] sm:w-[30px]">
                          <img src={comment} alt="comment" /> {/* Provide ch_plus icon */}
                      </div>
                      <span className='font-bold'>{post.count_comments}</span>
                  </div>
            </div>
            <div className="flex items-center gap-[30px]">
                <div className="w-[10px] sm:w-[30px] ml-[100px]">
                    <img src={share} alt="share" /> {/* Provide dots icon */}
                </div>
            </div>
          </div>
        </div>
        <div className="m-[5px] max-h-[233px] max-w-[264px] sm:m-[10px]">
          <img
            className="h-[130px] w-[130px] rounded-lg object-cover object-center sm:h-[233px] sm:w-[264px]"
            src={`http://167.172.96.11${post.preview}`}  // Render the preview image
            alt="preview"
          />
        </div>
      </div>
  );
};

export default NewFeedListItem;
