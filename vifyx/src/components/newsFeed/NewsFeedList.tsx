import { useLatestNewsTapeQuery } from "src/redux/api/blog";
import NewsFeedItem from "./NewsFeedItem";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import { INewsFeedItem } from "src/redux/api/blog";
import { debounce } from "lodash";

export interface INewsFeedList {
  tracked?: boolean;
}

export default function NewsFeedList({ tracked }: INewsFeedList) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<INewsFeedItem []>([]);
  const { data, error, isLoading, isFetching } = useLatestNewsTapeQuery({
    q: tracked ? "tracked" : "",
    page: page
  });

  const { ref, inView } = useInView({
    threshold: 1
  });

  const loadMore = useCallback(
    debounce(() => {
      if (inView && !isFetching && data?.next) {
        setPage(prevPage => prevPage + 1);
      }
    }, 300),
    [inView]
  );

  useEffect(() => {
    console.log(error);
    
    if (data?.results) {
      setItems((prevItems: INewsFeedItem[]) => [...prevItems, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    loadMore();
  }, [inView, loadMore]);

  useEffect(() => {
    setPage(1);
    setItems([]);
  }, [tracked]);

  return (
    <div className="space-y-[12px] md:space-y-[30px]">
      {items?.map((item: INewsFeedItem) => <NewsFeedItem key={`${item.date}-${item.title}`} {...item} />)}
      <div ref={ref}>{isLoading || isFetching ? "Loading ..." : ""}</div>
    </div>
  );
}
