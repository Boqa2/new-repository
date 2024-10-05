import { useState } from "react";

const DateAndTime = () => {
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);
  return (
    <>
      <div className="flex w-full lg:text-[40px] md:text-[35px] font-bold text-white justify-center">
        {time.toLocaleTimeString()}
      </div>
      <div className="flex w-full lg:text-2xl md:text-xl font-bold text-white justify-center">
        {time.toLocaleDateString()}
      </div>
    </>
  );
};

export default DateAndTime;
