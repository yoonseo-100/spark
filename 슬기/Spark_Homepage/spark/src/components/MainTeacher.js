import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainTeacher.css';

function MainTeacher() {
  const teachers = [
    { name: '백윤서', bio: '대표강사 백윤서의 소개 내용입니다.' },
    { name: '이슬기', bio: '대표강사 이슬기의 소개 내용입니다.' },
    { name: '임성은', bio: '대표강사 임성은의 소개 내용입니다.' },
    { name: '김현희', bio: '대표강사 김현희의 소개 내용입니다.' },
    { name: '정기연', bio: '대표강사 정기연의 소개 내용입니다.' },
  ];

  return (
    <div className="main-teacher">
      <h2 className="main-teacher-title">대표강사 소개</h2>
      <Carousel interval={3000} controls={false} indicators={false}> {/* 자동 슬라이딩 설정 */}
        {teachers.map((teacher, index) => (
          <Carousel.Item key={index}>
            <div className="teacher-info">
              <h3>{teacher.name}</h3>
              <p>{teacher.bio}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MainTeacher;
