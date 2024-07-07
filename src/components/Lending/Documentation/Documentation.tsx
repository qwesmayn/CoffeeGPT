import { CheckIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import Frame from "/Frame.png"

const Documentation: FC = () => {
  return (
    <div>
      <div className="px-20 py-[88px] flex gap-[77px] items-center">
        <div className="py-4">
          <div className="px-[14px] py-1 rounded-full bg-blue-700 w-max mb-4">
            <span className="font-semibold text-sm">Документация</span>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-[54px] leading-[63px]">
              Интегрируйте наш API в любой ваш проект
            </h3>
          </div>
          <div className="mb-10">
            <span className="text-lg text-[#9D9FA1]">
              С его помощью вы получаете доступ к широкому спектру нейросетей
              для различных задач, таких как генерация текста, распознавание
              изображений, обработка данных и машинное обучение.
            </span>
          </div>
          <div className="flex justify-start gap-7">
            <div className="flex items-center gap-2">
              <div className="p-[5.6px] rounded-full bg-[#282828]">
                <CheckIcon width={13} />
              </div>
              <span>Масштабируемость</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[5.6px] rounded-full bg-[#282828]">
                <CheckIcon width={13} />
              </div>
              <span>100% Защищено</span>
            </div>
          </div>
        </div>
        <div className="px-16 py-[70px] rounded-3xl bg-[#162044]">
          <img src={Frame} alt="API" className="max-w-none"></img>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
