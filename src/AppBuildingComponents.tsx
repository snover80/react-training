import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/BuildingComponents/ListGroup";
import { Alert } from "./components/BuildingComponents/Alert";
import ButtonBootstrap from "./components/BuildingComponents/Button";

function AppBuildingComponents() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClickButton={() => setAlertVisibility(false)}>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </Alert>
        )}
        <ButtonBootstrap onClickButton={() => setAlertVisibility(true)}>
          Open Alert!
        </ButtonBootstrap>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default AppBuildingComponents;
