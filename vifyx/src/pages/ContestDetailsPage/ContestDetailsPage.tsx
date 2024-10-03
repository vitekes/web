import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContestDetails, ShortContest } from "src/components/contests/type";
import { useGetContestDetailsQuery } from "src/redux/api/contestsApi";
import PostCard from "./NewFeedlistItem/Post";
import Competition from "src/components/competition/Competition";
import CompetitionResult from "src/components/competitionResult";

export default function ContestDetailsPage() {
  const id = useParams<{ id: string }>().id;
  const { data } = useGetContestDetailsQuery<{ data: { data?: ContestDetails } }>({
    id
  });

  const contest: ShortContest = useMemo(() => {
    return {
      title: data?.data?.title || "",
      start_date: data?.data?.start_date || "",
      end_date: data?.data?.end_date || "",
      count_participants: data?.data?.count_participants || 0,
      preview: data?.data?.preview || "",
      description: data?.data?.description || ""
    };
  }, [data]);

  if (!data?.data) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Competition contest={contest} />
      <CompetitionResult />
      <h2 className="mb-5 text-[28px] font-bold text-[#000000]">Участвующие работы</h2>
      <div className="contPosts w-fill flex flex-col gap-5">
        {data?.data?.posts.map(post => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
