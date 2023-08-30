import { advice1 } from "./adviceArray.js";


function AgeRelatedAdvice(props) {
  switch (props.age) {
    case "18-19":
      return advice1[0];
    case "20-29":
      return advice1[1];
    case "30-39":
      return advice1[2];
    case "40-49":
      return advice1[3];
    case "50 and Above":
      return advice1[4];
    default:
      return "";
  }
}

export default AgeRelatedAdvice;
