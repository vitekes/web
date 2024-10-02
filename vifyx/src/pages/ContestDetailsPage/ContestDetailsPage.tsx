import React from "react";
import { useParams } from "react-router-dom";
import { useGetContestDetailsQuery } from "src/redux/api/contestsApi";

export default function ContestDetailsPage() {
  const id = useParams<{ id: string }>().id;
  const { data } = useGetContestDetailsQuery({
    id
  });
  console.log(data, "data");
  return <div>ContestDetailsPage</div>;
}
