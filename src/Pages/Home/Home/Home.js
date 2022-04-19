import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Gallary from "../Gallary/Gallary";
import Services from "../Our-Service/Services";


const Home = () => {
  return (
    <div>
      <Gallary></Gallary>
      <Services></Services>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
