import Nav from "../nav/Nav"
import Layout1 from '../layout/Layout1'
import Layout2 from '../layout/Layout2'
import { useEffect, useState } from "react"
import json from '../../data.json';
import background_home_desktop  from '../../assets/home/background_home_desktop.jpg'
import background_destination_desktop  from '../../assets/destination/background_destination_desktop.jpg'
import background_crew_desktop  from '../../assets/crew/background_crew_desktop.jpg'
import background_technology_desktop  from '../../assets/technology/background_technology_desktop.jpg'

const Page = ({ page, type }) => {
  // const [pageData, setPageData] = useState();
  const [pageBg, setPageBg] = useState();

  useEffect(() => {
    // const fetchedData = JSON.parse(JSON.stringify(json));
    // setPageData(fetchedData[page]);
    switch (page) {
      case 'home':
        setPageBg(background_home_desktop);
        break;
      case 'destinations':
        setPageBg(background_destination_desktop);
        break;
      case 'crew':
        setPageBg(background_crew_desktop);
        break;
      case 'technology':
        setPageBg(background_technology_desktop);
        break;
      default:
        setPageBg(background_home_desktop);
        break;
    }
  }, [page])

  return (
    <>
      <Nav />
      <section style={{backgroundImage: `url(${pageBg})`, height: '100vh'}}>
        {type === '1' && <Layout1 page={page} data={json} />}
        {type === '2' && <Layout2 page={page} data={json} />}
        <p>type: {type}</p>
      </section>
    </>
  )
}

export default Page
