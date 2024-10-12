import { useState } from "react";

import headerImage from "../media/satelec_bleu.png";
import EstimateIcon from "@mui/icons-material/PostAdd";

import Estimate from "./Estimate";

const Header = ({ estimate, setEstimate }) => {
  const [displayEstimate, setDisplayEstimate] = useState(false);

  return (
    <div className="Header">
      <img src={headerImage} className="HeaderImage" alt="Header" />
      {(estimate.length > 1 || displayEstimate) && (
        <button
          className="estimate-button"
          onClick={() => setDisplayEstimate(!displayEstimate)}
          // style={{
          //   cursor: productsList.length > 0 ? "pointer" : "default",
          // }}
        >
          <EstimateIcon
            style={{
              fontSize: 30,
            }}
          />
        </button>
      )}
      {displayEstimate && (
        <Estimate
          estimate={estimate}
          setEstimate={setEstimate}
          displayEstimate={displayEstimate}
          setDisplayEstimate={setDisplayEstimate}
        />
      )}
    </div>
  );
};
export default Header;
