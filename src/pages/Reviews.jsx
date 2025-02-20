import { StarIcon } from "@heroicons/react/20/solid";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "김지민",
      role: "수강생",
      rating: 5,
      content:
        "처음에는 걱정했는데, AI 매칭으로 찾은 강사님이 정말 잘 맞았어요. 제가 어려워하는 부분을 정확히 짚어주시고 차근차근 설명해주셔서 많은 도움이 되었습니다.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      name: "이현우",
      role: "학부모",
      rating: 5,
      content:
        "아이가 코딩에 흥미를 잃어가고 있었는데, 스파크에듀의 강사님을 만나고 다시 즐겁게 공부하기 시작했어요. 강사 선생님들의 전문성이 정말 뛰어납니다.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",
    },
    {
      id: 3,
      name: "박서연",
      role: "수강생",
      rating: 5,
      content:
        "맞춤형 커리큘럼 덕분에 제 수준에 맞는 학습을 할 수 있었어요. 특히 실시간 피드백이 큰 도움이 되었습니다.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            수강생 후기
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            스파크에듀와 함께한 분들의 생생한 후기를 확인해보세요
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={review.image}
                  alt={review.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
