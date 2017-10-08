<template>
  <div class="counter">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <p>{{number}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    props:["num"],
    data () {
      return {
        number:this.num
      }
    },
    methods:{
      increment() {
        this.number++;
         this.$emit('incre');
      },
      decrement() {
        this.number--;
        this.$emit('decre');
      }
    }
  }
</script>
