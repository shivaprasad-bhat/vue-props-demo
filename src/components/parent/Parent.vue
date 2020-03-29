<template>

    <div class="container">
        <div class="col-sm-12">
            <h1>This is the parent Component</h1>
            <h4><u>This renders child component and displays</u></h4>
        </div>
        <div class="col-sm-12">
            <div>
                <h3>Child 1's Name in parent component: {{childName}}</h3>
                <button @click="changeNameInParent">Switch</button>
                <hr>
                <hr>
            </div>
        </div>

        <div class="col-sm-6">
            <child1 :childName="childName" v-on:childNameChanged="childName = $event"></child1>
        </div>

        <div class="col-sm-6">
            <child2></child2>
        </div>

    </div>

</template>

<script>
    import Child1 from "../children/Child1.vue";
    import Child2 from "../children/Child2.vue";

    export default {
        data() {
            return {
                childName: 'Child A'
            }
        },
        components: {
            Child2,
            Child1
        },
        methods: {
            changeNameInParent() {
                this.childName = 'Changed-Child';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: skyblue;
        color: black;
        text-align: center;
    }

    div {
        margin-top: 0.5%;
    }
</style>