import React from "react";

import { useParams } from "react-router-dom";

function AllProductsPages() {
  const { category } = useParams();
  console.log(category);
  return <div>AllProductsPages</div>;
}

export default AllProductsPages;
