import Link from "./components/Link";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import ButtonsPage from "./pages/ButtonsPage";
import CounterPage from "./pages/CounterPage";
import DropDownPage from "./pages/DropDownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  const options = [
    { label: "RED", value: "red" },
    { label: "GREEN", value: "green" },
    { label: "BLUE", value: "blue" },
    { label: "YELLOW", value: "yellow" },
  ];
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <DropDownPage options={options} />
        </Route>
        <Route path="/Accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonsPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
