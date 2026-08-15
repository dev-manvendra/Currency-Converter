import { useRef, useState } from 'react'
import InputBox from './components/input';
import bgImage from "./assets/images/bg-image.avif";
import clickSound from "./assets/sound/click.mp3";
import UseCurrency from "./hook/useCurrency"



function App() {
  const [amount, setAmount] = useState()
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const clickAudio = useRef(new Audio(clickSound))

  const playClick = () => {
    clickAudio.current.currentTime = 0
    clickAudio.current.play().catch(() => {})
  }

  const currencyInfo = UseCurrency(from);

  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
  <>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{backgroundImage: `url(${bgImage})`}}
        
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                        
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 hover:border-blue-200 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
                            onClick={()=>{
                              playClick()
                              swap()
                              setConvertedAmount(0)
                            }}
                            
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            onAmountChange={(amount)=> setConvertedAmount(amount)}                            
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={() => playClick()}
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  </>
  )
}

export default App
