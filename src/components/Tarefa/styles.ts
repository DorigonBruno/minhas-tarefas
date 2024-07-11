import styled from 'styled-components'
import cores from '../../styles/cores'

import * as enums from '../../util/enums/tarefa'
import { Button } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function corDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return cores.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return cores.laranja
  } else {
    if (props.status === enums.Status.PENDENTE) return cores.amarelo
    if (props.status === enums.Status.CONCLUIDA) return cores.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 8px;
    cursor: pointer;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  background: ${(props) => corDeFundo(props)};
  margin-right: 16px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 16px;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelar = styled(Button)`
  background: ${cores.vermelho};
`
