import { useLatestNewsTapeQuery } from 'src/redux/api/blogApi'
import NewsFeedItem, { INewsFeedItem } from './NewsFeedItem'

export interface INewsFeedList {
	tracked?: boolean
}

export default function NewsFeedList({ tracked }: INewsFeedList) {
	const { data } = useLatestNewsTapeQuery({
		q: tracked ? 'tracked' : '',
	})

	return (
		<div className='space-y-[30px]'>
			{data?.results?.map((item: INewsFeedItem) => (
				<NewsFeedItem key={`${item.date}-${item.title}`} {...item} />
			))}
		</div>
	)
}
