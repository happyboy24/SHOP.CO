import { Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/footer';
import LandingPage from './component/pages/LandingPage';
import ProductDetail from './component/pages/ProductDetail';
import Login from './component/auth/login/login';
import Register from './component/auth/register/register';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

