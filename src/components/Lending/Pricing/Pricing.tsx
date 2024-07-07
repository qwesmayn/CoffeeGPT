import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

const Pricing: FC = () => {
  const plans = [
    {
      title: "BASIC",
      price: "5",
      features: ["1 API ключ", "5,000 запросов"],
      buttonText: "Get Started",
    },
    {
      title: "STANDART",
      price: "10",
      features: ["2 API ключа", "10,000 запросов", "Техническая поддержка"],
      buttonText: "Get Started",
    },
    {
      title: "PREMIUM",
      price: "20",
      features: [
        "3 API ключа",
        "20,000 запросов",
        "Техническая поддержка",
        "Ускоренная работа сервера",
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div id="pricing" className="pt-[22px] pb-14">
      <div className="text-center mb-[148px]">
        <h3 className="font-semibold text-[54px] leading-[63px]">Прайсинг</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#081131] rounded-2xl p-12 w-[400px] h-[630px] transition duration-500 transform hover:-translate-y-20 hover:bg-[#162044] cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h2 className="font-dmMono text-xl font-medium text-[#7E8BB6]">
                {plan.title}
              </h2>
              <div className="font-sora text-[56px] leading-[64px] font-semibold mt-3 pb-12 border-b-2 border-[#4E5A85] border-opacity-15 flex">
                <span className="text-[#7E8BB6]">$</span>
                <span>{plan.price}</span>
              </div>
              <ul className="font-sora list-none p-0 mt-12">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="mb-6 last:mb-0 flex items-center gap-3"
                  >
                    <CheckCircleIcon color="#4E5A85" width={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="font-dmMono bg-[#4E5A85] transition duration-300 rounded-md py-5 px-6 mt-4 hover:bg-blue-600 flex items-center gap-4 self-start">
              <span className="font-medium text-base">{plan.buttonText}</span>
              <ArrowLongRightIcon width={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
