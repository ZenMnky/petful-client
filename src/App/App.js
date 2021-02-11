import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import AdoptionPage from '../AdoptionPage/AdoptionPage';
import PageNotFound from '../PageNotFound/PageNotFound';


class App extends Component {
 
    render() {
      return (
        <div className="App">
          <Header />
         
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/adopt' component={AdoptionPage} />
              <Route component={PageNotFound} />
            </Switch>
        
          <Footer />
        </div>
      );
    }
  }
  
  export default App;