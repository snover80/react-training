import { useState } from "react";

interface ExpandableComponentProps {
  children: string;
  lenght?: number;
}

function ExpandableComponent({
  children,
  lenght = 100,
}: ExpandableComponentProps) {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= lenght) return <p>{children}</p>;

  const subString = isExpanded ? children : children.substring(0, lenght);

  return (
    <div>
      {subString}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
}

export default ExpandableComponent;
