// This file maps to the index route (/)
import { PropsWithChildren } from 'react'
import { Home } from '../components/Home'
const Page = ({ ...props }: PropsWithChildren) => <Home {...props} />
export default Page
