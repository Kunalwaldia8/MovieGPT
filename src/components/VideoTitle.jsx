import React, { useState } from "react";
const VideoTitle = ({ title, overview }) => {
  const [showText, setShowText] = useState(false);
  const handleMoreInfo = () => {
    setShowText((prev) => !prev);
  };
  return (
    <div className="w-full overflow-x-hidden  bg-opacity-50 rounded-lg p-4">
      <h1 className="text-white md:text-6xl text-3xl p-2 font-bold">{title}</h1>
      <p
        className={
          showText
            ? "text-white text-xl w-1/2 p-2 line-clamp-none h-auto"
            : `text-white text-xl w-1/2 p-2 line-clamp-2 h-16 hidden md:block`
        }
      >
        {overview}
      </p>
      <div>
        <button className="bg-white text-black py-2 px-4 md:px-8 m-2 md:text-xl text-sm rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button
          className="mx-2 my-2 bg-gray-500 text-white py-2 md:px-8 px-4 md:text-xl text-sm bg-opacity-50 rounded-lg hover:bg-opacity-40 text-ellipsis overflow-hidden whitespace-nowrap hover:text-xl hover:bg-gray-700"
          onClick={handleMoreInfo}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
