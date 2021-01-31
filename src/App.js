import './App.scss';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './component/MovieDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movie/:id' exact component={MovieDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
