import * as S from './styles'

const Header = () => {
  return (
    <header>
      {/* START MOBILE */}
      <S.InputControlNav type="checkbox" id="control-nav" />
      <S.ControlNav htmlFor="control-nav"></S.ControlNav>
      <S.ControlNavClose
        htmlFor="control-nav"
        className="control-nav-close"
      ></S.ControlNavClose>

      {/* END MOBILE */}

      <S.Wrapper>
        <S.Container>
          <a className="no-style">
            <S.Logo src="/img/logo.svg" />
          </a>

          <S.Nav className="container">
            <S.Ul>
              <S.Item>Sobre</S.Item>
              <S.Item>Posts</S.Item>
            </S.Ul>
          </S.Nav>
        </S.Container>
      </S.Wrapper>
    </header>
  )
}

export default Header
