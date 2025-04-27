import React, { useEffect } from "react";
import { useFocusHook } from "../hooks/useFocusHook";

function FocusTimer() {
  const {
    focusTimerSettings,
    timerType,
    setTimerType,
    timerValue,
    setTimerValue,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
    isTimerActive,
    setTimerActive,
    formatTime,
    handleTimerComplete,
  } = useFocusHook();

  useEffect(() => {
    let interval = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimerValue((prev) => {
          if (prev < 1) {
            // Timer completed - clearing interval immediately
            clearInterval(interval);
            // doing this so that all the states have been updated and not interupting the render cycle of the component
            setTimeout(() => handleTimerComplete(), 10);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerActive]);

  return (
    <div className="col-span-1 bg-[rgba(25,33,52,0.7)] rounded-xl p-5">
      <h2 className="flex justify-center display-text text-xl font-medium text-gray-400">
        Focus Timer
      </h2>
      <div className="text-gray-200 text-6xl font-regular text-center my-3">
        {formatTime(timerValue)}
      </div>
      <div className="flex justify-center gap-3 mb-5">
        <button
          onClick={handleResetTimer}
          className="text-gray-200 bg-[rgba(139,92,246,0.2)] border border-[rgba(139,92,246,0.5)] rounded-lg px-5 py-2 hover:bg-[rgba(139,92,246,0.3)] transition-all"
        >
          Reset
        </button>
        <button
          onClick={() =>
            isTimerActive ? handlePauseTimer() : handleStartTimer()
          }
          className="text-gray-200 bg-purple-500 border border-purple-500 rounded-lg px-5 py-2 hover:bg-purple-600 transition-all"
        >
          {isTimerActive ? "Pause" : "Start"}
        </button>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {focusTimerSettings.map((setting, idx) => {
          return (
            <button
              onClick={() => {
                setTimerActive(false);
                setTimerType(setting.key);
                setTimerValue(setting.defaultValue);
              }}
              key={idx}
              className={`text-gray-200 rounded-full px-4 py-1 text-sm border transition-all ${
                timerType === setting.key
                  ? "bg-purple-500 border-purple-500"
                  : "bg-[rgba(139,92,246,0.1)] border-[rgba(139,92,246,0.3)] hover:bg-[rgba(139,92,246,0.2)]"
              }`}
            >
              {setting.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FocusTimer;
