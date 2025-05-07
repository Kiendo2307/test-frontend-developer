import { useState } from "react";
import Image from "next/image";

const qnaData = [
  {
    question: "How does purchasing on Apps Store benefit your players?",
    answer:
      "In Apps Store, players can purchase game items at lower prices, find some special offers, and claim free rewards. Moreover, there’s a variety of payment options available, allowing your players to choose the most convenient one for their purchases.",
  },
  {
    question: "Is it safe to purchase on Apps Store?",
    answer:
      "Web Store which refers to the highest level of compliance with the Payment Card Industry Data Security Standard. Therefore, all payments made on Web Shop are completely secure.",
  },
  {
    question: "What payment methods does Apps Store support?",
    answer:
      "Web Store currently accepts payments via most popular credit/debit card brands and digital wallets. All available payment options can be viewed on the payment page.",
  },
  {
    question: "Who can help your players with purchase issues?",
    answer:
      "Our support team is available to assist your players with any purchase-related problems through our help center or customer support channels.",
  },
];

const QnAItem = () => {
  const [openItems, setOpenItems] = useState<boolean[]>(qnaData.map(() => true));

  const toggleAnswer = (index: number) => {
    setOpenItems((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {qnaData.map((item, index) => {
        const isOpen = openItems[index];

        return (
          <div
            key={index}
            className="w-[1152px] bg-[#2F0700] rounded-[16px]"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)",
              borderImageSlice: 1,
              padding: "32px 12px"
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <Image
                  onClick={() => toggleAnswer(index)}
                  width={40}
                  height={40}
                  alt="Icon Down"
                  src="/assets/icons/icon_down.svg"
                  className={`cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
                <div className="font-bold text-[24px] text-custom-white">
                  {item.question}
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                  }`}
                style={{ transitionDelay: isOpen ? "0.3s" : "0s" }}
              >
                {isOpen && (
                  <div className="font-light text-[20px] text-custom-white">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QnAItem;
