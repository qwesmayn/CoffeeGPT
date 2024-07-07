import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center pl-[124px] pr-[75px] py-6">
      <div>
        <h4 className="font-semibold text-2xl font-sora">CoffeeGPT</h4>
      </div>
      <div>
        <nav>
          <ul className="flex gap-10 text-sm font-semibold">
            <li>
              <a href="#" className="transition duration-500 hover:text-blue-500">Чат</a>
            </li>
            <li>
              <a href="#pricing" className="transition duration-500 hover:text-blue-500">Прайсинг</a>
            </li>
            <li>
              <a href="#how-it-works" className="transition duration-500 hover:text-blue-500">Как это работает?</a>
            </li>
            <li>
              <a href="#" className="transition duration-500 hover:text-blue-500">Поддержка</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="px-6 py-4 bg-[#162044] rounded-lg transition duration-500 hover:bg-blue-500 font-dmMono">
            Login
        </button>
      </div>
    </div>
  );
};

export default Header;

