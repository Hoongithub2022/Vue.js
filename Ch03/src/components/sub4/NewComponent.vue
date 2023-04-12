<template>
    <h4>NewComponent</h4>
    <p>
        카운터 : {{ count }} <button @click="btnCountUp">증가</button>
    </p>
</template>
<script>
export default {
    name: "NewComponent",
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        btnCountUp() {
            this.count++;
        },
    },
    // 컴포넌트 라이프사이클 함수(Hook)
    beforeCreate() {
        console.log('beforeCreate...')
    },
    created() {
        console.log('beforeCreated...')
    },
    beforeMount() {
        console.log('beforeMount...')
    },
    mounted() {
        console.log('beforeMounted...')
    },
    beforeUpdate() {
        console.log('beforeUpdate...')
    },
    updated() {
        console.log('beforeUpdated...')
    },
    beforeUnmount() {
        console.log('beforeUnmount...')
    },
    unmounted() {
        console.log('beforeUnmounted...')
    },
}
</script>
<style scoped></style>