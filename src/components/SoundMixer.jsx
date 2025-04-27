import React, { useContext } from "react";
import { AudioContext } from "../hooks/useAudioHook";

function SoundMixer() {
  const {
    soundPresets,
    handleSelectPreset,
    selectedPreset,
    setSelectedPreset,
  } = useContext(AudioContext);
  return (
    <div className="col-span-1 sm:col-span-2 bg-[rgba(25,33,52,0.7)] rounded-xl pt-3 p-5">
      <h2 className="flex justify-center display-text text-xl font-medium text-gray-400 mb-5">
        Soundscape Deck
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {soundPresets.map((preset, idx) => {
          return (
            <div
              style={{
                borderColor:
                  preset.key === selectedPreset ? "#8b5cf6" : "transparent",
                backgroundColor:
                  preset.key === selectedPreset
                    ? "rgba(79, 89, 115, 0.7)"
                    : "rgba(39, 49, 75, 0.7)",
              }}
              className="rounded-md p-3 cursor-pointer border transition-all delay-200 hover:border-[#8b5cf6] hover:bg-[rgba(59, 69, 95, 0.7)]"
              key={idx}
              onClick={() => {
                setSelectedPreset(preset.key);
                handleSelectPreset(preset.key);
              }}
            >
              <h3 class="font-display font-bold text-md text-gray-300 pb-1">
                {preset.name}
              </h3>
              <p class="font-display font-regular text-xs text-gray-400">
                {preset.subName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SoundMixer;
