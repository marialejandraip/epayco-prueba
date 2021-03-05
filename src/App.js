import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Views/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
