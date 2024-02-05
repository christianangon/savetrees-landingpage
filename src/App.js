
// import react from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes'


function App() {
  return (
    <Router>
      <Routes>
      {routes.map((route) => (
        <Route key={route.route} path={route.route} element={<route.component />} />
      ))}
    </Routes>
  </Router>
  );
}

export default App;
