function Pricing() {
  const plans = [
    {
      name: "베이직",
      price: "99,000",
      period: "월",
      features: [
        "주 1회 수업",
        "기초 커리큘럼",
        "이메일 지원",
        "학습 자료 제공",
      ],
      isPopular: false,
    },
    {
      name: "스탠다드",
      price: "199,000",
      period: "월",
      features: [
        "주 2회 수업",
        "맞춤형 커리큘럼",
        "실시간 채팅 지원",
        "과제 첨삭",
        "프로젝트 지도",
      ],
      isPopular: true,
    },
    {
      name: "프리미엄",
      price: "299,000",
      period: "월",
      features: [
        "주 3회 수업",
        "VIP 커리큘럼",
        "24/7 지원",
        "포트폴리오 지도",
        "취업 상담",
        "멘토링",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            요금제
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            나에게 맞는 최적의 요금제를 선택하세요
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                plan.isPopular ? "border-2 border-primary" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                  인기
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="ml-2 text-gray-600">원/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
