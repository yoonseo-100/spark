const quotes = [
    {
        quote: "명언을 적어야 하는데 언제 하니",
        author: "저자는 누굴할까",
    },
    {
        quote: "나 하늘로 돌아가리라",
        author: "천상병",
    },
    {
        quote: "새벽빛 와 닿으면 스러지는",
        author: "천상병",
    },
    {
        quote: "이슬 더불어 손에 손을 잡고",
        author: "천상병",
    },
    {
        quote: "나 하늘로 돌아가리라",
        author: "천상병",
    },
    {
        quote: "노을빛 함께 단 둘이서",
        author: "천상병",
    },
    {
        quote: "기슭에서 놀다가 구름 손짓하면은",
        author: "천상병",
    },
    {
        quote: "나 하늘로 돌아가리라",
        author: "천상병",
    },
    {
        quote: "아름다운 이 세상 소풍 끝내는 날",
        author: "천상병",
    },
    {
        quote: "가서, 아름다웠더라고 말하리라...",
        author: "천상병",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

