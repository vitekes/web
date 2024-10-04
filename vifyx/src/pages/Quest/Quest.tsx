import { Comments } from "./Comments";
import "./Quest.sass";
import { QuestInfo } from "./QuestInfo";
export function Quest() {
  return (
    <div className="quest container mx-auto px-1 md:w-[1120px] md:px-0">
      <QuestInfo />
      <hr />
      <Comments />
    </div>
  );
}
