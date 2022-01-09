import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
`

export const Div70 = styled.div`
  width: 60%;
  text-align: left;
`

export const Div30 = styled.div`
  width: 30%;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: var(--primary);
  padding-bottom: 40px;
`

export const Description = styled.div`
  font-weight: 300;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 2;
  letter-spacing: 0.069rem;
  color: #fff;

  p {
    margin: 0 auto 1.875rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
`

export const ProfileImage = styled.div`
  width: 370px;
  height: 370px;
  left: 923px;
  top: 832px;
  border-radius: 100%;
  background: #c4c4c4;
`
