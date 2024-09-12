import React from "react";
import NewsFeedItem, { INewsFeedItem } from "./NewsFeedItem";
import { useDispatch } from "react-redux";
import { useLatestNewsTapeQuery } from "../../redux/api/blogApi";
import { useState } from "react";

export interface INewsFeedList {
  tracked?: boolean;
}

export default function NewsFeedList({ tracked }: INewsFeedList) {
  const { data, error, isLoading } = useLatestNewsTapeQuery({
    q: tracked ? "tracked" : "",
  });

  return (
    <div className="space-y-[30px]">
      {data?.results?.map((item: INewsFeedItem) => (
        <NewsFeedItem key={`${item.date}-${item.title}`} {...item} />
      ))}
    </div>
  );
}
