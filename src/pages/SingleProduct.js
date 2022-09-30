import {Link, useParams} from "react-router-dom";


const SingleProduct = () => {
    const {productId}= useParams();

    console.log (productId);


    // console.log (useParams());
  return (
    <section className='section product'>
        <h4>{productId}</h4>
        <Link to={'/products'}>back to products</Link>
    </section>
  );
};

export default SingleProduct;
