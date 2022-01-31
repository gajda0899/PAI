import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Piotr",
            email: "piotrbalcer@gmail.com",
            password: bcrypt.hashSync('password', 8),
            isAdmin: true
        },
        {
            name: "Tomek",
            email: "tomek@gmail.com",
            password: bcrypt.hashSync('password', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Product_1',
            category: 'Category',
            image: '/images/product_1.jpg',
            price: 99,
            countInStock: 10,
            brand: 'Brand',
            raiting: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Product_2',
            category: 'Category',
            image: '/images/product_2.jpg',
            price: 110,
            countInStock: 20,
            brand: 'Brand',
            raiting: 4.0,
            numReviews: 8,
            description: 'high quality product',
        },
        {
            name: 'Product_3',
            category: 'Category',
            image: '/images/product_3.jpg',
            price: 130,
            countInStock: 0,
            brand: 'Brand',
            raiting: 5.0,
            numReviews: 34,
            description: 'high quality product',
        },
        {
            name: 'Product_4',
            category: 'Category',
            image: '/images/product_4.jpg',
            price: 150,
            countInStock: 50,
            brand: 'Brand',
            raiting: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
        {
            name: 'Product_5',
            category: 'Category',
            image: '/images/product_5.jpg',
            price: 140,
            countInStock: 0,
            brand: 'Brand',
            raiting: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Product_6',
            category: 'Category',
            image: '/images/product_6.jpg',
            price: 160,
            countInStock: 15,
            brand: 'Brand',
            raiting: 5.0,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            name: 'Product_7',
            category: 'Category',
            image: '/images/product_7.jpg',
            price: 220,
            countInStock: 3,
            brand: 'Brand',
            raiting: 5.0,
            numReviews: 25,
            description: 'top quality product',
        },
    ]
}

export default data;