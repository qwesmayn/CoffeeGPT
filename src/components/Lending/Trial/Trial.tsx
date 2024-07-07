import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const Trial: FC = () => {
  return (
    <div className="pt-[129px] pb-[194px]">
      <div className="w-[1060px] mx-auto px-14 py-[52px] bg-blue-600 rounded-3xl">
        <div className="flex justify-between items-center">
          <div>
            <div className="mb-4"><span className="font-dmMono font-medium text-sm uppercase opacity-50">Готовы начать?</span></div>
            <div><h3 className="font-sora font-semibold text-4xl">Начните ваш пробный период </h3></div>
          </div>
          <div>
            <button className="font-dmMono px-6 py-5 bg-[#689EFF] transition duration-300 rounded-lg flex items-center gap-3 hover:bg-blue-300">
                <span>Попробовать</span>
                <ArrowLongRightIcon width={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
