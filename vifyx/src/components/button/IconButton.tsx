
interface IIconButton {
  icon_url: string;
  onClick: () => void;
}

export default function IconButton({ icon_url, onClick }: IIconButton) {
  return (
    <button
      type="button"
      className="h-[38px] w-[38px] rounded-md bg-[#EDEDED] hover:bg-slate-200 active:bg-slate-300"
      onClick={onClick}
    >
      <img src={icon_url} alt="icon" className="m-auto" />
    </button>
  );
}
