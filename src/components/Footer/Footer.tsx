import { FC } from "react";
import Telegram from "/Telegram.svg";

const Footer: FC = () => {
  return (
    <div className="font-sora bg-[#162044] py-[42px] px-[10%]">
      <div className="flex justify-between items-center">
        <div>
          <img src={Telegram} alt="Telegram" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <a className="text-[#CCD2E9]" href="#">Terms & Conditions</a>
          </div>
          <div>
            <a className="text-[#CCD2E9]" href="#">Privacy Policy</a>
          </div>
        </div>
        <div>
          <span className="text-[#CCD2E9]">2024 Все права защищены</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
