import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './pages/About/About';
import Discover from './pages/Discover/Discover';
import Search from './pages/Search/Search';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Route exact path="/" component={About} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/search" component={Search} />
            </Router>
        </div>
    )

}

export default App;