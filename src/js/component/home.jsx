import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

const Home = () => {
  const cardArray = [];
  
  for (let i = 0; i < 4; i++) {
    cardArray.push(<Card key={i} />);
  }

  return (
    <div className="text-center">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          {cardArray.map((card, index) => (
            <div key={index} className="col-md-3">
              {card}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

