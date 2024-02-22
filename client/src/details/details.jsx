import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import SliderComponent from "../slider/slider";
import { useParams, useNavigate } from 'react-router-dom';
import './details.css';

export const Details = () => {
    const { addToCart, cartItems, selectedColor, setSelectedColor } = useContext(ShopContext);
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);

    const { id: productId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(response => response.json())
            .then((data) => {
                setProduct(data);
                setSelectedColor(data.colors[0].colorName); // Установка первого доступного цвета по умолчанию
            })
            .catch(error => console.error('Error:', error));
    }, [productId, setSelectedColor]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        const colorObj = product.colors.find((color) => color.colorName === selectedColor);
        const firstImage = colorObj ? colorObj.caruselImages[0] : product.colors[0]?.caruselImages[0] || "";
        addToCart(productId, product.productName, product.price, selectedColor || "", firstImage, count);
    };

    return (
        <div className='product-details'>
            <div className='product-details-content'>

                <div className='product-details-image'>
                    <SliderComponent
                        images={product.colors.find(color => color.colorName === selectedColor)?.caruselImages || product.colors[0].caruselImages}
                        name={product.productName}
                    />
                </div>

                <div className='product-details-description'>

                    <div class="product-name">{product.productName}</div>
                    <div class="product-price">Price: $ {product.price}</div>
                    <div class="product-description">{product.description}</div>

                    <div className='color-options'>
                        {product.colors.map((color, index) => (
                            color.colorName.length > 1 && (
                                <div className={`color-option ${selectedColor === color.colorName ? "selected" : ""}`}
                                    key={index}
                                    style={{ backgroundColor: color.colorName }}
                                    onClick={() => setSelectedColor(color.colorName)}
                                ></div>
                            )
                        ))}
                    </div>

                    <div class="button-container">
                        <button className='add-to-cart-button' onClick={handleAddToCart}>
                            Add to Cart {cartItems[productId] > 0 && <>({cartItems[productId]})</>}
                        </button>
                        <button className='close-button' onClick={() => navigate('/')}>Continue Shopping</button>
                    </div>
                </div>
            </div>

            <div className='characteristics'>
                <h2>Main characteristics</h2>

                {product.characteristics.map((group, index) => (
                    <div key={index}>
                        <h3>{group.group}</h3>
                        {group.items.map((item, itemIndex) => (
                            <div className="characteristic" key={itemIndex}>
                                <div className="label"><strong>{item.title}:</strong></div>
                                <div className="value">
                                    {item.values.map((value, valueIndex) => (
                                        <div className="list-values" key={valueIndex}>{value}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
