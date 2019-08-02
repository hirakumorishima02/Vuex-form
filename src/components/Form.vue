<template>
  <div>
    formのページ
    <HeadComp />
    <component :is='isComponent' />
    <button @click='buttonAction'>{{button}}</button>
  </div>
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp' 
import StringComp from '@/components/modules/TextareaComp' 
import {mapActions, mapGetters} from 'vuex' 
export default {
  name: 'Form',                //名前空間
  methods: mapActions('Form', {
    //actionsのbuttonActionを使用する
    'buttonAction' : 'buttonAction'
  }),                   //名前空間
  computed: mapGetters('Form', {
    'button': 'getButton',
    'isComponent' : 'getComponent'
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
