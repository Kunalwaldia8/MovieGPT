import React from "react";

export const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] px-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to NetflixGPT
      </h1>
      <p className="text-xl text-white/80 text-center max-w-2xl">
        Your AI-powered movie recommendation platform. Discover your next
        favorite show with the power of artificial intelligence.
      </p>
    </div>
  );
};
