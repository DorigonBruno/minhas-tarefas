import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>
      <S.Label>3 Pendentes</S.Label>
    </S.Contador>
  </S.Card>
)

export default FiltroCard
