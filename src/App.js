import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Payment from './pages/Payment';
import Question from './pages/Question';

function App() {
  return (
    <>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
