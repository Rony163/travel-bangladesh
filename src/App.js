import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
