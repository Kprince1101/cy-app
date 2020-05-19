import React from "react";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  const user = "User";

  return (
    <>
      <Typography style={{ margin: "3rem" }} variant="h3">
        <i>Welcome</i> {user}!
      </Typography>
      <Typography variant='h5' style={{width: '35%', display: 'flex', marginLeft: '4.5rem'}}>Feel free to navigate around and change/add anything you like.  Please be aware that anything you enter into the table can be viewed or removed by other users.</Typography>
    </>
  );
};

export default Home;
