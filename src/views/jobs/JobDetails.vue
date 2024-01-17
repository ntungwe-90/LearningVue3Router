<template>
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>The job id is{{ id }}</p>
        <p>{{ job.details }}</p>

        <!-- <p>The Job id is {{ $route.params.id }}</p> -->
    </div>
    <div v-else>
        <p>loading job details .............</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message))
    }
    // data(){
    //     return {
    //         id:this.$route.params.id
    //     }
    // }
}
</script>

<style scoped></style>