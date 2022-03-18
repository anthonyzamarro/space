// components
import Slider from '../slider/Slider';
// styles
import './Layout.scss';

const LayoutType = ({page, data, type}) => {
    return <section className={`layout layout-type--${type}`}>
        {page === 'home' ?
        <>
        
            <aside>
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h1>SPACE</h1>
                <p>
                    Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
                    of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                </p>
            </aside>
            <aside>
                <a href="/">Explore</a>
            </aside>
        </>
    :
    <>
        <Slider data={data[page]}/>
    </>
    }
    </section>
}

export default LayoutType