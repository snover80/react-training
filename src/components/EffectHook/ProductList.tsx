import React, { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  // useEffect, tiene 3 posibles opciones para ejecutarse
  // 1. useEffect(() => {}) sin ningun parametro luego del callback, se ejecutará siempre luego de renderizar los components
  // 2. useEffect(() => {}, []) Array vacio como parametro luego del callback, se ejecutara una unica vez luego del primer renderizado
  // 3. useEffect(() => {}, [category]) como en nuestro ejemplo, cada vez que la categoria sea distinta o haya un cambio, useEffect() sera llamado
  // dentro de nuestro array podemos tener muchas dependencias, si un valor cambia useEffect se ejecuta nuevamente
  useEffect(() => {
    console.log("Fetching Products" + category);
    setProducts(["Clothing", "Hosehold"]);
  }, [category]);
  return <div>ProductList</div>;
}

export default ProductList;
