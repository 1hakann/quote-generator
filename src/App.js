import './App.css';
import { FaQuoteLeft, FaTwitterSquare } from 'react-icons/fa';

function App() {
  return (
    <div className="m-0 min-h-screen bg-gray-50 text-black font-bold flex items-center justify-center">
      <div className="quote-container my-auto mx-[16px] w-auto max-w-[900px] px-[30px] py-[20px] rounded-[10px] bg-stone-400 shadow-sm">
        <div className="quote-text text-xl md:text-2xl">
          <FaQuoteLeft className="text-2xl" />
          <span className="quote text-xl md:text-2xl">What you are is what you have been. What you'll be is what you do now.</span>
        </div>
        <div className="quote-author mt-[15px] text-xl md:text-2xl text-normal italic">
          <span className="author text-xl md:text-2xl">Hakan</span>
        </div>
        <div className="button-container mt-[15px] flex justify-between">
          <button className="twitter-btn hover:text-[#313031]" title="Tweet This">
            <FaTwitterSquare className="text-6xl" />
          </button>
          <button className="new-quote cursor-pointer text-xl border-0 rounded-[10px] text-white bg-[#333] outline-0 py-2 px-8 shadow-sm hover:brightness-150 active:-translate-y-3 active:shadow-md">New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
