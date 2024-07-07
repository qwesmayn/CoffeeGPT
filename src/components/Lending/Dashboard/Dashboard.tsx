import { FC } from "react";
import Stat from "/Stat.png"
import Stat1 from "/Stat1.png"

const Dashboard: FC = () => {
  return (
    <div className="py-[113px]">
      <div className="text-center mb-10">
        <h3 className="font-semibold text-[54px] leading-[63px]">
          Удобный дашборд
        </h3>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <div className="w-[570px] px-[66px] pt-5 rounded-lg bg-[#162044] border-[1px] border-[#FFFFFF0D] text-center flex flex-col items-center">
          <div className="mb-4 w-[249px]">
            <span className="text-lg text-[#BDBDBD]">
              <p className="font-semibold text-lg text-white">Полезная статистика</p>
              Отслеживайте количество запросов, траты и многое другое
            </span>
          </div>
          <div>
            <img src={Stat} alt="Count requests" className="h-[230px] "/>
          </div>
        </div>
        <div className="w-[570px] px-[66px] pt-5 rounded-lg bg-[#162044] border-[1px] border-[#FFFFFF0D] text-center flex flex-col items-center">
          <div className="mb-4 w-[289px]">
            <span className="text-lg text-[#BDBDBD]">
              <p className="font-semibold text-lg text-white">Сравнивайте модели</p>
              Все данные представлены в виде понятных и информативных визуализаций.
            </span>
          </div>
          <div>
            <img src={Stat1} alt="Models GPT" className="h-[230px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;