import React from 'react'
import styled from 'styled-components'
import stringSimilarity from 'string-similarity'

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

const cleanWord = word =>
  word
    .trim()
    .toLocaleLowerCase()
    .replace(/[^a-z]/gi, '')

export default function Teleprompter({
  words,
  progress,
  listening,
  onChange
}) {
  const recog = React.useRef(null)
  const scrollRef = React.useRef(
    null
  )
  const [
    results,
    setResults
  ] = React.useState('')

  React.useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition
    recog.current = new SpeechRecognition()
    recog.current.continuous = true
    recog.current.interimResults = true
  }, [])

  React.useEffect(() => {
    if (listening) {
      recog.current.start()
    } else {
      recog.current.stop()
    }
  }, [listening])

  React.useEffect(() => {
    const handleResult = ({
      results
    }) => {
      const interim = Array.from(
        results
      )
        .filter(r => !r.isFinal)
        .map(r => r[0].transcript)
        .join(' ')
      setResults(interim)

      const newIndex = interim
        .split(' ')
        .reduce((memo, word) => {
          if (
            memo >= words.length
          ) {
            return memo
          }
          const similarity = stringSimilarity.compareTwoStrings(
            cleanWord(word),
            cleanWord(words[memo])
          )
          memo +=
            similarity > 0.75
              ? 1
              : 0
          return memo
        }, progress)
      if (
        newIndex > progress &&
        newIndex <= words.length
      ) {
        onChange(newIndex)
      }
    }
    recog.current.addEventListener(
      'result',
      handleResult
    )
    return () => {
      recog.current.removeEventListener(
        'result',
        handleResult
      )
    }
  }, [onChange, progress, words])

  React.useEffect(() => {
    /* eslint-disable no-unused-expressions */
    scrollRef.current
      .querySelector(
        `[data-index='${
          progress + 3
        }']`
      )
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
  }, [progress])

  return (
    <React.Fragment>
      <StyledTeleprompter
        ref={scrollRef}
      >
        {words.map((word, i) => (
          <span
            key={`${word}:${i}`}
            data-index={i}
            style={{
              color:
                i < progress
                  ? '#ccc'
                  : '#000'
            }}
          >
            {word}{' '}
          </span>
        ))}
      </StyledTeleprompter>
      {results && (
        <Interim>
          {results}
        </Interim>
      )}
    </React.Fragment>
  )
}
