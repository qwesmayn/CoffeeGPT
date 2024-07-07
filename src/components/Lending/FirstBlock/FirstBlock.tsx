import { FC } from "react";
import Browser from "/Browser.png";
import Header from "../../Header/Header";

const FirstBlock: FC = () => {
  return (
    <div className="relative bg-[url('/lines.png')] bg-auto">
      <Header />
      <div className="font-dmSans flex flex-wrap items-center gap-28 justify-center pl-[38px] pr-[72px] pb-[7.5%] xl:flex-nowrap xl:justify-between">
        <div className="flex flex-col">
          <div className="mb-5">
            <h2 className="text-[43px] font-bold">
              CoffeeGPT - лучший агрегатор на рынке нейросетей
            </h2>
          </div>
          <div className="mb-16">
            <span className="text-[22px] font-medium opacity-80">
              Творите, экспериментируйте, создавайте через быстрый и удобный
              интерфейс
            </span>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-600 px-6 py-4 rounded-lg transition duration-300 hover:bg-blue-500">
              Начать работу
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-full h-full bg-[#7650F5] opacity-50 blur-3xl rounded-full z-0"></div>
          <img src={Browser} alt="Browser" className="relative xl:max-w-none z-10"></img>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
