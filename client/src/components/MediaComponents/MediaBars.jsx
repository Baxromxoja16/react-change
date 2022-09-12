import React from "react";
import Media from "react-media";
import Bars from "../icons/Bars";

const MediaBars = ({ setActive, setMenuActive}) => {
  return (
    <Media query="(max-width: 991px)">
      {(matches) =>
        matches ? (
          <Bars setMenuActive={setMenuActive} />
        ) : (
          <a className="signup" href="#!" onClick={() => setActive(true)}>
            ЗАПИСАТЬСЯ
          </a>
        )
      }
    </Media>
  );
};

export default MediaBars;
