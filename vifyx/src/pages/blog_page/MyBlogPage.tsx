import ProfileHeader from "src/components/header/ProfileHeader";
import NewsFeedList from "src/components/newsFeed/NewsFeedList";

import BlackButton from "src/components/button/BlackButton";
import BlogEdit from "src/components/blog/BlogEdit";
import BlogMassagerGroup from "src/components/blog/BlogMassagerGroup";
import BlogActionGroup from "src/components/blog/BlogActionGroup";
import BlogUserProfile from "src/components/blog/BlogUserProfile";
import BlogNav from "src/components/blog/BlogNav";
import PopularPosts from "src/components/post/PopularPosts";
import SearchBlock from "src/components/search/SearchBlock";
import SubscriptionList from "src/components/subscription/SubscriptionList";

export default function MyBlogPage() {
  const Desktop = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      return (
        <div className="flex w-full flex-wrap xl:flex-col xl:flex-nowrap xl:gap-[30px] xl:border-l xl:pl-[15px]">
          <SearchBlock/>
          <PopularPosts/>
          <SubscriptionList/>
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto px-1 md:w-[1120px] md:px-0">
      <div className="mb-[25px]">
        <ProfileHeader>
          <BlogEdit />
        </ProfileHeader>
        <div className="relative flex flex-nowrap">
          <div className="min-h-[150px] flex-shrink-0 flex-grow-0 basis-[33.333%] pt-[20px]">
            <BlogMassagerGroup />
          </div>
          <div className="min-h-[150px] flex-shrink-0 flex-grow-0 basis-[33.333%]">
            <BlogUserProfile />
          </div>
          <div className="min-h-[150px] flex-shrink-0 flex-grow-0 basis-[33.333%] pt-[20px]">
            <div className="flex items-center gap-3">
              <div className="space-y-[10px]">
                <BlackButton text="Написать" btnWidth="212px" onClick={() => null} />
                <BlackButton text="Отcлеживaть" onClick={() => null} />
              </div>
              <div>
                <BlogActionGroup />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center font-[Recoleta] text-[22px] text-[#585858]">
          Описание сайта, что пользователь здесь увидит
        </div>
      </div>
    <BlogNav/>
      <div className="flex flex-wrap gap-[30px] xl:flex-nowrap">
        <div className="flex-initial space-y-[30px] md:min-w-[748px]">
          {<NewsFeedList tracked={false} />}
        </div>
        <Desktop/>
      </div>
    </div>
  );
}
