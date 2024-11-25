import React, { useState } from "react";

function Container(props) {
  const date = new Date().toISOString().split("T");
  const minDate = date[0];
  const minTime = date[1].substring(0, 5);
  const { count } = props;
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
  });

  function handleChange(name, value) {
    setForm((preVal) => {
      return { ...preVal, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    count(form);
  }

  return (
    <>
      <div className="relative top-5 p-4 max-sm:top-2">
        <h1 className="text-3xl font-bold mt-0 mb-3 text-center max-sm:text-xl">
          Create a custom Countdown!
        </h1>
        <form className="w-[480px] max-sm:w-auto" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="What are you countdowning to?"
            value={form.title}
            name="title"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <label htmlFor="date">Select Date</label>
          <input
            id="date"
            type="date"
            min={minDate}
            name="date"
            value={form.date}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <label htmlFor="time">Select Time</label>
          <input
            id="time"
            type="time"
            name="time"
            min={minTime}
            value={form.time}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <button className="w-full h-12 rounded-2xl border-none mt-5 outline-none cursor-pointer text-white bg-slate-700 uppercase hover:brightness-110">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Container;
