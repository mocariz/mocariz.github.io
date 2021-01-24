import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Mail } from '@styled-icons/foundation/Mail'

import * as S from './styles'

const Main = () => (
  <S.Container>
    <S.Wrapper>
      <S.Block>
        <S.Title>
          Olá, meu nome é <b>Mônica</b> e eu sou <b>Desenvolvedora Front-end</b>
          .
        </S.Title>
        <S.IconsWrapper>
          <S.Icon
            href="https://github.com/mocariz"
            title="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </S.Icon>
          <S.Icon
            href="https://www.linkedin.com/in/mocariz/"
            title="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </S.Icon>
          <S.Icon
            href="mailto:mota.ocariz@gmail.com"
            title="mail"
            rel="noopener noreferrer"
          >
            <Mail />
          </S.Icon>
        </S.IconsWrapper>
        <S.Arrow />
      </S.Block>
      <div>
        <img src="/img/logo.png" alt="mocariz logo" />
      </div>
    </S.Wrapper>
  </S.Container>
)

export default Main
