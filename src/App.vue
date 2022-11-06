<template>
  <div class="ma3 sans-serif">
    <div class="mt3 mb4">
      <summary-tag v-for="tag in selectedTags(tags, [])" :key="tag.name" :tagData="tag" @deselect-tag="deselectTag" />
    </div>
    <tag v-for="tag in tags" :key="tag.name" :tagData="tag" :level="1" @change-state="tagsUpdated" />
    <!--<div class="mt3">
      <span class="code">
        {{ JSON.stringify(tags, null, "\t") }}
      </span>
    </div>-->
  </div>
</template>

<script>
import Tag from "./components/Tag.vue"
import SummaryTag from "./components/SummaryTag.vue"
const tagTree = require("./assets/tags")

export default {
  name: 'App',
  data() {
    return {
      tags: tagTree
    }
  },
  computed: {
    
  },
  methods: {
    selectedTags(tags, output) {
      for(const tag of tags) {
        if(tag.state != 'off') {
          output.push(tag);
        }
        this.selectedTags(tag.children, output);
      }
      return output;
    },
    tagsUpdated(tag, newState) {
      tag.state = newState;
    },
    deselectTag(tag) {
      tag.state = 'off';
    }
  },
  components: {
    Tag,
    SummaryTag
  }
}
</script>

<style>

</style>
