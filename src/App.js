import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Payment from './pages/Payment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
