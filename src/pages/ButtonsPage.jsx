import Buttons from "../components/Buttons";
import {
  GoAlert,
  GoArchive,
  GoBell,
  GoBookmark,
  GoDatabase,
} from "react-icons/go";

function ButtonsPage() {
  const handleOnClick = () => console.log("hi");
  return (
    <div className="flex justify-between">
      <Buttons primary rounded onClick={handleOnClick}>
        <GoBell />
        primary
      </Buttons>
      <Buttons secondary rounded>
        <GoDatabase />
        secondary
      </Buttons>
      <Buttons error rounded>
        <GoAlert />
        error
      </Buttons>
      <Buttons success rounded>
        <GoArchive />
        success
      </Buttons>
      <Buttons warning rounded>
        <GoBookmark />
        warning
      </Buttons>
    </div>
  );
}

export default ButtonsPage;
