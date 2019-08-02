<template>
  <p>{{string}}</p>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'stringComp',
                      //名前空間　
  computed: mapGetters('String', {
    'string' : 'getString' 
  })
}
</script>

<style scoped>

</style>
