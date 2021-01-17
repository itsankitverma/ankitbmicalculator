import React from "react";
import { LastName, FirstName } from "./App";

function ComponentC() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <>
                      Name : {fname} <br />
                      Last Name : {lname}
                    </>
                  );
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default ComponentC;
