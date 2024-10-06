import search_icon from "images/icons/search_icon.svg";

export default function SearchBlock() {
  return (
    <div className="relative flex">
      <button className="h-[48px] absolute pl-4 pr-1">
        <img src={search_icon} alt="search_icon" />
      </button>
      <input
        type="text"
        placeholder="Поиск поста"
        className="h-[48px] min-w-full rounded-lg border border-[#CDCDCD] bg-[#F2F1F1] pl-[52px]"
      />
    </div>
  );
}
