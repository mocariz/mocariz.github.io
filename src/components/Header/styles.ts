import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 87px;
  z-index: 10;
  background-color: #44475a;
  font-weight: 300;

  @media only screen and (max-width: 37.5rem) {
    height: 70px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 80%;
  margin: auto;

  @media only screen and (max-width: 37.5rem) {
    width: 100%;
    height: inherit;
  }
`

export const Nav = styled.nav`
  @media only screen and (max-width: 37.5rem) {
    position: fixed;
    top: 0;
    right: 0;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    bottom: 0;
    width: 200px;
    border-left: 1px solid #44475a;
    background: #44475a;
    overflow-x: auto;
    z-index: 2;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    padding-left: 0px;
    -webkit-transform: translate(100%, 0);
    -ms-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
`

export const Ul = styled.ul`
  transform: none !important;
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;

  @media only screen and (max-width: 37.5rem) {
    margin-top: 70px;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }
`

export const Item = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: var(--primary);
  list-style: none;
  cursor: pointer;

  @media only screen and (max-width: 37.5rem) {
    padding-bottom: 10px;
  }
`

export const InputControlNav = styled.input`
  visibility: hidden;
  position: absolute;
  left: -9999px;

  &:checked {
    & ~ .control-nav-close {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    & ~ div > div > nav {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
`

export const ControlNav = styled.label`
  &:before {
    content: '';
    display: block;
    height: 3px;
    background: #fff;
  }
  @media only screen and (max-width: 37.5rem) {
    position: fixed;
    right: 20px;
    top: 25px;
    display: block;
    width: 30px;
    padding: 5px 0;
    border: solid #fff;
    border-width: 3px 0;
    z-index: 11;
    cursor: pointer;
  }
`

export const ControlNavClose = styled.label`
  @media only screen and (max-width: 37.5rem) {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    transition: all 500ms ease;
    transform: translate(100%, 0);
  }
`

export const Logo = styled.img`
  vertical-align: middle;
  border: 0;
  @media only screen and (max-width: 37.5rem) {
    position: fixed;
    top: 10px;
    display: block;
    z-index: 11;
    left: 10px;
  }
`
