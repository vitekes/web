import avatar from "images/icons/avatar.jpg";

export default function BlogUserProfile() {
  return (
    <div>
      <div className="absolute -top-[50%] left-1/2 -translate-x-1/2">
        <img src={avatar} alt="avatar" className="h-[160px] w-[160px] rounded-full" />
      </div>
      <div className="flex flex-col items-center pt-[70px] font-[Recoleta]">
        <div className="md:text-[42px]">KinoBar</div>
        <div className="flex items-center gap-[5px]">
          <span className="text-[30px] text-[#737373]">1 200</span>
          <span className="text-[22px] text-[#A0A0A0]">подписчиков</span>
        </div>
      </div>
    </div>
  );
}
