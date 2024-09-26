const quotes = [
    {
        quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 믿는 대로 될 것이다",
        author: "-헨리 포드 -",
    },
    {
        quote: "인생은 10%가 일어나는 일이고, 90%는 그에 어떻게 반응하느냐이다",
        author: "- 찰스 R. 스윈돌 -",
    },
    {
        quote: "가장 큰 영광은 한 번도 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 데 있다",
        author: "- 넬슨 만델라 -",
    },
    {
        quote: "성공이란 계속해서 실패를 하면서도 열정을 잃지 않는 것이다",
        author: "- 윈스턴 처칠 -",
    },
    {
        quote: "어제의 후회는 내일의 성취를 위해 존재한다",
        author: "- 윌 로저스 -",
    },
    {
        quote: "당신이 변화를 원한다면, 그 변화의 시작이 되어라",
        author: "- 마하트마 간디 -",
    },
    {
        quote: "작은 일들이 쌓여 위대한 성공을 만든다",
        author: "- 빈스 롬바르디 -",
    },
    {
        quote: "꿈을 이루는 비결은 처음 한 걸음을 떼는 것이다",
        author: "- 마크 트웨인 -",
    },
    {
        quote: "가장 어두운 밤이 지나야만 가장 밝은 별이 빛난다",
        author: "- 빅터 위고 -",
    },
    {
        quote: "삶은 당신이 만드는 것이며, 변화는 선택에 달려 있다",
        author: "- 오프라 윈프리 -",
    },
    {
        quote: "아름다운 이 세상 소풍 끝내는 날, 가서, 아름다웠더라고 말하리라",
        author: "- 천상병 -",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

