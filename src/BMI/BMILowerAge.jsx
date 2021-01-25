import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../App.css";
import Footer from "../Footer";
import Navbar from "./Navbar";

function Bmi(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");

  const HandleHeight = (e) => {
    setheight(e.target.value);
  };

  const HandleWeight = (e) => {
    setweight(e.target.value);
  };

  const bmicalc = weight / height ** 2;

  const finalBMI = Math.round(bmicalc * 10000);

  let status = "";
  let cssStyle = {};

  if (finalBMI < 16) {
    status = "Severe Thinness";
    cssStyle.color = "#8d0000";
  } else if (finalBMI >= 16.1 && finalBMI <= 17) {
    status = "Moderate Thinness";
    cssStyle.color = "red";
  } else if (finalBMI >= 17.1 && finalBMI <= 18.5) {
    status = "Mild Thinness";
    cssStyle.color = "#D5C013";
  } else if (finalBMI >= 18.6 && finalBMI <= 25) {
    status = "Normal";
    cssStyle.color = "green";
  } else if (finalBMI >= 25.1 && finalBMI <= 30) {
    status = "Overweight";
    cssStyle.color = "#D5C013";
  } else if (finalBMI >= 30.1 && finalBMI <= 35) {
    status = "Obese Class I";
    cssStyle.color = "red";
  } else if (finalBMI >= 35.1 && finalBMI <= 40) {
    status = "Obese Class II";
    cssStyle.color = "#af0000";
  } else if (finalBMI >= 40.1) {
    status = "Obese Class III";
    cssStyle.color = "#8d0000";
  }
  return (
    <>
      <Navbar />
      <div className="App-header">
        <span>BMI Calculator</span>

        <div>
          Enter Height : &nbsp;
          <input
            type="number"
            onChange={HandleHeight}
            value={height}
            style={{ marginTop: 20 }}
          />{" "}
          in CMs
          <br />
          Enter Weight : &nbsp;
          <input
            type="number"
            onChange={HandleWeight}
            value={weight}
            style={{ marginTop: 20 }}
          />{" "}
          in KGs
          <br />
          <Button
            color="danger"
            className="atCenter"
            onClick={() => {
              toggle();
            }}
          >
            CHECK
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>BMI Score</ModalHeader>
            <ModalBody className="modalBody">
              <h4>
                Your BMI Score is : {finalBMI}
                <br />
                Status : <span style={cssStyle}>&nbsp;{status}</span>
                <br />
                You are <span style={cssStyle}>&nbsp;{status}</span> by :{" "}
                {finalBMI - 25} kg/m<sup>2</sup>
              </h4>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Bmi;
