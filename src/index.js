import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Routes from './routes';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  a, a:visited {
      text-decoration: none;
  }
`

ReactDOM.render(<Fragment>
    <GlobalStyle />
    <Routes />
</Fragment>, document.getElementById('root'));