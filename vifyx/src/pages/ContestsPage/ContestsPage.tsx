import ContestsCard from "src/components/contests/ContestsCard";
import { Contest } from "src/components/contests/type";
import { useGetContestsQuery } from "src/redux/api/contestsApi";

export default function ContestsPage() {
  const { data } = useGetContestsQuery({});

  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] px-[50px] pt-10">
        <div className="pb-[22px]">
          <h1 className="text-[40px] font-normal text-black">Kонкурсы</h1>
        </div>
        <div className="space-y-[22px]">
          {data?.results?.map((contest: Contest) => <ContestsCard key={contest.id} contest={contest} />)}
        </div>
      </div>
    </div>
  );
}
