import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  a {
    color: #bb6bd9;
    border-bottom: 2px dashed #bb6bd9;
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    transition: all .3s;
    &:hover {
      background: #bb6bd9;
      color: #fff;
    }
    &.externalLink:after {
      display: inline-block;
      content: '';
      color: #bb6bd9;
      background-image: url('/img/external.svg');
      background-size: 100%;
      margin-left: 0.313rem;
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export default GlobalStyles
