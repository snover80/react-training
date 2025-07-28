import ButtonPlainCss from "./components/StylingComponents/Button/ButtonPlainCss";
import Like from "./components/StylingComponents/Like/Like";
import ListGroup from "./components/StylingComponents/ListGroup";

function StylingComponents() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <>
      <div>
        <Like
          onClick={() => {
            console.log("Liked!");
          }}
        />
        <ButtonPlainCss onClickButton={() => console.log("Button Clicked")}>
          Click me!
        </ButtonPlainCss>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default StylingComponents;
