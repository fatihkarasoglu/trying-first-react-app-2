import { useRoutes, generatePath } from 'react-router-dom';
import routes from './routes';
// import { url } from './utils';
import './App.css';

function App() {

  return useRoutes(routes);
}

export default App;