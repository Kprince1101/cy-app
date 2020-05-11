import React, { useState, useEffect } from "react";

import MUIDataTable from "mui-datatables";
import axios from "axios";
import {baseUrl} from '../nav/urls';
// import CircularProgress from "@material-ui/core/CircularProgress";

const CompareYourselfTable = () => {
  const [rows, setRows] = useState();

  useEffect(() => {
    const getAllData = async () => {
      await axios
        .get(`${baseUrl}/all`)
        .then((res) => {
          setRows(res.data);
        })
        .catch((err) => console.log(err));
    };
    getAllData();
  }, []); // eslint-disable-line

  const handleDeleteRow = async (index) => {
    const id = rows[index].id;
    await axios
      .delete(`${baseUrl}?id=${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const columns = [
    { label: "Name", name: "name" },
    { label: "Age", name: "age" },
    { label: "Title", name: "title" },
    { label: "Hobby", name: "hobby" },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    selectableRows: "single",
    onRowsDelete: (rowsDeleted) => {
      const idToDelete = rowsDeleted.data.map((item) => item.dataIndex);
      handleDeleteRow(idToDelete);
    },
    selectableRowsOnClick: true,
  };

  return (
    <MUIDataTable
      title={"Sample Data"}
      data={
        rows &&
        rows.map((rowObj) => {
          return [rowObj.name, rowObj.age, rowObj.title, rowObj.hobby];
        })
      }
      columns={columns}
      options={options}
    />
  );
};

export default CompareYourselfTable;
