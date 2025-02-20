function Services() {
  const services = [
    {
      title: "AI 기반 매칭 시스템",
      description: "학생의 수준과 목표에 맞는 최적의 강사를 매칭해드립니다.",
      icon: "🎯",
    },
    {
      title: "실시간 강의 관리",
      description: "수업 일정과 진도를 효율적으로 관리할 수 있습니다.",
      icon: "📚",
    },
    {
      title: "맞춤형 커리큘럼",
      description: "개인별 학습 수준에 맞는 맞춤형 커리큘럼을 제공합니다.",
      icon: "📋",
    },
    {
      title: "전문 강사진",
      description: "검증된 전문 강사진이 체계적인 교육을 제공합니다.",
      icon: "👨‍🏫",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            서비스 소개
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            스파크에듀의 차별화된 서비스를 경험해보세요
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              서비스 특장점
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    AI 매칭 시스템
                  </h4>
                  <p className="mt-2 text-gray-600">
                    빅데이터 기반의 AI 매칭으로 최적의 강사를 추천해드립니다.
                  </p>
                </div>
              </div>
              {/* 추가 특장점들... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
