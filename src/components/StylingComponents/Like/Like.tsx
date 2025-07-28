import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

interface FcLikeProps {
  onClick: () => void;
}

function Like({ onClick }: FcLikeProps) {
  const [color, setColor] = useState("gray");
  return (
    <div>
      <AiFillHeart
        color={color}
        onClick={() => {
          onClick();
          color == "gray" ? setColor("red") : setColor("gray");
        }}
      />
    </div>
  );
}

export default Like;
