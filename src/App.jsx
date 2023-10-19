import { Route, Routes} from 'react-router-dom'
import  Admin  from './pages/Admin'
import  ProductDetail  from './pages/ProductDetail'
import  Home  from './pages/Home'
import  Layout  from './pages/Layout'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {


  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    
  );
}

export default App
