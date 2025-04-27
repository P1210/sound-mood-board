import React from "react";
import CardCarousel from "../components/CardCarousel";

function SoundView() {
  return (
    <div className="w-full pt-4 pb-8 px-16">
      <div className="text-xl font-medium text-white pb-4">Sound Library</div>
      <CardCarousel />
    </div>
  );
}

export default SoundView;
