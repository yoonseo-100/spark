const express = require('express');
const mysql = require('mysql2'); // mysql2 모듈 가져오기

const app = express();
app.use(express.static('public'));

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost', // MySQL 호스트
  user: 'root',      // MySQL 사용자 이름
  password: 'your_root_password', // MySQL 루트 비밀번호
  database: 'mydatabase' // 사용할 데이터베이스 이름
});

// 연결 확인
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// GET 요청 라우트
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users'; // users 테이블에서 모든 데이터를 가져오는 SQL 쿼리
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      res.status(500).json({ error: 'Failed to fetch users' });
    } else {
      res.json(results);
    }
  });
});

// POST 요청 라우트
app.post('/api/users', express.json(), (req, res) => {
  const newUser = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  
  connection.query(sql, [newUser.name, newUser.email], (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).json({ error: 'Failed to add user' });
    } else {
      res.status(201).json({ message: 'User created', user: newUser });
    }
  });
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// 서버 실행
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Jane', email: 'jane@example.com' })
})
  .then(response => response.json())
  .then(data => console.log(data));
