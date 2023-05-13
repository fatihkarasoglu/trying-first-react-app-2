import SiteProvider from './context/SiteContext';
import AuthProvider from './context/AuthContext'
import Home from './Home';
import './App.css';

function App() {

  return (
    <SiteProvider>

      <AuthProvider>

        <Home />

      </AuthProvider>

    </SiteProvider>
  );
}

export default App;