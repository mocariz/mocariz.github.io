import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 37.5rem) {
    flex-direction: column-reverse;
  }
`

export const Block = styled.div`
  width: 50%;

  @media only screen and (max-width: 37.5rem) {
    width: 100%;
  }
`
export const BlockImage = styled(Block)`
  @media only screen and (max-width: 37.5rem) {
    width: 60%;
    margin-bottom: 25px;
  }
`

export const Description = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: var(--primary);

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

  @media only screen and (max-width: 37.5rem) {
    margin-top: 50px;
  }
`
