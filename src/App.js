import Work from './component/Work';
import About from './component/About';
import Head from './component/Head';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MAN from './component/MAN';
import SPL from './component/SPL';
import Wea from './component/Wea';
import Sue from './component/Sue';

function App() {
  return (
    <BrowserRouter>
      <Head />
      <div>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/MAN" element={<MAN />} />
          <Route path="/SPL" element={<SPL />} />
          <Route path="/Wea" element={<Wea />} />
          <Route path="/Sue" element={<Sue />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
