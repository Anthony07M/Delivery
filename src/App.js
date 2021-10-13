import { GlobalStyle } from "./Styles/global"
import { Routes } from "./Routes"
import { Header } from "./Components/Header";
export const App = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header Tile="Delivery"/>
      <Routes/>
    </div>
  );
}