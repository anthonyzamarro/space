import Nav from "../nav/Nav"
import Layout1 from '../layout/Layout1'
import Layout2 from '../layout/Layout2'
import { useEffect } from "react"
import json from '../../data.json';

const Page = ({ page, type }) => {

  useEffect(() => {
    const fetchedData = JSON.parse(JSON.stringify(json));
    console.log(fetchedData);
  })
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
