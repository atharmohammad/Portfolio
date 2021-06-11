import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Start from './Components/Start/Start'
import Portfolio from './Container/Portfolio/Portfolio'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Redirect path='/portfolio' />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
