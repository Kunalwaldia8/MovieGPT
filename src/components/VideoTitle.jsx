const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full">
      <h1 className="text-white text-6xl font-bold">{title}</h1>
      <p className="text-white text-xl w-1/2 line-clamp-4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-8 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-2 px-8 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-40 text-ellipsis overflow-hidden whitespace-nowrap hover:text-xl hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
