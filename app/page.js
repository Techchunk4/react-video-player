"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home = () => {
  const [url, setUrl] = useState("");
  const [playing, setPlaying] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setPlaying(false);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="mb-8 text-4xl font-bold">Video Player</h1>
      <input
        type="text"
        placeholder=""
        value={url}
        onChange={handleUrlChange}
        className="w-full max-w-lg p-2 mb-4 border border-red-600 rounded"
      />
      <button
        onClick={handlePlay}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Play
      </button>
      <div className="w-full max-w-4xl mt-8">
        {url && (
          <ReactPlayer
            url={url}
            playing={playing}
            controls
            width="100%"
            height="100%"
          />
        )}
      </div>
      <div className="pt-16">
        <h3 className="text-4xl font-thin tracking-widest text-black uppercase ">
          created
        </h3>
        <h5 className="pt-4 text-2xl font-thin tracking-widest text-center text-black uppercase">
          by
        </h5>

        <p className="pt-4 text-2xl font-thin tracking-widest text-black uppercase">
          Abdelkader
        </p>
      </div>
    </div>
  );
};

export default Home;
