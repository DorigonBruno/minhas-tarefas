import { useSelector } from 'react-redux'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filterTarefa = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const resultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) econtrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) econtrada(s) como: "${`${criterio} = ${valor}"`} ${complemento}`
    }
    return mensagem
  }

  const tarefas = filterTarefa()
  const mensagem = resultadoFiltrado(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((item) => (
          <li key={item.titulo}>
            <Tarefa
              id={item.id}
              descricao={item.descricao}
              titulo={item.titulo}
              status={item.status}
              prioridade={item.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
