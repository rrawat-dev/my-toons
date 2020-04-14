import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
    red: '#FF0000',
    blue: "#33BEFF ",
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#e9e7e9',
    offWhite: '#EDEDED',
    terracotta: '#d07d28',
    maxWidth: '1200px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};


const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
@font-face {
    font-family: Roboto;
    src: url('/static/roboto-v20-latin-300.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Roboto;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  .float-left {
      float: left;
  }
  .float-right {
      float: right;
  }
  .width-12 {
      width: 12%;
  }
  .width-85 {
      width: 85%;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;