import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "./Alert";
import ButtonBootstrap from "./Button";
import ListGroup from "./ListGroup";

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
