<template>
    <hello-world></hello-world>
</template>

<script setup lang="ts">
import HelloWorld from './components/hello-world.vue';

import postMessage from './utilities/post-message';

import {
    onMounted
} from 'vue';

onMounted(() => {
    postMessage({
        event: 'hello-world',
    });
})
</script>
