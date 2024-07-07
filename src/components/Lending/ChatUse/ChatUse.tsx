import { CheckIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import Chat from "/Chat.png";

const ChatUse: FC = () => {
  return (
    <div className="px-20 py-[88px] flex items-center gap-[77px] justify-between">
      <div>
        <div className="mb-6">
          <h3 className="font-semibold text-[54px] leading-[63px]">Простой в использовании чат</h3>
        </div>
        <div className="mb-10">
          <span className="text-lg text-[#9D9FA1]">Если вас не интересует интеграция нашего API в свой сервис, то вы всегда можете воспользоваться нашим чатом с удобным интерфейсом и многогранным функционалом.</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-[5.6px] rounded-full bg-[#282828]">
            <CheckIcon width={13}/>
          </div>
          <div>
            <span className="text-base">Высокоскоростные ответы</span>
          </div>
        </div>
      </div>
      <div className="px-[62px] py-[70px] rounded-3xl bg-[#162044]">
        <img src={Chat} alt="Chat" className="max-w-none"/>
      </div>
    </div>
  );
};

export default ChatUse;
