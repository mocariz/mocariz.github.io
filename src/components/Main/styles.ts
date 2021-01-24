import styled from 'styled-components'
import { ArrowheadDownOutline } from '@styled-icons/evaicons-outline/ArrowheadDownOutline'

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Wrapper = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px 0;
`

export const Block = styled.div`
  text-align: center;
  align-self: flex-end;
`

export const Title = styled.h1`
  color: #bb6bd9;
  font-weight: normal;
  padding-bottom: 40px;
`

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 50%;
  margin: auto;
`

export const Icon = styled.a`
  cursor: pointer;

  svg {
    height: 45px;
    width: auto;
    fill: #00feb5;

    &:hover {
      fill: #11b488;
    }
  }
`

export const Arrow = styled(ArrowheadDownOutline)`
  width: 50px;
  height: 50px;
  margin-top: 150px;
  margin-bottom: 40px;
  cursor: pointer;
`
