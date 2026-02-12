import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
