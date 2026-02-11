import React from "react";
import Navigation from "./Navigation/Navigation";
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader/>
      <ContactForm />
    </div>
  );
}

export default App;
