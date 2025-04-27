import FocusTimer from "./components/FocusTimer";
import Footer from "./components/Footer";
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
        {/* <div className="flex items-center justify-center my-5">
          <div className="h-0.5 w-24 bg-gradient-to-r from-indigo-500 to-transparent"></div>
          <div className="h-0.5 w-24 bg-gradient-to-l from-indigo-500 to-transparent ml-4"></div>
        </div> */}
      </header>
      <div className="w-full px-8 sm:px-16 mb-4 grid grid-cols-2">
        <FocusTimer />
      </div>
      <SoundView />
      <Footer/>
    </div>
  );
}

export default App;