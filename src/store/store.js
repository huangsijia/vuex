import  Vue  from "vue";
import  Vuex from "vuex";
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        productsStore: [
            { name: "AA", price: 10 },
            { name: "BB", price: 20 },
            { name: "CC", price: 30 },
            { name: "DD", price: 40 },
        ]
    },
    getters:{
        saleProductStore: (state) => {
            var val = state.productsStore.map(item => {
                return {
                    name: item.name + "**",
                    price: item.price / 2
                }
            })
            return val;
        }
    },
    mutations:{
        reducePriceStore: (state, payload)=>{
            state.productsStore.forEach(item =>{
                item.price -= payload;
            })
        }
    },
    actions:{
        reducePriceActions:(context,payload) =>{
            setTimeout(() => {
                context.commit("reducePriceStore", payload)
            }, 2000);
        }
    }
})