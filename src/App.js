import './App.css';
import Search from  './Search/Search'
import Home from  './Home/Home'
import Results from './Results/Results'
import Nav from './Nav/Nav'
import { Route, Redirect } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Route path='/search' component={Search} />
       <Route path='/' exact render={() => <Redirect to='/home' />} />
      </main>
    </div>
    );
  }

export default App;
