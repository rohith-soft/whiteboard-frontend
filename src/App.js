import EnhancedTable from "./table-custom/EnhancedTable";

const headCells = [
  { id: "name", numeric: false, label: "Dessert (100g serving)" },
  { id: "calories", numeric: true, label: "Calories" },
  { id: "fat", numeric: true, label: "Fat (g)" },
  { id: "carbs", numeric: true, label: "Carbs (g)" },
  { id: "protein", numeric: true, label: "Protein (g)" },
];
const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
  createData("Ice cream sandwich2", 237, 9.0, 37, 4.3),
  createData("Jelly Bean2", 375, 0.0, 94, 0.0),
  createData("KitKat2", 518, 26.0, 65, 7.0),
  createData("Lollipop2", 392, 0.2, 98, 0.0),
  createData("Marshmallow2", 318, 0, 81, 2.0),
  createData("Nougat2", 360, 19.0, 9, 37.0),
  createData("Oreo2", 437, 18.0, 63, 4.0),
  createData("Burger Mc D", 437, 18.0, 63, 4.0),
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const App = () => {
  return (
    <div>
      <EnhancedTable headCells={headCells} rows={rows} defaultOrderBy="name" defaultOrder="asc" rowsPerPage={5} />
    </div>
  );
};

export default App;
