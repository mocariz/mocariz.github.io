import { NextSeo } from 'next-seo'
import Introduction from 'components/Introduction'
import * as S from './styles'

export default function HomeTemplate() {
  return (
    <S.Wrapper>
      <NextSeo
        title="Mocariz Blog"
        description="A simple project starter to share my experiences and knowledge acquired on a daily basis."
        canonical="https://my-trips-mocariz.vercel.app"
      />

      <S.Main>
        <Introduction />
      </S.Main>
    </S.Wrapper>
  )
}
