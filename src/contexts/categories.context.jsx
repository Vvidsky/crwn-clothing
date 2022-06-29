// import { useState, createContext, useEffect } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// // import PRODUCTS from "../shop-data.js";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   // Add the products to the database
//   // useEffect(() => {
//   //   addCollectionAndDocuments('categories', PRODUCTS, 'title');
//   // }, []);
//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       console.log(categoryMap);
//       setCategoriesMap(categoryMap);
//     };
//     getCategoriesMap();
//   }, []);
//   const value = { categoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
