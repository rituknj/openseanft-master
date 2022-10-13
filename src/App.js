import "./App.css";
// import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import Notable from "./Components/Notable";
import Avalanch from "./Components/Avalanch";
import Browse from "./Components/Browse";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />

      <Trending />
      <Notable />
      <Avalanch />
      <Browse />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
