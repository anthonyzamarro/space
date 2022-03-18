import { useCallback, useEffect, useState } from "react"
// data
import json from '../../data.json';
// components
import Nav from "../nav/Nav"
import Layout from '../layout/Layout'
// import Layout2 from '../layout/Layout2'
// custom hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";
// import useWindowWidth from "../../hooks/useWindowWidth";

// images
import background_home_desktop  from '../../assets/home/background_home_desktop.jpg'
import background_destination_desktop  from '../../assets/destination/background_destination_desktop.jpg'
import background_crew_desktop  from '../../assets/crew/background_crew_desktop.jpg'
import background_technology_desktop  from '../../assets/technology/background_technology_desktop.jpg'
import background_home_tablet  from '../../assets/home/background_home_tablet.jpg'
import background_destination_tablet  from '../../assets/destination/background_destination_tablet.jpg'
import background_crew_tablet  from '../../assets/crew/background_crew_tablet.jpg'
import background_technology_tablet  from '../../assets/technology/background_technology_tablet.jpg'
import background_home_mobile  from '../../assets/home/background_home_mobile.jpg'
import background_destination_mobile  from '../../assets/destination/background_destination_mobile.jpg'
import background_crew_mobile  from '../../assets/crew/background_crew_mobile.jpg'
import background_technology_mobile  from '../../assets/technology/background_technology_mobile.jpg'


const Page = ({ page, type }) => {
  const [pageBgStyles, setPageBgStyles] = useState({height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat', backgroundColor: '#000'});
  const { width } = useWindowDimensions();

  useEffect(() => {
    const responsiveImages = (desktop, tablet, mobile) => {
      if (width > 375 && width < 768) {
        setPageBgStyles({...pageBgStyles, backgroundImage: `url(${tablet})`});
      } else if (width < 375) {
        setPageBgStyles({...pageBgStyles, backgroundImage: `url(${mobile})`});
      } else {
        setPageBgStyles({...pageBgStyles, backgroundImage: `url(${desktop})`});
      }
    }
    
    if (page === 'home') {
      responsiveImages(background_home_desktop, background_home_tablet, background_home_mobile);
    } else if (page === 'destinations') {
      responsiveImages(background_destination_desktop, background_destination_tablet, background_destination_mobile);
    } else if (page === 'crew') {
      responsiveImages(background_crew_desktop, background_crew_tablet, background_crew_mobile);
    } else if (page === 'technology') {
      responsiveImages(background_technology_desktop, background_technology_tablet, background_technology_mobile);
    }
  }, [page, width])
  
  
  return (
    <section style={pageBgStyles}>
      <Nav />
      <Layout page={page} data={json} type={type}/>
    </section>
  )
}

export default Page
