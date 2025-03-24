import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import CreateStoreModal from "./CreateStoreModal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

ModuleRegistry.registerModules([AllCommunityModule]);
interface RowData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const StoreAGGrid: React.FC = () => {
  const { store } = useSelector<RootState>((state) => state.rootSlice);
  console.log(store);

  const colDefs = [
    { field: "id" },
    { field: "store" },
    { field: "state" },
    { field: "city" },
  ];

  return (
    <>
      <AgGridReact rowData={store} columnDefs={colDefs} />
      <CreateStoreModal />
    </>
  );
};

export default StoreAGGrid;
