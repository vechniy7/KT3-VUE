import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 1,
                image: "./public/image1.jpg",
                name: "Library Stool Chair",
                select: 'Yes',
                price: 20,
                oldPrice: null,
                badge: "New"
            },
            {
                id: 2,
                image: "./public/image2.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: 30,
                badge: "Sales"
            },
            {
                id: 3,
                image: "./public/image3.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: null,
                badge: null
            },
            {
                id: 4,
                image: "./public/image4.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: null,
                badge: null
            },
            {
                id: 5,
                image: "./public/image5.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: null,
                badge: "New"
            },
            {
                id: 6,
                image: "./public/image6.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: 30,
                badge: "Sales"
            },
            {
                id: 7,
                image: "./public/image7.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: null,
                badge: null
            },
            {
                id: 8,
                image: "./public/image8.jpg",
                name: "Library Stool Chair",
                select: null,
                price: 20,
                oldPrice: null,
                badge: null
            },
        ]
    },
    mutations: {
        ADD_PRODUCT(state, product) {
            state.products.push(product)
        },
        DELETE_PRODUCT(state, id) {
            state.products = state.products.filter(product => product.id !== id)
        }
    },
    actions: {
        addProduct({ commit }, productData) {
            commit('ADD_PRODUCT', {
                id: Date.now(),
                image: productData.image,
                name: productData.name,
                price: productData.price,
            })
        },
        deleteProduct({ commit }, productId) {
            commit('DELETE_PRODUCT', productId)
        }
    }
})