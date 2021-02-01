import './App.scss';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './component/MovieDetail'
import Netflix from './pages/Netflix';
import Horror from './pages/Horror';
import TopRated from './pages/TopRated';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import Romance from './pages/Romance';
import Documentaries from './pages/Documentaries';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/netflix' exact component={Netflix} />
          <Route path='/toprated' exact component={TopRated} />
          <Route path='/action' exact component={Action} />
          <Route path='/comedy' exact component={Comedy} />
          <Route path='/horror' exact component={Horror} />
          <Route path='/romance' exact component={Romance} />
          <Route path='/documentaries' exact component={Documentaries} />
          <Route path='/movie/:id' exact component={MovieDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
