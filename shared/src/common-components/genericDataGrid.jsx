import LinearProgress from "@mui/material/LinearProgress";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

import React from "react";
import { Paper } from "@mui/material";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const GenericDataGrid = (props) => {
  let { rows, columns, checkboxSelection = false } = props;
  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={40}
        
        slots={{
          toolbar: CustomToolbar,
          loadingOverlay: LinearProgress,
        }}
        loading={rows?.length === 0}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 1 } },
        }}
        rowSelection={false}
        pageSizeOptions={[5, 10, 50, 100, 150, 200]}
        checkboxSelection={checkboxSelection}
        onCellClick={props.onCellClick}
        {...props}
      />
    </Paper>
  );
};
export default GenericDataGrid;
