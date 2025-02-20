import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                className="h-10 w-auto mr-3"
                src="/images/spark.png"
                alt="스파크 에듀"
              />
              <span className="text-xl font-bold">스파크에듀</span>
            </div>
            <p className="text-gray-400">
              AI 기반 코딩 강사 교육 및 매칭 플랫폼
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>(주)스파크에듀</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>이메일: spark_edu2024@gmail.com</p>
              <p>고객센터: 1544-1234</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">회사 소개</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  스파크에듀 소개
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">
                  인재채용
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  보도자료
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  고객센터
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-400 hover:text-white">
                  강사 지원
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">약관 및 정책</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-white">
                  환불 정책
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 스파크에듀. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
