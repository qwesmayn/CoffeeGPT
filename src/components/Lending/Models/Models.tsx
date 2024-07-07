import { CheckIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import ModelsGPT from "/Models.png"

const Models: FC = () => {
  return (
    <div className="px-20 py-[88px] flex gap-[77px] items-center">
      <div className="px-[149px] py-14 bg-[#162044] rounded-3xl">
        <img src={ModelsGPT} alt="ModelsGPT" className="max-w-none"></img>
      </div>
      <div>
        <div className="mb-6">
          <h3 className="font-semibold text-[54px] leading-[63px]">
            Широкий выбор моделей в одном ключе
          </h3>
        </div>
        <div className="mb-10">
          <span className="text-lg text-[#9D9FA1]">
            Функция работы с несколькими моделями по одному ключу позволяет вам
            использовать различные нейросети для одной задачи, получая при этом
            более точные и разносторонние результаты.
          </span>
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex items-center gap-2">
            <div className="p-[5.6px] rounded-full bg-[#282828]">
              <CheckIcon width={13} />
            </div>
            <span className="text-base">Гибкость</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[5.6px] rounded-full bg-[#282828]">
              <CheckIcon width={13} />
            </div>
            <span className="text-base">Более точные результаты</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
