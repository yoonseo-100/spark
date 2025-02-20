import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function FAQ() {
  const faqs = [
    {
      question: "수업은 어떤 방식으로 진행되나요?",
      answer:
        "수업은 1:1 온라인 화상 수업으로 진행됩니다. Zoom과 같은 안정적인 플랫폼을 통해 실시간 상호작용이 가능하며, 화면 공유를 통해 효과적인 코딩 교육이 이루어집니다.",
    },
    {
      question: "수강 기간은 어떻게 되나요?",
      answer:
        "최소 1개월부터 시작할 수 있으며, 원하는 기간만큼 연장이 가능합니다. 장기 수강 시 할인 혜택도 제공됩니다.",
    },
    {
      question: "수업 시간은 변경할 수 있나요?",
      answer:
        "네, 강사님과 협의하에 수업 시간 변경이 가능합니다. 다만, 원활한 수업 진행을 위해 최소 24시간 전에는 변경 요청을 해주시기 바랍니다.",
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer:
        "수업 시작 전 전액 환불이 가능하며, 수업 진행 중에는 잔여 수업 횟수에 대해 환불이 가능합니다. 자세한 사항은 환불 정책을 참고해 주세요.",
    },
    {
      question: "어떤 수준부터 시작할 수 있나요?",
      answer:
        "완전 초보부터 현업 개발자 준비까지, 모든 수준의 학습자를 위한 커리큘럼이 준비되어 있습니다. 상담을 통해 최적의 학습 계획을 수립해드립니다.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            궁금하신 점을 빠르게 확인하세요
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">더 궁금하신 점이 있으신가요?</p>
          <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors">
            1:1 문의하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
