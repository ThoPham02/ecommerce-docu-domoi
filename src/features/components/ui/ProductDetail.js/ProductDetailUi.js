import './ProductDetailUi.css';
import { useParams } from 'react-router-dom';

const ProductDetailUi = () => {

    const {productId} = useParams()

    return (
        <div className='row'>
            <h1> {productId} </h1>
        </div>
    )
}

export default ProductDetailUi;