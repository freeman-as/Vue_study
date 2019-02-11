import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 例示用に非同期処理を行う関数
function getCountNum(type) {
    return new Promise(resolve => {
        // 1秒後にtypeに応じたデータを返す
        setTimeout(() => {
            let amount
            switch (type) {
                case 'one':
                    amount = 1
                    break;
                case 'two':
                    amount = 2
                    break;
                case 'ten':
                    amount = 10
                    break;
                default:
                    amount = 0
            }
            resolve({amount})
        }, 1000)
    })
}

// ストア作成
const store = new Vuex.Store({
    // ステート
    state: {
        count: 10
    },

    // gettersオプションでゲッターを定義
    getters: {
        // ステートから別の値を計算
        squared: (state) => state.count * state.count,

        // 他のゲッターの値も使える
        cubed: (state, getters) => state.count * getters.squared
    },

    // mutationsオプションでミューテーションを定義
    mutations: {
        // 'increment'ミューテーションを定義
        increment(state, payload) {
            state.count += payload.amount
        }
    },

    // actionsオプションでアクションを定義する
    actions: {
        incrementAction(ctx, payload) {
            console.log(ctx)
            // 'increment'ミューテーションを実行
            ctx.commit('increment', payload)
        },
        incrementAsync({ commit }, payload) {
            return getCountNum(payload.type)
                .then(data => {
                    // レスポンスをログに表示
                    console.log(data)
                    // レスポンスをペイロードとして渡したミューテーションを実行する
                    commit('increment', {
                        amount: data.amount
                    })
                })


        }
    }
})

// ステートを参照
console.log(store.state.count)

// // store.commitでミューテーション呼び出し
// store.commit('increment', {amount: 5})
// // ステートの更新を確認
// console.log(store.state.count)
// // store.commitでミューテーション呼び出し
// store.commit('increment', {amount: 10})
// // ステートの更新を確認
// console.log(store.state.count)

// // store.gettersでゲッターを参照
// console.log(store.getters.squared)
// console.log(store.getters.cubed)

// // dispatchでアクション呼び出し
// store.dispatch('incrementAction', {amount: 100})

store.dispatch('incrementAsync', {type: 'one'})
    .then(() => {
        console.log(store.state.count)
    })