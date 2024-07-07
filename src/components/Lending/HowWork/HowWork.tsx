import { FC } from "react";
import ChooseKey from "/ChooseKey.png";
import AddModel from "/AddModel.png";
import Request from "/Request.png";

const HowWork: FC = () => {
  return (
    <div id="how-it-works" className="w-[1060px] mx-auto pt-[104px] pb-[47px] font-sora">
      <div className="flex flex-col items-center gap-24 ">
        <div className="text-center">
          <h2 className="font-semibold text-5xl">Как это работает?</h2>
        </div>
        <div className="flex items-center gap-[110px]">
          <div>
            <img
              src={ChooseKey}
              alt="ChooseKey"
              className="w-[550px] h-[300px] object-cover"
            />
          </div>
          <div className="w-[400px]">
            <div>
              <h3 className="font-semibold text-4xl mb-5">Выберите ключ</h3>
            </div>
            <div>
              <span className="text-xl text-[#7E8BB6]">
                Определите уникальный ключ, который будет использоваться для
                доступа к группе нейросетей.
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[140px]">
          <div className="w-[400px]">
            <div>
              <h3 className="font-semibold text-4xl mb-5">Добавьте модели</h3>
            </div>
            <div>
              <span className="text-xl text-[#7E8BB6]">
                Добавьте в группу те нейросети, которые вы хотите использовать
                для решения задачи.
              </span>
            </div>
          </div>
          <div>
            <img
              src={AddModel}
              alt="Models"
              className="w-[512px] h-[348px] object-cover"
            />
          </div>
        </div>
        <div className="flex items-center gap-[110px]">
          <div>
            <img
              src={Request}
              alt="Request"
              className="w-[550px] h-[300px] object-cover"
            />
          </div>
          <div className="w-[400px]">
            <div>
              <h3 className="font-semibold text-4xl mb-5">Отправьте запрос</h3>
            </div>
            <div>
              <span className="text-xl text-[#7E8BB6]">
                Отправьте запрос к API, используя ваш ключ. API вернет вам
                результаты работы нейросети из группы.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
