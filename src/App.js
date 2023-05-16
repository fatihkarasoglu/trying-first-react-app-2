import { SiteProvider, AuthProvider } from './context';
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