function HowToUse() {
  const steps = [
    {
      number: 1,
      title: "회원가입",
      description: "간단한 정보 입력으로 시작하세요.",
      icon: "👤",
    },
    {
      number: 2,
      title: "학습 정보 입력",
      description: "목표와 현재 수준을 입력해주세요.",
      icon: "📝",
    },
    {
      number: 3,
      title: "강사 매칭",
      description: "AI가 최적의 강사를 매칭해드립니다.",
      icon: "🤝",
    },
    {
      number: 4,
      title: "수업 시작",
      description: "편리한 온라인 플랫폼으로 수업을 시작하세요.",
      icon: "🎓",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            이용방법
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            스파크에듀와 함께 시작하는 4단계
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div className="md:max-w-md md:mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{step.icon}</div>
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
