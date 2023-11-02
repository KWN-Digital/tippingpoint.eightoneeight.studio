'use client'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    height: 140%;
    position: relative;
    margin-top: -20%;
    will-change: transform;
    transition: all 0.15s linear;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`
