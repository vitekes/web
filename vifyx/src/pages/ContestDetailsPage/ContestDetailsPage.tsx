import React from "react";
import { useParams } from "react-router-dom";
import { ContestDetails } from "src/components/contests/type";
import { useGetContestDetailsQuery } from "src/redux/api/contestsApi";
import NewFeedListItem from "./newFeedlistItem";
import Competition from "src/components/competiton";
import CompetitionResult from "src/components/competitionResult";



export default function ContestDetailsPage() {
  const id = useParams<{ id: string }>().id;
  const { data } = useGetContestDetailsQuery<{ data: { data?: ContestDetails } }>({
    id
  });
  console.log(data?.data?.posts, "data");
  return <div className="flex justify-center flex-col items-center ">
    <Competition/>
    <CompetitionResult/>
    <h2 className="font-bold text-[#000000] text-[28px] mb-5">Участвующие работы</h2>
    <div className="contPosts w-fill flex flex-col gap-5">
    { data?.data?.posts.map(post => {
          return (
              <NewFeedListItem key={post.id} post={post} />
          )
        })}
      </div> 
  </div>;
}
