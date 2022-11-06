<template>
    <div class="di">
        <div class="di pa2 ma1 br4 ba bw1 b pointer" :class="{
                'bg-white': tagData.state == 'off',
                'bg-light-green': tagData.state == 'include',
                'bg-light-red': tagData.state == 'exclude'
            }">
            <span @click="changeState">{{tagData.name}}</span>
            <span v-if="hasChildren" class="ml1 pa1 bg-light-gray br4 pointer" @click="toggleChildren">
                {{ showChildren ? '-' : '+' }}
            </span>
        </div>
        <div v-if="showChildren && hasChildren" class="pt3 pb3 mt3 mb3"
                :style="{ 'background-color': childrenBgColor }">
            <tag v-for="tag in tagData.children" :key="tag.name" :tagData="tag" :level="level + 1" @change-state="tagsUpdated" />
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tagData', 'level'],
    data() {
        return {
            states: [ 'off', 'include', 'exclude' ],
            showChildren: false
        }
    },
    computed: {
        hasChildren() {
            return this.tagData.children?.length > 0;
        },
        childrenBgColor() {
            let grayValue = 255 - (this.level * 34);
            return '#' + grayValue.toString(16) + grayValue.toString(16) + grayValue.toString(16);
        }
    },
    methods: {
        toggleChildren() {
            this.showChildren = !this.showChildren;
        },
        changeState() {
            const currentStateIndex = this.states.findIndex((element) => element == this.tagData.state);
            const nextStateIndex = (currentStateIndex + 1) % this.states.length;
            const nextState = this.states[nextStateIndex];
            this.$emit('change-state', this.tagData, nextState);
        },
        tagsUpdated(tag, newState) {
            this.$emit('change-state', tag, newState);
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  