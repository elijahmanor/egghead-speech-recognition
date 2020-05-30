import styled, {
  createGlobalStyle,
  css
} from 'styled-components'
import Teleprompter from './Teleprompter'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: sans-serif;
    margin: 0;
    overflow: hidden;
    background: linear-gradient(
      #9198e5,
      #e66465
    );
  }
`

export const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100%;
  height: 100vh;
  margin: 1rem;
`

export const StyledTeleprompter = styled(
  Teleprompter
)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Input = styled.textarea`
  height: 5rem;
  border: 1px solid
    rgb(0, 0, 0, 0.25);
  padding: 0.5rem;
  font-family: Tahoma, sans-serif;
  background: transparent;
  margin-bottom: 1rem;
  width: 100%;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0;
  text-decoration: none;
  background: #666ba5;
  border: 1px solid
    rgb(0, 0, 0, 0.25);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms
      ease-in-out,
    transform 150ms ease;
  margin-right: 1rem;
  min-width: 5rem;

  ${p =>
    p.secondary &&
    css`
      background: #666;
    `}

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &:focus {
    outline: 1px solid #fff;
  }

  &:active {
    transform: scale(0.99);
  }
`
