import React from "react";
import { useAudioHook } from "../hooks/useAudioHook";
import {
  Pause,
  PauseCircle,
  Play,
  PlayCircle,
  Volume,
  Volume2,
  VolumeOff,
} from "lucide-react";
import { soundColors } from "../colors";

function CardCarousel() {
  const { soundData, togglePlay, handleVolumne, handleMute } = useAudioHook();
  return (
    <>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(18rem,1fr))] gap-12 w-full mx-auto">
        {soundData.map((sound, idx) => (
          <div
            className="w-full h-full rounded-xl flex flex-col justify-between items-center bg-gray-800"
            key={idx}
            style={{
              border: `${sound.isPlaying ? "1px solid #4F8EF7" : "none"}`,
            }}
          >
            <div
              className="h-32 w-full rounded-t-xl relative bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(${sound.backgroundImage})` }}
            >
              <div className="h-full w-full absolute inset-0 rounded-t-xl bg-gradient-to-b from-black/10 via-black/30 to-black/70"></div>
              <div className="text-md font-medium text-white z-10 mx-auto w-full px-4 py-2">
                {sound.label}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-4 w-full p-3 border border-b-gray-700 border-l-gray-700 border-r-gray-700 border-t-gray-800 rounded-b-xl">
              <button className="" onClick={() => handleMute(sound.soundKey)}>
                {sound.muted ? (
                  <VolumeOff
                    className={`text-gray-400 h-5 w-5 `}
                    fill="#4a5568"
                  />
                ) : (
                  <Volume2
                    className={`text-gray-400 h-5 w-5 `}
                    fill="#4a5568"
                  />
                )}
              </button>
              <input
                type="range"
                name="volume"
                min={0}
                max={100}
                value={sound.volume * 100}
                onChange={(e) =>
                  handleVolumne(sound.soundKey, e.target.value / 100)
                }
                style={{
                  background: `linear-gradient(to right, ${
                    soundColors[sound.soundKey]
                  } ${sound.volume * 100}%, #2C2F3A ${sound.volume * 100}%)`,
                }}
                className={`w-full h-2.5 sm:h-1.5 rounded-lg appearance-none cursor-pointer bg-[#2C2F3A] transition-all duration-200 hover:brightness-110 focus:outline-none`}
              />
              <button
                // className="rounded-full bg-[#232631] hover:bg-[#4F8EF7] transition-colors"
                className=""
                onClick={() => togglePlay(sound.soundKey)}
              >
                {sound.isPlaying ? (
                  <Pause className={`text-white h-5 w-5 `} fill="white" />
                ) : (
                  <Play className={`text-white h-5 w-5`} fill="white" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardCarousel;
