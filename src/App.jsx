{/*import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OptionsHeader from './components/layout/Filters/OptionsHeader';
import OptionsBlock from './components/layout/Filters/OptionsBlock';
import Header from './components/layout/Header/Header';
import ListCard from './components/object/ListCard';
import ObjectPage from './pages/ObjectPage/ObjectPage';

export function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col lg={3} className="d-lg-block">
          <OptionsBlock />
        </Col>
        <Col lg={9}>
          <OptionsHeader />
          <ListCard />
        </Col>

        Это у нас инфа о товаре - <ObjectPage />
      </Row>

    </Container>
  );
}
*/}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ObjectPage from './pages/ObjectPage/ObjectPage';
import InvestorPage from './pages/InvestorPage/InvestorPage';
import MapPage from './pages/MapPage/MapPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/investor" element={<InvestorPage />} />
        <Route path="/object/:id" element={<ObjectPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;