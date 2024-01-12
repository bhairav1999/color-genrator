import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";

const App = () => {
  const [colors , setcolors]=useState([new Values(`#f15025`).all(10)])
 
  return (
    <>
    <Form/>
    <ColorList colors={colors}/>
    </>
  )
};
export default App;
