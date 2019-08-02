import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

//モジュールの細分化
const Form = {
    namespaced: true,
    state:{
        button: ['confirm','submit'],
        component:['TextareaComp','StringComp']
    },
    mutations:{},
    actions:{
        //https://vuex.vuejs.org/ja/api/#actions 引数についてはここに書かれている。
        buttonAction({commit, state, rootState}) {
            console.log('buttonAction')
            if(rootState.errorFlag) {
                // https://vuex.vuejs.org/ja/api/#commit  rootのmutationsであるsetStepCountにアクセスするための第三引数（root:true）
                commit('setStepCount', null, {root: true})
            }
        }
    },
    getters:{
        getButton(state,getters,rootState) {
            // stepCountでstateのbuttonのindexを指定
            return state.button[rootState.stepCount]
        },
        getComponent(state,gettes,rootState) {
            return state.component[rootState.stepCount]
        }
    }
}

const Head = {
    state:{
        title: ['感想を記入','確認画面','送信完了']
    },
    mutations:{},
    actions:{},
    getters: {
        // state = お約束、getters = store.gettersと同じ。モジュール内にあればローカルのゲッター、 rootState = モジュール内のstore.state
        getTitle (state, getters, rootState) {
            // titleのインデックスを取得
            return state.title[rootState.stepCount]
        }
    }
}

const Textarea = {
    namespaced: true,
    state:{
        errorMsg: '入力必須です。',
    },
    mutations:{},
    actions:{},
    getters: {
        getError(state, getters, rootState) {
            if(rootState.errorFlag) {
                return null
            }else {
                return state.errorMsg
            }
        }
    }
}

const String = {
    namespaced: true,
    state:{},
    mutations:{},
    actions:{},
    getters: {
        getString(state,getters,rootState){
            return rootState.impression
        }
    }
}
//モジュールをエクスポート
export default new Vuex.Store({
    state:{
      stepCount: 0,
      impression: '',
      errorFlag: false //trueの場合は、FormモジュールのbuttonActionが作動
    },
    mutations: {
        setStepCount(state) {
            console.log('rootsetStepCount')
            state.stepCount ++
        },
        // 第二引数はペイロード、つまりmutationsの中に渡せる引数
        updateImpression (state,value) {
            state.impression = value
            // もし文章が入力されていたら…
            if (state.impression) {
                state.errorFlag = true
            //　もし文章が入力されていなかったら…
            }else{
                state.errorFlag = false
            }
        }
    },
    modules:{
        Form,
        Head,
        Textarea,
        String
    }
})