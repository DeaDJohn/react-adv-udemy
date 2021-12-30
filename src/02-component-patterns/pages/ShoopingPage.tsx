import {ProductCard, ProductButtons,  ProductImage, ProductTitle } from "../components"

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

            <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title  />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle title={'titl'} />
                <ProductButtons />
            </ProductCard>
        </div>
    </div>
)
