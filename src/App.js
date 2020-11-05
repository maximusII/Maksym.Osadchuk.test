import "./App.css";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import MainWindow from "./components/MainWindow/MainWindow";

function App() {
  return (
    <div className="App">
      <Header />
      <MainWindow />
      <SideMenu />
    </div>
  );
}

export default App;
