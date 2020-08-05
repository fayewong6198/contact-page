import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import Contact from "./Components/Contact";
import Map from "./Components/Map";
function App() {
  return (
    <div className="App">
      <div className="img-contact">
        <div className="img-title">
          <h6>HAVE ANY QUESTIONS?</h6>
          <h1>PLEASE CONTACT US</h1>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.3865447437727!2d106.67931670809078!3d10.828669348071534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fe994bbcaf%3A0x57fc04b92e1b4ebe!2zROG7sSDDoW4gQ2VudGVyIEhpbGxzIEfDsiBW4bqlcCwgUGjGsOG7nW5nIDcsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1596602735408!5m2!1svi!2s"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="map"
        ></iframe>
      </div>
      <div className="container">
        <div className="title-border">
          <h4 className="title color-primary">SEND A MESSAGE</h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ContactForm></ContactForm>
          </div>
          <div className="col-md-6">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
