import Work from './component/Work';
import About from './component/About';
import Head from './component/Head';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Head />
      <div>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
