import React from 'react';
import Accordion from './components/Accordion/Accordion'
import Action from './components/Actions/Action';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Action />
      <Accordion/>
    </React.Fragment>
  );
}

export default App;
