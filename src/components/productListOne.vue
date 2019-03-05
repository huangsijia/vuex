<template>
    <div id="productListOne">
        productListOne
        <ul>
            <li v-for="item in saleProductFun">
                {{item.name}}:{{item.price}}
            </li>
        </ul>
        <button @click="reducePriceFun(2)">减一</button>
    </div>
</template>

<script>
    export default {
        computed: {
            productFun() {
                return this.$store.getters.saleProductStore
            },
            saleProductFun(){
                return this.$store.getters.saleProductStore
            }
        },
        data() {
            return {
            }
        },
        methods:{
            reducePriceFun(amount){
                this.$store.commit("reducePriceStore",amount)
                // this.$store.dispatch("reducePriceActions",amount)
            }
        }
    }
</script>

<style>

</style>
