import { Switch } from 'react-router-dom';
import PublicRouter from './Components/PublicRouter';
import PrivateRouter from './Components/PrivateRouter';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

function App() {
  return (
    <Switch>

      <PublicRouter path="/signin">
        <Signin />
      </PublicRouter>

      <PrivateRouter path="/">
        <Home />
      </PrivateRouter>
    </Switch>
  );
}

export default App;
