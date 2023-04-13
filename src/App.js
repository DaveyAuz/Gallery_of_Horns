// REBUILD AS A CLASS COMPONENT

// 1st IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


// 2nd CREATE THE CLASS - will always have a render method


class App extends React.Component {
  render(){
    return  ( 
    <>
      <Header />;
      <Main />;
      <Footer />;
    </>
    )
  }
}



// EXPORT THE CLASS
export default App;