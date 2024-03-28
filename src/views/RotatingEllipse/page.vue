<script setup lang="ts">
  import { defineComponent } from 'vue';
  import Demo from './index.vue';
  import DemoPreview from '@/components/DemoPreview/index.vue';
  import { html } from './readme.md';

  defineComponent({
    components: {
      Demo,
      DemoPreview,
    }
  });
</script>

<template>
  <DemoPreview :content="html">
    <Demo />
  </DemoPreview>
</template>