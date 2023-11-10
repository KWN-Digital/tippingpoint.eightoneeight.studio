'use client'
import styled from 'styled-components'

export const Container = styled.div`
  overflow: scroll;
  height: 100vh;
  width: 100vw;
  position: relative;
  img {
    height: 75vh;
    width: 100%;
    object-fit: cover;
  }
`
export const Content = styled.div`
  position: sticky;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
