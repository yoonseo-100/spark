const quotes = [
    {
    quote: '첫번째,명언 뭘로 할까 정했니?',
    author: '그것이 너의 명언이야'
    },
    {
    quote: '두번째, 여보세요 나야 거기 잘 지내니',
    author: '소주한잔'
    },
    {
    quote: '세번째, 있잖아 내가 할말이 있어',
    author: '사실은 내가 너를 좋아해'
    },
    {
    quote: '네번째, 널 잊어 주겠어 날 놓지 않을테니',
    author: '펌프에서 나왔던 노래'
    },
    {
    quote: '다섯번째, 술 한 잔 해요 날씨가 쌀쌀하니까',
    author: '술한잔해요'
    },
    {
    quote: '여섯번째 ',
    author: '여섯번째 저자'
    },
    {
    quote: '일곱번째 명언',
    author: 'Tim O Reilly'
    },
    {
    quote: '여덞번째 명언',
    author: 'Wayne Huizenga'
    },
    {
    quote: '아홉번째 명언',
    author: 'SEth Godin'
    },
    {
    quote: '열번째 명언',
    author: 'Jim Rohn'
    },
    ];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
    
    quote.innerText=todaysQuote.quote;
    author.innerText = todaysQuote.author;