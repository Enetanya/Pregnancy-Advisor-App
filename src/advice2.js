import { advice2 } from "./adviceArray.js";


function PregnancyRelatedAdvice(props) {
    switch (props.weeks) {
      case "1-6":
        return advice2[0];
      case "7-12":
        return advice2[1];
      case "13-18":
        return advice2[2];
      case "19-24":
        return advice2[3];
      case "25-30":
        return advice2[4];
      case "31-36":
        return advice2[5];
      case "37-40":
        return advice2[6];
      default:
        return "";
    }
  }

  export default PregnancyRelatedAdvice;