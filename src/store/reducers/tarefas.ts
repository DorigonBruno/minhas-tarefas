import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../util/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      descricao: 'estudando typescript para aprimoramento profissional',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      titulo: 'Pagar Internet',
      descricao: 'Pagar a internet Desktop',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Passear com as Cachorras Amanha',
      descricao: 'Passear com a Mabel e a Mery amanhã',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      tarefaIndex >= 0 ? (state.itens[tarefaIndex] = action.payload) : null
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLowerCase()
      )

      if (tarefaExiste) {
        alert('Ja exite uma tarefa Igual')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const tarefaIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (tarefaIndex) {
        state.itens[tarefaIndex].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
