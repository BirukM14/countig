import React, { useState } from "react";
import Create from "./countDown/create";
import CountDown from "./countDown/countDown";
import EndCountDown from "./countDown/endCountDown";

function Card() {
  const [isSubmit, setSubmit] = useState(false);
  const [countDown, setCountDown] = useState({ title: "", date: "", time: "" });
  const [isFinished, setFinished] = useState(false);

  function handleCountDown(params) {
    setCountDown(params);
    setSubmit(true);
  }
  return (
    <div className="min-h-80 max-w-[580px] text-black mx-auto my-0 px-10 py-6 rounded-md flex justify-center bg-lime-200 z-10 relative max-sm:w-[95vw]">
      {!isSubmit ? (
        <Create count={handleCountDown} />
      ) : isFinished ? (
        <EndCountDown
          date={countDown.date}
          time={countDown.time}
          setSubmit={setSubmit}
          finished={setFinished}
        />
      ) : (
        <CountDown
          countDown={countDown}
          finished={setFinished}
          setSubmit={setSubmit}
        />
      )}
    </div>
  );
}

export default Card;
