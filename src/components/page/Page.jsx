import Nav from "../nav/Nav"
import Layout1 from '../layout/Layout1'
import Layout2 from '../layout/Layout2'

const Page = ({ page, type }) => {
  return (
    <section>
      <Nav />
      <h1>Generic Page</h1>
      <p>page: {page}</p>
      {type === '1' && <Layout1 />}
      {type === '2' && <Layout2 />}
      <p>type: {type}</p>
    </section>
  )
}

export default Page
