import { alpha } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { useTheme } from "../contexts/ThemeContext";

const EVEN_OPACITY = 0.5;

const stripedGridStyle = (isDark) => ({
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: alpha(isDark ? "#0F172A" : "#F1F5F9", EVEN_OPACITY),
    "&:hover, &.Mui-hovered": {
      backgroundColor: isDark ? "#0F172A" : "#F1F5F9",
      "@media (hover: none)": { backgroundColor: "transparent" },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        isDark ? "#0F172A" : "#F1F5F9",
        EVEN_OPACITY + 0.12
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          isDark ? "#0F172A" : "#F1F5F9",
          EVEN_OPACITY + 0.24
        ),
        "@media (hover: none)": {
          backgroundColor: alpha(
            isDark ? "#0F172A" : "#F1F5F9",
            EVEN_OPACITY + 0.12
          ),
        },
      },
    },
  },
  color: isDark ? "#DAD9D9" : "#333333",
  "& .MuiDataGrid-footerContainer, .MuiDataGrid-filler": {
    display: "none",
  },
  "& .MuiDataGrid-root, .MuiDataGrid-main": {
    height: "100%",
  },
  "& .super-app-theme--header, .super-app-theme--header:hover": {
    backgroundColor: `${isDark ? "#0F172A" : "#F1F5F9"} !important`,
    color: `${isDark ? "#F1F5F9" : "#0F172A"} !important`,
  },
  border: 0,
  "& .MuiDataGrid-cell": {
    borderColor: `${isDark ? "#374151" : "#E5E7EB"}`,
  },
  "& .MuiDataGrid-columnHeaders": {
    borderBottom: `none !important`,
  },
});

function TableGrid({ rows, columns }) {
  const { isDark } = useTheme();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      sx={stripedGridStyle(isDark)}
    />
  );
}

TableGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array
};

export default TableGrid;
