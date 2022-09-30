import { Link } from "react-router-dom";

const Home = () => {
    return (<>
        <section className='section'>
            <h2>home</h2>
            <Link to={'about'} className={'btn'}>about</Link>
        </section>
    </>);
};
export default Home;
