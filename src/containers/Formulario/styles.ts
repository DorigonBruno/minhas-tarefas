import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const ContainerPrioridade = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  color: #666666;

  p {
    margin-bottom: 10px;
  }

  label {
    margin-right: 10px;
    cursor: pointer;
  }

  input {
    margin-right: 3px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
