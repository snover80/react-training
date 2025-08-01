import React, { useState } from "react";
import ProductList from "./ProductList";
import "bootstrap/dist/css/bootstrap.min.css";

function AppEffectHook() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default AppEffectHook;
