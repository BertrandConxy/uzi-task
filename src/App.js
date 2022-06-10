import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Payment from './pages/Payment';
import Question from './pages/Question';
import FinalResult from './pages/FinalResult';
import Answers from './pages/Answers';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<FinalResult />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </>
  );
}

export default App;
