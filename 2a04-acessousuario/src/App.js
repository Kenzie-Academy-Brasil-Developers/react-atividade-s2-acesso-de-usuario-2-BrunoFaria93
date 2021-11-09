import './App.css';
import Home from './pages/Home';
import Custumer from './pages/Costumer';
import { Switch, Route } from 'react-router-dom'
import Company from './pages/Company';


function App() {
  const members = [
    {
      id: "1",
      name: "Pedro",
      type: "pf"
    },
    {
      id: "2",
      name: "André",
      type: "pf"
    },
    {
      id: "3",
      name: "Cantina da esquina",
      type: "pj"
    },
    {
      id: "4",
      name: "Lanches Ogro",
      type: "pj"
    },
    {
      id: "5",
      name: "Antunes",
      type: "pj"
    }
  ];

  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Home members={members} />
          </Route>
          <Route exact path="/customer/:id">
            <Custumer members={members}/>
          </Route>
          <Route exact path="/company/:id">
            <Company members={members}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
