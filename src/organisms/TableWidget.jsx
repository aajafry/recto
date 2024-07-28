import PropTypes from "prop-types";
import TableGrid from "../atom/TableGrid";
import WidgetHeader from "../molecules/WidgetHeader";

function TableWidget({ title, rows, columns }) {
  return (
    <>
      <WidgetHeader title={title} />
      <TableGrid rows={rows} columns={columns} />
    </>
  );
}

TableWidget.propTypes = {
  title: PropTypes.string,
  rows: PropTypes.array,
  columns: PropTypes.array,
};

export default TableWidget;
