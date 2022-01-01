import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <img src="/img/logo.svg" />

      <S.Nav>
        <S.Item>Sobre</S.Item>
        <S.Item>Posts</S.Item>
      </S.Nav>
    </S.Wrapper>
  )
}

export default Header
