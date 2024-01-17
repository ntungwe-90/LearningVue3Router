<template>
    <div>
<h2>Job details page</h2>
<p>The job id is{{ id }}</p>

<p>The Job id is {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default{
    props:['id'],
    // data(){
    //     return {
    //         id:this.$route.params.id
    //     }
    // }
}
</script>

<style scoped>

</style>