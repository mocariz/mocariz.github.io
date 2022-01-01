import * as S from './styles'

const About = () => {
  return (
    <S.Wrapper>
      <S.Div70>
        <S.Title>Sobre Mim</S.Title>
        <S.Description>
          <p>
            Meu nome é Mônica Mota Ocariz, nasci em Bela Vista/MS e hoje
            trabalho como Frontend Developer na empresa{' '}
            <a
              className="externalLink"
              href="https://www.linkedin.com/company/kenlo-br/"
              target="_blank"
              rel="noreferrer"
            >
              Kenlo
            </a>
            .
          </p>

          <p>
            Já passei também pelas empresas{' '}
            <a
              className="externalLink"
              href="https://www.linkedin.com/company/infracommerce/"
              target="_blank"
              rel="noreferrer"
            >
              Infracommerce
            </a>{' '}
            e{' '}
            <a
              className="externalLink"
              href="https://www.linkedin.com/company/gauge/"
              target="_blank"
              rel="noreferrer"
            >
              Gauge
            </a>
            , onde conheci pessoas maravilhosas, expandindo meus horizontes.
            Cursei Análise e Desenvolvimento de Sistemas na FATEC de São José
            dos Campos, além disso cursei Técnico em Quimica na ECOMPO, e
            Eletricista de Manutenção Eletroeletrônica no SENAI (aquele curso
            que você pode fazer quando chega no ensino médio). Embora não segui
            a carreira, o SENAI foi a melhor escola pela qual passei, disciplina
            e respeito pela instituição eram a base de tudo, e isso me encantou,
            foi a ùnica escola pela qual passei que vi isso funcionar.
          </p>

          <p>
            Adoro conhecer pessoas, e valorizo muito ter uma boa relação com
            elas. Gosto de aplicar aquilo que aprendo, seja na vida ou trabalho,
            se irá somar, sempre é bem vindo. Além disso amo ler, seja um livro,
            uma novel, um manga, webtoon, filmes, séries, tudo que traz uma
            historia vira paixão! Amo animais, tenho fobia por aranhas ...
            quente/ frio? frio! salgado / doce? doce! dog / cat ? both!
          </p>
        </S.Description>
      </S.Div70>
      <S.Div30>
        <S.ProfileImage></S.ProfileImage>
      </S.Div30>
    </S.Wrapper>
  )
}

export default About
