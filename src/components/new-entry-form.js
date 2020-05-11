import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { baseUrl } from "../nav/urls";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(5),
      width: "25ch",
    },
  },
  submit: {
    display: "flex",
    width: "5%",
    marginLeft: "10%",
    backgroundColor: "",
  },
}));

const NewDataEntry = () => {
  const classes = useStyles();
  const [newEntry, setNewEntry] = useState({
    Name: "",
    Age: "",
    Title: "",
    Hobby: "",
  });

  const handleFieldChange = (field, value) => {
    setNewEntry((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const params = {
      name: newEntry.Name,
      age: Number(newEntry.Age),
      title: newEntry.Title,
      hobby: newEntry.Hobby,
    };
    await axios
      .post(baseUrl, params)
      .then((res) =>
        window.location.replace("/table").catch((err) => console.log(err))
      );
  };

  return (
    <>
      <Typography variant="h3">New Entry</Typography>
      <Typography style={{ fontStyle: "italic" }} variant="p">
        Add a new user to the datatable
      </Typography>
      <form
        className={classes.root}
        noValidate
        preventDefault
        autoComplete="off"
        style={{ display: "flex-column" }}
      >
        <TextField
          id="outlined-basic-name-input"
          label="Name"
          value={newEntry.Name}
          onChange={(e) => handleFieldChange("Name", e.target.value)}
          variant="outlined"
          style={{ display: "flex" }}
        />
        <TextField
          id="outlined-basic-age-input"
          label="Age"
          value={newEntry.Age}
          onChange={(e) => handleFieldChange("Age", e.target.value)}
          variant="outlined"
          style={{ display: "flex" }}
        />
        <TextField
          id="outlined-basic-title-input"
          label="Title"
          value={newEntry.Title}
          onChange={(e) => handleFieldChange("Title", e.target.value)}
          variant="outlined"
          style={{ display: "flex" }}
        />
        <TextField
          id="outlined-basic-hobby-input"
          label="Hobby"
          value={newEntry.Hobby}
          onChange={(e) => handleFieldChange("Hobby", e.target.value)}
          variant="outlined"
          style={{ display: "flex" }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default NewDataEntry;
