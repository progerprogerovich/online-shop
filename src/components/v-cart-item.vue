<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item-info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }} ₽</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Количество:</p>
                <div class="quantity__wrapper">
                    <span class="quantity__btn" @click="decrementItem">-</span>
                        <span>
                            {{ cart_item_data.quantity }}
                        </span>
                <span class="quantity__btn" @click="incrementItem">+</span>
                </div>
        </div>
        <button @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';


    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {
            
        },
        methods: { 
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        setup() {
            const quantity = ref(1)

            onMounted(() => {
                quantity.value = 1;
            });

            return {
                quantity
            };
        }
    }
</script>

<style lang="scss">
    .v-cart-item{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &__image {
            max-width: 50px;
        }
    }

    .quantity__btn {
        cursor: pointer;
    }
    .quantity__wrapper {
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
    }
</style>