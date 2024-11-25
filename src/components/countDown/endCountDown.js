import React from "react";

function EndCountDown(props) {
  const { setSubmit, finished } = props;
  return (
    <div className="relative top-16 max-sm:top-2 p-4">
      <h1 className="text-3xl font-bold mt-0 mb-3 animate-bounce text-green-500 text-center max-sm:text-xl">
        Countdown Complete!
      </h1>
      <h1 className="text-2xl font-bold mt-0 mb-3 text-center max-sm:text-xl">
        Countdown Finished on {props.date} at {props.time}
      </h1>
      <button
        className="w-full h-12 rounded-2xl border-none mt-5 outline-none cursor-pointer text-white bg-slate-700 uppercase hover:brightness-110"
        onClick={(e) => {
          e.preventDefault();
          setSubmit(false);
          finished(false);
        }}
      >
        New Countdown
      </button>
    </div>
  );
}

export default EndCountDown;
