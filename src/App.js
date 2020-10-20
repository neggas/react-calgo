import React, { Component } from "react";
import { Ecran } from "./Components/Ecran/Ecran-component";
import { BouttonContainer } from "./Components/BouttonContainer/BouttonContainer-component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      buttons: [
        { value: "CA", itemClass: "btn-operator" },
        { value: "C", itemClass: "btn-operator" },
        { value: "/", itemClass: "btn-operator" },
        { value: "*", itemClass: "btn-operator" },

        { value: 7, itemClass: "btn-num" },
        { value: 8, itemClass: "btn-num" },
        { value: 9, itemClass: "btn-num" },
        { value: "-", itemClass: "btn-operator" },

        { value: 4, itemClass: "btn-num" },
        { value: 5, itemClass: "btn-num" },
        { value: 6, itemClass: "btn-num" },
        { value: "+", itemClass: "btn-operator" },

        { value: 1, itemClass: "btn-num" },
        { value: 2, itemClass: "btn-num" },
        { value: 3, itemClass: "btn-num" },
        { value: "=", itemClass: "btn-operator equal" },

        { value: 0, itemClass: "btn-num dot" },
        { value: ".", itemClass: "btn-num" }
      ],
      evale: ""
    };
  }

  handleClick = (evt) => {
    if (evt.target.innerText === "=") {
      let splitting = this.state.evale.split("");
      if (
        !"+-*/".includes(splitting[splitting.length - 2]) ||
        !"+-*/".includes(splitting[splitting.length - 1])
      ) {
        const resultat = eval(this.state.evale);
        this.setState({ evale: resultat });
      }
    } else if (evt.target.innerText === "CA") {
      this.setState({ evale: "" });
    } else if (evt.target.innerText === "C") {
      let splitting = this.state.evale.split("");
      splitting.splice(splitting.length - 1, 1);
      this.setState({ evale: splitting.join("") });
    } else {
      let current = this.state.evale + evt.target.innerText;
      this.setState({ evale: current });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="calc-container ">
            <Ecran evale={this.state.evale} />
            <BouttonContainer
              bouttons={this.state.buttons}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
