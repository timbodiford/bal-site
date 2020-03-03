import React, { Component } from 'react';
import NavComponent from './Components/NavComponent';
import Who from './Components/Who';
import Unique from './Components/Unique';
import Partners from './Components/Partners';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Test from './Components/Test';
import ContactUsForm from './Components/ContactUsForm'


export default class Hello extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <Banner />
        <Who />
        <Unique />
        <Partners />
        <ContactUsForm />
        <Footer />
      </div>
    );
  }
}
