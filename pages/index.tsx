import type { NextPage } from 'next'
import { CheckIcon } from '@chakra-ui/icons'
import ListMenu from '../components/ListMenu';

const Home: NextPage = () => {
  return (
    <div className="content">
      <ListMenu />
    </div>
  )
}

export default Home
