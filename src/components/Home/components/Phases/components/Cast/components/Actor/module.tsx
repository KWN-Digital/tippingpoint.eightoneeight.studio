'use client'
import { IActor } from './types'
import { Container, ActorImage, ActorBio } from './style'
import Image from 'next/image'
import { useState } from 'react'
import { truncate } from './utils'

export const Actor = ({ image, name, role, bio }: IActor) => {
  const [showBio, setShowBio] = useState(false)

  return (
    <Container onMouseLeave={() => setShowBio(false)}>
      <ActorImage>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={name}
        />
      </ActorImage>
      <ActorBio>
        <h3>{name}</h3>
        <h4>as {role}</h4>
        {bio && (
          <>
            <p>{showBio ? bio : truncate(bio, 30)}</p>
            <button onClick={() => setShowBio(!showBio)}>
              Show {showBio ? 'less' : 'more'}
            </button>
          </>
        )}
      </ActorBio>
    </Container>
  )
}
