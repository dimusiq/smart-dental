import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Action from './components/Actions/Action';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import Reason from './components/Reason/Reason';
import Trust from './components/Trust/Trust';
import Layout from './components/Layout/Layout';

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const showFormHandler = () => {
    setFormIsVisible(true);
  };
  const hideFormHandler = () => {
    setFormIsVisible(false);
  };
  return (
    <Layout>
      {formIsVisible && (
        <Form onHideForm={hideFormHandler} />
      )}
      <Hero onShowForm={showFormHandler} />
      <React.Fragment>
        <Reason />
        <Accordion />
        <Action />
        <Trust />
        <Contacts />
        <Footer />
      </React.Fragment>
    </Layout>
  );
}

export default App;
