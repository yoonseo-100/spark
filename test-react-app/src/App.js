import { useState, useEffect } from "react"; // useState와 useEffect 훅을 불러옴

function App() {
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [coins, setCoins] = useState([]); // API에서 받은 코인 리스트 저장
  const [amount, setAmount] = useState(""); // 사용자가 입력한 달러 금액 저장
  const [selectedCoin, setSelectedCoin] = useState(null); // 선택된 코인의 정보를 저장

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // API에서 받은 코인 데이터를 저장
        setLoading(false); // 로딩 완료 후 false로 설정
      });
  }, []);

  // 사용자가 입력한 달러 금액을 저장하는 함수
  const handleAmountChange = (event) => {
    setAmount(event.target.value); // input 필드의 값을 amount에 저장
  };

  // 사용자가 선택한 코인을 저장하는 함수
  const handleCoinChange = (event) => {
    const selectedCoinData = coins.find(
      (coin) => coin.name === event.target.value
    );
    setSelectedCoin(selectedCoinData); // 선택된 코인의 데이터를 저장
  };

  return (
    <div>
      <h1>the Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={handleCoinChange}>
            {" "}
            {/* 사용자가 코인을 선택할 때 호출 */}
            <option>Select a coin</option> {/* 기본 옵션으로 코인 선택 안내 */}
            {coins.map((coin) => (
              <option key={coin.id} value={coin.name}>
                {" "}
                {/* 각 코인에 고유한 key 값 제공 */}
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>

          <input
            type="number"
            value={amount} // 사용자가 입력한 달러 금액을 관리
            onChange={handleAmountChange} // 입력 시 값을 저장
            placeholder="Enter your dollars" // 입력 필드에 나타날 안내 텍스트
          />

          {selectedCoin &&
            amount && ( // 코인이 선택되고 금액이 입력된 경우에만 실행
              <p>
                You can buy {amount / selectedCoin.quotes.USD.price}{" "}
                {selectedCoin.symbol} with ${amount}.
              </p>
            )}
        </div>
      )}
    </div>
  );
}

export default App;
