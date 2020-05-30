import React from 'react'
import styled from 'styled-components'

const StyledTeleprompter = styled.div`
  font-size: 5.25rem;
  width: 100%;
  height: 24rem;
  overflow: scroll;
  scroll-behavior: smooth;
  display: block;
  margin-bottom: 1rem;
  background: transparent no-repeat;
  background-image: radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
  background-position: 0 0, 0 100%;
  background-size: 100% 14px;
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
