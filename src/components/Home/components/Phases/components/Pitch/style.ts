'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`
export const Rail = styled.div<{ $totalSlides: number; $currentSlide: number }>`
  display: flex;
  width: ${({ $totalSlides }) => $totalSlides * 100}vw;
  transition: transform 0.5s ease;
  transform: translateX(-${({ $currentSlide }) => $currentSlide * 100}vw);
`

export const Slide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100vw;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`
