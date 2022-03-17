import Nav from "../nav/Nav"
import Layout1 from '../layout/Layout1'
import Layout2 from '../layout/Layout2'

const Page = ({ page, type }) => {
  return (
    <>
      <Nav />
      <main>
        {type === '1' && <Layout1 page={page} />}
        {type === '2' && <Layout2 page={page} />}
        <p>type: {type}</p>
      </main>
    </>
  )
}

export default Page
