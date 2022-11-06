<template>
    <div class="di">
        <div class="di pa2 ma1 br4 ba bw1 b pointer" :class="{
                'bg-light-gray': tagData.state == 'off',
                'bg-light-green': tagData.state == 'include',
                'bg-light-red': tagData.state == 'exclude'
            }">
            <span @click="deselectTag">{{tagData.name}}</span>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tagData'],
    data() {
        return {

        }
    },
    methods: {
        deselectTag() {
            this.$emit('deselect-tag', this.tagData);
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  