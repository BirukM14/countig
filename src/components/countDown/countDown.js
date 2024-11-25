import React, { useEffect, useState } from "react";

function CountDown(props) {
  const {countDown: { title, date, time },finished,setSubmit,} = props;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const milliSecond = Number(
    time.split(":")[0] * hour + time.split(":")[1] * minute
  );
  console.log(new Date().getHours());
  const next = new Date(date).getTime();
  const now = new Date().getTime();
  const [distance, setDistance] = useState(next - now);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.round((distance % minute) / second);

  useEffect(() => {
    let distanceRef = setInterval(() => {
      setDistance((preVal) => {
        if (preVal <= 0) {
          finished(true);
          clearInterval(distanceRef);
          return 0;
        } else {
          return distance - second;
        }
      });
    }, second);

    return () => {
      clearInterval(distanceRef);
    };
  }, [distance]);

  return (
    <>
      <div className="relative top-5 p-4 max-sm:top-2">
        <h1 className="text-3xl font-bold mt-0 mb-3 text-center max-sm:text-xl">
          {title}
        </h1>
        <ul>
          <li className=" max-sm:text-xs">
            <span className=" max-sm:text-xl">{days}</span>Days
          </li>
          <li className=" max-sm:text-xs">
            <span className=" max-sm:text-xl">{hours}</span>Hours
          </li>
          <li className=" max-sm:text-xs">
            <span className=" max-sm:text-xl">{minutes}</span>Minutes
          </li>
          <li className=" max-sm:text-xs">
            <span className=" max-sm:text-xl">{seconds}</span>Seconds
          </li>
        </ul>
        <button
          className="w-full h-12 rounded-2xl border-none mt-5 outline-none cursor-pointer text-white bg-slate-700 uppercase hover:brightness-110"
          onClick={(e) => {
            setSubmit(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default CountDown;
