/* eslint-disable react/prop-types */
import TabPanel from "@mui/lab/TabPanel";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useState } from "react";
import { get_category_products } from "../api/menu";
import { Box, CircularProgress } from "@mui/material";
import MenuProductCard from "./cards/MenuProductCard";

export default function MenuProductsSection({
  menuCategories,
  currentCategory,
}) {
  const [products, setProducts] = useState([]);
  const { refetch, isLoading } = useQuery(
    ["menuProducts", currentCategory],
    () => get_category_products(currentCategory),
    {
      // onError: () => {
      //   return { data: [] };
      // },
      onSuccess: (data) => {
        setProducts(data.data);
      },
    }
  );

  useEffect(() => {
    refetch(currentCategory);
  }, [currentCategory]);

  return (
    <article>
      {menuCategories.map((category) => (
        <TabPanel className="max-h-[30rem] overflow-auto !pt-0" key={category.id} value={category.id}>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ">
              {products.map((product) => (
                <MenuProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </TabPanel>
      ))}
    </article>
  );
}
