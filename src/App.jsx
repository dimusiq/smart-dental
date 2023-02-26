import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Action from './components/Actions/Action';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts'

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const showFormHandler = () => {
    setFormIsVisible(true);
  };
  const hideFormHandler = () => {
    setFormIsVisible(false);
  };
  return (
    <React.Fragment>
      {formIsVisible && (
        <Form onHideForm={hideFormHandler} />
      )}
      <Header />
      <Hero onShowForm={showFormHandler} />
      <Action />
      <Accordion />
      <Footer />
      <Contacts/>
    </React.Fragment>
  );
}

export default App;
