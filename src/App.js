import React, {
  Fragment
} from 'react'
import {
  GlobalStyles,
  StyledApp,
  StyledTeleprompter as Teleprompter,
  Controls,
  Buttons,
  Input,
  Button
} from './styles'

const INITIAL_TEXT = `This is a test to see how things work. This should scroll as you approach the next word. If all goes well you can talk and it will move along.`

export default function App() {
  const [
    listening,
    setListening
  ] = React.useState(false)
  const [
    words,
    setWords
  ] = React.useState(
    INITIAL_TEXT.split(' ')
  )
  const [
    progress,
    setProgress
  ] = React.useState(0)

  const handleInput = e => {
    setWords(
      e.target.value.split(' ')
    )
    progress && setProgress(0)
  }

  const handleListening = () => {
    if (listening) {
      setListening(false)
    } else {
      setProgress(0)
      setListening(true)
    }
  }

  const handleReset = () =>
    setProgress(0)

  const handleChange = progress =>
    setProgress(progress)

  return (
    <Fragment>
      <GlobalStyles />
      <StyledApp>
        <Controls>
          <Input
            onChange={handleInput}
            value={words.join(' ')}
          />
          <Buttons>
            <Button
              onClick={
                handleListening
              }
            >
              {listening
                ? 'Stop'
                : 'Start'}
            </Button>
            <Button
              onClick={handleReset}
              disabled={listening}
              secondary
            >
              Reset
            </Button>
          </Buttons>
        </Controls>
        <Teleprompter
          words={words}
          listening={listening}
          progress={progress}
          onChange={handleChange}
        />
      </StyledApp>
    </Fragment>
  )
}
