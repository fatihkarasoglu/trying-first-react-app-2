import { useRoutes } from 'react-router-dom';
import routes from './routes';
// import { url } from './utils';

function App() {

  return useRoutes(routes);
}

export default App;