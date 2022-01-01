import styled from 'styled-components'

export const Wrapper = styled.main`
  color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Block = styled.div`
  width: 50%;
`
export const Description = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #bb6bd9;

  b {
    font-weight: 700;
  }
`

export const BlockLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: auto;
  padding-top: 36px;
`

export const Link = styled.a`
  color: #11b488;
  cursor: pointer;
`

export const ArrowheadDown = styled.div`
  margin-top: 150px;
  cursor: pointer;
`
