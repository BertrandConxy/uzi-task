import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';

function App() {
  return (
    <>
      <Routes>
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;
