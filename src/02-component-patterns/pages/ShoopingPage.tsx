import {ProductCard, ProductButtons,  ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
    id:'1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
}

export const ShoopingPage = () => (
    <div>
        <h1>Shooping store</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>

            <ProductCard
                product={product}
                className="bg-dark text-white"
            >
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title  className="text-bold" />
                <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>

            <ProductCard
                product={product}
                className="bg-dark text-white"
            >
                <ProductImage className="custom-image"/>
                <ProductTitle
                    title={'Título'}
                    className="text-bold"
                />
                <ProductButtons
                    className="custom-buttons"
                />
            </ProductCard>
            <ProductCard
                product={product}
                style = {{
                    backgroundColor: '#70D1F8'
                }}
            >
                <ProductImage style = {{
                        padding: '0'
                    }}/>
                <ProductTitle />
                <ProductButtons
                    style = {{
                        justifyContent: 'end'
                    }}
                    />
            </ProductCard>
        </div>
    </div>
)
