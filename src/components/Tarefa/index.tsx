import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import { BotaoSalvar, Button } from '../../styles'

import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import * as enums from '../../util/enums/tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    descricaoOriginal.length ? setDescricao(descricaoOriginal) : ''
  }, [descricaoOriginal])

  function cancelaEdicao() {
    setEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusEvent(event: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA}
          id={titulo}
          onChange={alteraStatusEvent}
        />
        <S.Titulo>
          {editando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        disabled={!editando}
      />
      <S.BarraAcoes>
        {editando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao: descricaoOriginal,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={() => cancelaEdicao()}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <Button onClick={() => setEditando(true)}>Editar</Button>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
