'use client'
import styled from 'styled-components'

export const ActorBio = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.5s ease;

  h3,
  h4 {
    margin: 0;
  }
`

export const Container = styled.div`
  overflow: hidden;
  flex: 1;
  transition: opacity 0.5s ease;
  transition: all 0.5s ease;
  position: relative;

  @media ${({ theme }) => theme.media?.lg} {
    opacity: 0.25;
  }

  ${ActorBio} {
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover {
    flex: 1 0 75%;
    opacity: 1;

    ${ActorBio} {
      opacity: 1;
      bottom: 0;
    }
  }
`

export const ActorImage = styled.div`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
