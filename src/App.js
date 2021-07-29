import Header from "./component/Header";
import Footer from "./component/Footer";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {Home} from "./component/pages/Home";
import {Contact} from "./component/pages/Contact";
import {About} from "./component/pages/About";
import {NotFound} from "./component/pages/NotFound";
import {Category} from "./component/pages/Category";
import {Recipe} from "./component/pages/Recipe";
import {ContextProvider} from './context'

function App() {
  return (<>
    <Router>
            <Header/>
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/category/:name' component={Category}/>
                    <Route path='/meal/:id' component={Recipe}/>
                    <Route path='/contact' component={Contact}/>
                    <Route  component={NotFound}/>
                </Switch>
            </main>
    <Footer/>
</Router>
  </>

  );
}

export default App;
