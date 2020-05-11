import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";

const AboutTheApp = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Typography variant="h3">Main Technologies: </Typography>
      <List>
        {["React with Hooks", "AWS Lambda (node 12.3)"].map((text) => (
          <ListItem button key={text} style={{textAlign: 'center'}}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h3">Libraries: </Typography>
      <List>
        {["Material UI", "MUI-Datatables", "Hookrouter", "Axios"].map((text, index) => (
          <ListItem button key={text} style={{textAlign: 'center'}}>
            { index === 0 && <ListItemText primary={text} style={{fontDecoration: 'underline', color: 'blue'}} onClick={() => window.open('https://material-ui.com/', '_blank')} /> }
            { index === 1 && <ListItemText primary={text} style={{fontDecoration: 'underline', color: 'blue'}} onClick={() => window.open('https://github.com/gregnb/mui-datatables', '_blank')} /> }
            { index === 2 && <ListItemText primary={text} style={{fontDecoration: 'underline', color: 'blue'}} onClick={() => window.open('https://www.npmjs.com/package/hookrouter', '_blank')} /> }
            { index === 3 && <ListItemText primary={text} style={{fontDecoration: 'underline', color: 'blue'}} onClick={() => window.open('https://www.npmjs.com/package/axios', '_blank')} /> }
          </ListItem>
        ))}
      </List>
      <Typography variant="h3" style={{fontDecoration: 'underline', color: 'blue', cursor:'pointer'}} onClick={() => window.open('https://github.com/Kprince1101/cy-app', '_blank')}>Repository </Typography>
    </div>
  );
};

export default AboutTheApp;
