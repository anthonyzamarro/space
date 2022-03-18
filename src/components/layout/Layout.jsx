import './Layout.scss';

const LayoutType = ({page, data, type}) => {
    console.log(page, data[page]);
    return <section className={`layout layout-type--${type}`}>
        <aside>Left</aside>
        <aside>Right</aside>
    </section>
}

export default LayoutType