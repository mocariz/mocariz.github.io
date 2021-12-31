import * as S from './styles'
import { Github, Linkedin } from '@styled-icons/boxicons-logos'
import { Mail } from '@styled-icons/entypo'

const Main = () => (
  <S.Wrapper>
    <S.Block>
      <S.Description>
        Olá, meu nome é <b>Mônica</b> e eu sou <b>Desenvolvedora Front-end</b>.
      </S.Description>
      <S.BlockLinks>
        <S.Link href="https://github.com/mocariz" target="_blank">
          <Github size={52} aria-label="Github" />
        </S.Link>
        <S.Link href="https://www.linkedin.com/in/mocariz/" target="_blank">
          <Linkedin size={52} aria-label="Linkedin" />
        </S.Link>
        <S.Link href="mailto:mota.ocariz@gmail.com">
          <Mail size={52} aria-label="Mail" />
        </S.Link>
      </S.BlockLinks>
    </S.Block>
    <S.Block>
      <S.Illustration
        src="/img/banner.svg"
        alt="A developer sitting at the table with a notebook on her lap, beside her is her little dog Tessa, a white poodle."
      />
    </S.Block>
  </S.Wrapper>
)

export default Main
