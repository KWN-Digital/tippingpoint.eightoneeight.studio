'use client'
import styled from 'styled-components'

export const ActorBio = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.5s ease;

  @media ${({ theme }) => theme.media?.lg} {
    position: absolute;
    bottom: -100%;
    left: 0;
    max-height: 100dvh;
    overflow-y: scroll;
  }

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
    @media ${({ theme }) => theme.media?.lg} {
      opacity: 0;
      transition: all 0.5s ease;
    }
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &.active {
    flex: 1 0 35%;
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
