import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { CampoInput } from '../../styles'
import { Form, ContainerPrioridade, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/tarefas'

import * as enums from '../../util/enums/tarefa'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = React.useState('')
  const [descricao, setDescricao] = React.useState('')
  const [prioridade, setPrioridade] = React.useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <CampoInput
          onChange={({ target }) => setTitulo(target.value)}
          value={titulo}
          type="text"
          placeholder="Título"
        />
        <CampoInput
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        />
        <ContainerPrioridade>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key="porioridade">
              <input
                value={prioridade}
                type="radio"
                name="prior"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={({ target }) =>
                  setPrioridade(target.value as enums.Prioridade)
                }
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </ContainerPrioridade>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
