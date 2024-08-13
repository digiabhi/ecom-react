import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/home/Home';

function App() {

  return (
    <div className="app-wrapper">
      {/* Common Header for all Pages */}
      <Header
        color="light"
        light={true}
        expand="md"
        container="md" />

      <Home />

      {/* Common Footer for all Pages */}
      <Footer />
    </div>
  );
}

export default App;
