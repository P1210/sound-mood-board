import SoundView from "./pages/SoundView";

function App() {
  return (
    <div className="flex flex-col items-center justify-flex-start gap-4 w-full h-full">
      <header className="mb-4 mt-8">
        <div className="flex justify-center items-center mb-2">
          <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
          <h1 className="font-display text-3xl font-normal text-white text-center px-4">
            Sound Mood Board
          </h1>
          <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
        </div>
        <p className="font-display text-center font-medium text-gray-500 text-sm">
          Immerse yourself in ambient soundscapes
        </p>
      </header>
      <SoundView />
    </div>
  );
}

export default App;
