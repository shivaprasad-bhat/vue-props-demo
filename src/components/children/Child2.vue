<template>

    <div>
        <h1>This text is from Child 2</h1>
        <h3>Child name {{childName}}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                childName: 'Child B'
            }
        }
    }
</script>

<style scoped>
    div {
        margin-left: 10px;
        background-color: yellowgreen;
        color: black;
        height: 300px;
    }
    h1 {
        padding-top: 10px;
    }
</style>