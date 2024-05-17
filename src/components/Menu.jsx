import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { get_menu_category } from "../api/menu";
import { CircularProgress } from "@mui/material";
import MenuProductsSection from "./MenuProductsSection";

function MenuTabs() {
  const [value, setValue] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, [value]);

  const { data: menuCategories, isLoading: menuCategoriesIsLoading } = useQuery(
    ["menuCategories"],
    get_menu_category,
    {
      onSuccess: (menuCategories) => {
        setValue(menuCategories.data[0].id);
      },
    }
  );

  return (
    <section className="mt-4">
      {menuCategoriesIsLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList className="ps-4"
                variant="scrollable"
                scrollButtons={false}
                indicatorColor="none"
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-flexContainer": { gap: ".5rem" },
                  "& .Mui-selected": {
                    color: "#FF611D!important",
                    borderRadius: "0.625rem",
                    border: "1px solid #FF611D!important",
                    backgroundColor: "#FFE2D6",
                  },
                  "& .MuiTab-root": {
                    border: "1px solid #00000029",
                    borderRadius: "0.625rem",
                    color: "#000000",
                    padding: "5px 32px",
                    minHeight: "30px",
                  },
                }}
              >
                {menuCategories.data.map((category) => (
                  <Tab
                    key={category.id}
                    label={category.name}
                    value={category.id}
                  />
                ))}
              </TabList>
            </Box>
            {/*Menu Products Section */}
            <MenuProductsSection
              menuCategories={menuCategories.data}
              currentCategory={value}
            />
          </TabContext>
        </Box>
      )}
    </section>
  );
}

export default MenuTabs;
