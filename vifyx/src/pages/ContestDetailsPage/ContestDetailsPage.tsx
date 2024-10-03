import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContestDetails, Result, ShortContest } from "src/components/contests/type";
import { useGetContestDetailsQuery } from "src/redux/api/contestsApi";
import Competition from "src/components/competition/Competition";
import CompetitionResults from "src/components/competition-results/CompetitionResults";
import PostCard from "src/components/post/Post";
import SelectCompetition, { Option } from "src/components/competition/SelectCompetition";

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

  const options: Option[] = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    return data?.data?.posts.map(post => {
      return {
        value: post.id,
        label: post.title
      };
    });
  }, [data]);

  const competitionResult: Result[] = useMemo(() => {
    if (!data?.data?.results) return [];
    const results = data.data.results;
    const transformedArray = Object.keys(results).flatMap(place =>
      results[place].map(item => ({
        user: item.user,
        post: item.post,
        pk: item.pk
      }))
    );
    return transformedArray;
  }, [data]);

  console.log(competitionResult);
  if (!data?.data) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <Competition contest={contest} />
      {!!options.length && (
        <div className="w-[1000px]">
          <div className="w-[1000px]">
            <h2 className="mb-5 text-[22px] font-normal text-[#000000]">Выберите работу</h2>
          </div>
          <SelectCompetition options={options} />
          <div className="w-[1000px] pb-10 pt-4">
            <button className="w-[252px] max-w-[252px] rounded-md bg-[#252A3D] py-4 text-center text-[20px] font-bold text-white">
              Подать работу
            </button>
          </div>
        </div>
      )}
      {!!competitionResult.length && <CompetitionResults results={competitionResult} />}
      {!!data?.data?.posts?.length && (
        <div className="w-[1000px]">
          <h2 className="mb-5 text-[28px] font-bold text-[#000000]">Участвующие работы</h2>
          <div className="contPosts w-fill flex flex-col gap-5">
            {data?.data?.posts.map(post => {
              return <PostCard key={post.id} post={post} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
