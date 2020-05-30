import React from 'react'
import styled from 'styled-components'

const StyledTeleprompter = styled.div`
  font-size: 5.25rem;
  width: 100%;
  height: 200px;
  overflow: scroll;
  scroll-behavior: smooth;
  display: block;
  margin-bottom: 1rem;
`

const Interim = styled.div`
  background: rgb(0, 0, 0, 0.25);
  color: white;
  flex: 0 0 auto;
  padding: 0.5rem;
  border-radius: 1rem;
  display: inline-block;
`

export default function Teleprompter({
  words,
  progress,
  listening,
  onChange
}) {
  return (
    <React.Fragment>
      <StyledTeleprompter>
        {words.map((word, i) => (
          <span
            key={`${word}:${i}`}
          >
            {word}{' '}
          </span>
        ))}
      </StyledTeleprompter>
    </React.Fragment>
  )
}
