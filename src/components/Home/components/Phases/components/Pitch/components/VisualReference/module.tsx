import { IVisualReference } from './types'
import { Container, Content } from './style'
import Image from 'next/image'
export const VisualReference = ({ handleSlideChange }: IVisualReference) => {
  return (
    <Container>
      <Image
        src="https://ucarecdn.com/3275aa69-94b7-4f95-a2b5-e70197c73f9c/230114cunninghamhousepartycameohero_w33bnu.jpeg"
        width={3840}
        height={2033}
        alt=""
      />
      <Image
        src="https://ucarecdn.com/8252431f-a1e5-4983-af27-0125c35ef983/DuulPDKXQAAvQtm.jpeg"
        width={1777}
        height={747}
        alt=""
      />
      <Image
        src="https://ucarecdn.com/c41f0acc-7a48-4a2f-8e7d-8ed0b1a3c81b/d69b67f0d05c5a5da39bc40ddc8fa1f218insecure501issarae.webp"
        width={1920}
        height={1280}
        alt=""
      />
      <Image
        src="https://ucarecdn.com/4bb1fc85-62a1-4f05-99f1-229eac4a58ae/610bf267a1484d19ba7996a6d57ef1e6Rye_Lane.webp"
        width={590}
        height={590}
        alt=""
      />
      <Image
        src="https://ucarecdn.com/e8348d57-f50b-4dbf-8c69-1be608df60e7/images.jpeg"
        width={300}
        height={300}
        alt=""
      />
      <Content>
        <h3>Visual Reference</h3>
        <button onClick={handleSlideChange}>Continue</button>
      </Content>
    </Container>
  )
}
