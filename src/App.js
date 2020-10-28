import './App.css';
import Search from  './Search/Search'
import Home from  './Home/Home'
import Results from './Results/Results'
import Nav from './Nav/Nav'
import { Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Route path='/search' component={Search} />
        <Route path='/home' component={Home} />
      </main>
    </div>
    );
  }

export default App;
