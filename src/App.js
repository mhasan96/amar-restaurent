import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./Components/Home/Dinner/Dinner";
import Expert from "./Components/Home/Experts/Experts";
import Breakfast from "./Components/Home/Home/Breakfast/Breakfast";
import Home from "./Components/Home/Home/Home";
import Lunch from "./Components/Home/Home/Lunch";
import NavBar from "./Components/Home/NavBar/NavBar";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Expert></Expert>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Home></Home>
            <Expert></Expert>
          </Route>
          <Route path="/breakfast">
            <Header></Header>
            <Breakfast></Breakfast>
            <Expert></Expert>
          </Route>
          <Route path="/lunch">
            <Header></Header>
            <Lunch></Lunch>
            <Expert></Expert>
          </Route>
          <Route path="/dinner">
            <Header></Header>
            <Dinner></Dinner>
            <Expert></Expert>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
