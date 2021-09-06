import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <Main />
      </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
