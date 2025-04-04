import React from "react";
import NowPlayingMovies from "../hooks/useNowPlayingMovies";
export const Body = () => {
  NowPlayingMovies();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] px-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to MOVIEGPT
      </h1>
      <p className="text-xl text-white/80 text-center max-w-2xl">
        Your AI-powered movie recommendation platform. Discover your next
        favorite show with the power of artificial intelligence.
      </p>
    </div>
  );
};
