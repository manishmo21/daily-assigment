import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;




