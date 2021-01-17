import React, { createContext } from "react";
// import ComponentA from "./ComponentA";
import Bmi from "./BMI/Bmi";
import "bootstrap/dist/css/bootstrap.min.css";

const FirstName = createContext();
const LastName = createContext();

function App() {
  // const [state, setstate] = useState({
  //   district: "ERROR IN FETCHING",
  // });

  // useEffect(() => {
  //   alert("This is poping up only once");
  //   fetch("https://api.covid19india.org/misc.json")
  //     .then((res) => res.json())
  //     .then((result) =>
  //       setstate({ district: result.district_meta_data[0].district })
  //     );
  // }, []);
  return (
    <>
      {/* <FirstName.Provider value={state.district}>
        <LastName.Provider value={"Verma"}>
          <ComponentA />
          </LastName.Provider>
        </FirstName.Provider> */}
      <Bmi />
    </>
  );
}

export default App;

export { FirstName, LastName };
