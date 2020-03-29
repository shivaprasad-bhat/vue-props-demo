<template>
    <div>
        <h1>This text is from Child 1</h1>
        <h3>Child Name: {{childName}}</h3>
        <button @click="changeChildName">Change Child Name</button>
        <br><br>
    </div>
</template>

<script>
    export default {
        props: {
            childName: {
                type: String,
            }
        },
        methods: {
            changeChildName() {
                this.childName = "Child A";
                this.$emit("childNameChanged", this.childName);
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 10px;
        background-color: burlywood;
        color: black;
        height: 300px;
    }
    h1 {
        padding-top: 10px;
    }

</style>