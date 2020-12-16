import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

// Components
import Header from './components/header/header.component';

// Import authentication from firebase
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount(){
    this.unsubscibeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user});
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
  
  
 render(){
  return (
    <div>

      <Header currentUser={ this.state.currentUser }/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );
}

}
export default App;
