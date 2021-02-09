import React, { useState } from "react";
import TableScreenTemplate from "../../components/templates/TableScreenTemplate/TableScreenTemplate";
import TopNavigationBar from "../../components/organisms/TopNavigationBar/TopNavigationBar";
import SideNavigationBar from "../../components/organisms/SideNavigationBar/SideNavigationBar";
import { headCells } from "../../constants";
import EnhancedTable from "../../components/organisms/WhiteBoardTable/EnhancedTable";
 
export default function HomePage(props) {
  const [active, setActive] = useState("List");
  const handleTabChange = (event, value) => {
    console.log("Tab Value Changed -> ", value);
    setActive(value);
  };

  console.log("rows", props.rows);
  return (
    <div>
      <TableScreenTemplate
        header={<TopNavigationBar />}
        sidebar={<SideNavigationBar handleTabChange={handleTabChange} active={active} />}
        body={
          active === "List" ? (
            <EnhancedTable
              headCells={headCells}
              rows={props.rows}
              defaultOrderBy="name"
              defaultOrder="asc"
              rowsPerPage={5}
            />
          ) : (
            <div> Add Form </div>
          )
        }
      />
    </div>
  );
}
