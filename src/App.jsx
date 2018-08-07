import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import GeneralOverview from './containers/GeneralOverview/GeneralOverview';


injectGlobal([`
html,body, #root {
margin:0;
padding:0;
height:100%; /* needed for container min-height */
}
`]);

const StyledDiv = styled.div`

@font-face {
  
  src: url('https://fonts.googleapis.com/css?family=Oswald:400,700');
}
background: #EAC435;
font-family: 'Oswald', sans-serif;
min-height: 100%;
`;
const App = () => {
  const routes = (
    <Switch>
      <Route path="/todos" component={GeneralOverview} />
      <Redirect to="/todos" />
    </Switch>);

  return (
    <StyledDiv>
      {routes}
    </StyledDiv>
  );
};

export default App;
