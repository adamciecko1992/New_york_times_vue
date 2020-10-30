<template>
<div class="field">
  <label class="label">{{label}}</label>
  <div class="control">
    <input class="input" type="text" :placeholder="placeholder" @input="handleInput" v-model="phrase">
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            phrase:"",
        }
        
    },
    props:{
        label:String,
        model:String,
        placeholder:String,
    },
    methods:{
        handleInput(){
            this.$emit('typing', this.phrase)
        }
    }
}
</script>