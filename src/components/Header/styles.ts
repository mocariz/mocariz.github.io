import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 80%;
  margin: auto;
  background-color: #44475a;
`

export const Nav = styled.nav`
  display: flex;
  width: 180px;
  justify-content: space-between;
`

export const Item = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #bb6bd9;
  list-style: none;
  cursor: pointer;
`
