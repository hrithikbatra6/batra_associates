import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Batra Associates ",
              "We deal in Sale",
              "We deal in Purchasing",
              "We deal in Renting",
              "We deal in Collaboration"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 75,
          }}
        />
      )
}

export default Type