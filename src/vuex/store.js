import axios from 'axios';
import Vuex from 'vuex'


let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let cartItem = state.cart.find(item => item.article === product.article);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                state.cart.push({...product, quantity: 1});
            }
        },

        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
          return axios('http://localhost:8000/products', {
            method: "GET"
          })
            .then((response) => {
              commit('SET_PRODUCTS_TO_STATE', response.data);
              return response;
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        }
      },

      
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;