import { useState } from "react";
import { Alert } from "./components/Alert";
import ButtonBootstrap from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <Like
          onClick={() => {
            console.log("Liked!");
          }}
        />
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

export default App;
