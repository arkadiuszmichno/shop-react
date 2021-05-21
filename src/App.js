import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Books from "./Books";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div>
                <BrowserRouter>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                    </ul>
                    <Route path="/" component={Welcome}/>
                    <Route path="/books" component={Books}/>
                    <Route path="/categories" component={Categories}/>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
