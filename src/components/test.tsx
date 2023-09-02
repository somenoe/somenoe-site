import { useState } from "react";

export default function Test() {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <button className="italic p-3 border" onClick={handleClick}>
      {value}
    </button>
  );
}
