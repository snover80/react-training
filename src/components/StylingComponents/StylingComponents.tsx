import ButtonPlainCss from "./Button/ButtonPlainCss";
import Like from "./Like/Like";
import ListGroup from "./ListGroup";

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
