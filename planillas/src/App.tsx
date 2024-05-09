import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Layout } from './components/Layout';
import { Planilla } from './pages/Planilla';
import Tablero from './components/Dashboard/Tablero';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="planillas" element={<Planilla />} />
          <Route path="customer" element={<Customers />} />
          <Route path="dashboard" element={<Tablero />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )

  function Customers() {
    return (
      <div>
        <h2>Customer</h2>
      </div>
    );
  }

  function Reports() {
    return (
      <div>
        <h2>Reportes</h2>
      </div>
    );
  }


  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
}