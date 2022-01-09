import Image from 'next/image'
import { Github, Linkedin } from '@styled-icons/boxicons-logos'
import { Mail } from '@styled-icons/entypo'
import { ArrowheadDown } from '@styled-icons/evaicons-solid'
import * as S from './styles'

const Introduction = () => (
  <S.Wrapper>
    <S.Block>
      <S.Description>
        Olá, meu nome é <b>Mônica</b> e eu sou <br />{' '}
        <b>Desenvolvedora Front-end</b>.
      </S.Description>
      <S.BlockLinks>
        <S.Link
          href="https://github.com/mocariz"
          target="_blank"
          className="no-style"
        >
          <Github size={52} aria-label="Github" />
        </S.Link>
        <S.Link
          href="https://www.linkedin.com/in/mocariz/"
          target="_blank"
          className="no-style"
        >
          <Linkedin size={52} aria-label="Linkedin" />
        </S.Link>
        <S.Link href="mailto:mota.ocariz@gmail.com" className="no-style">
          <Mail size={52} aria-label="Mail" />
        </S.Link>
      </S.BlockLinks>

      <S.ArrowheadDown>
        <ArrowheadDown size={40} />
      </S.ArrowheadDown>
    </S.Block>
    <S.BlockImage>
      <Image
        src="/img/banner.svg"
        alt="A developer sitting at the table with a notebook on her lap, beside her is her little dog Tessa, a white poodle."
        width={500}
        height={500}
        sizes="50vw"
        layout="responsive"
      />
    </S.BlockImage>
  </S.Wrapper>
)

export default Introduction
