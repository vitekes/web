import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Link, useNavigate } from "react-router-dom";
import type { Contest } from "src/components/contests/type";
import { API_URL_CLIENT } from "src/constants/api.constants";

interface Props {
  contest: Contest;
}

export default function ContestsCard({ contest }: Props) {
  const navigate = useNavigate();

  return (
    <div className="shadow-custom flex flex-col rounded-[11px] px-[54px] py-10">
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
        <div>
          <p className="text-[17px] font-bold text-[#737373]">{contest.count_participants}</p>
        </div>
      </div>
      <div className="h-[330px] w-full pt-4">
        <img src={`${API_URL_CLIENT + contest.preview}`} alt="contest" className="h-full w-full object-cover" />
      </div>
      <div className="pt-10">
        <p className="text-[19px] font-light text-black">{contest.description}</p>
      </div>
      <div className="pt-4">
        <Link to={`/contests/${contest.id}`}>
          <button
            onClick={() => navigate(`/contests/${contest.id}/`)}
            className="w-[252px] max-w-[252px] rounded-md bg-[#252A3D] py-4 text-center text-[20px] font-bold text-white"
          >
            Детали конкурса
          </button>
        </Link>
      </div>
    </div>
  );
}
