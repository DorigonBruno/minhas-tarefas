import styled, { createGlobalStyle } from 'styled-components'
import cores from './cores'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  font-weight: 700;
  margin: 40px 0;
  font-size: 18px;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background: #fff;
  font-weight: bold;
  width: 100%;
  margin: 16px 0 0 10px;
`

export const CampoInput = styled.input`
  padding: 8px;
  background: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background: ${cores.azulEscuro};
  border-radius: 8px;
  margin: 8px 0 0 8px;
`

export const BotaoSalvar = styled(Button)`
  background: ${cores.verde};
  margin: 0;
`

export default EstiloGlobal
