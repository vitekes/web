import ViewIcon from "images/icons/view.svg";
import ShareIcon from "images/icons/share.svg";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ShortContest } from "src/components/contests/type";

interface Props {
  contest: ShortContest;
}

function Competition({ contest }: Props) {
  return (
    <div className="flex w-[1000px] flex-col rounded-[11px] py-10">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-[28px] font-normal text-black">{contest.title}</h1>
          <div>
            <p className="text-[17px] font-normal text-[#A0A0A0]">
              {format(new Date(contest.start_date), "d MMMM", { locale: ru })} -{""}
              {format(new Date(contest.end_date), "d MMMM", { locale: ru })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img src={ViewIcon} alt="view" className="h-[22px] w-[22px]" />
          <p className="text-[17px] font-bold text-[#737373]">{contest.count_participants}</p>
          <img src={ShareIcon} alt="share" className="h-[32px] w-[32px] pl-4" />
        </div>
      </div>
      <div className="h-[330px] w-full pt-4">
        {contest.preview ? (
          <img src={contest.preview} alt="contest" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-500" />
        )}
      </div>
      <div className="pt-10">
        <p className="text-[19px] font-light text-black">{contest.description}</p>
      </div>
    </div>
  );
}

export default Competition;
