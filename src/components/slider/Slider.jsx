import { useEffect, useState } from "react";

const Slider = ({data}) => {
    const [sliderButtons,] = useState(data.map(info => info.name));

    // useEffect(() => {
    //     const getButtonNames = data.map(info => info.name);
    //     setSliderButtons(getButtonNames);
    // }, [data]);

    return  <>
    {sliderButtons && sliderButtons.map((button, index) => <button key={index}>{button}</button>)}
    {data && data.map(info => {
        return <div key={info.name}>
            <div>
                {console.log(info.images, info.images)}
                <picture>
                    <source srcSet={info.images.webp} type="image/webp" />
                    <img srcSet={info.images.png} alt={info.name} />
                </picture>
            </div>
            <div>
                <h1>{info.name}</h1>
                <p>{info.description}</p>
                <div>
                    <hr />
                    <div>
                        <p>
                            AVG. DISTANCE
                        </p>
                        <p>
                            {info.distance}
                        </p>
                    </div>
                    <div>
                        <p>
                            EST. TRAVEL TIME
                        </p>
                        <p>
                            {info.travel}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    })}
    </>
}
export default Slider