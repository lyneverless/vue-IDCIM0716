<template>
    <div class="rootClass">
        <div class="panel panel-left">楼层总体信息</div>
        <div class="panel panel-right">机房俯视图</div>
    </div>
</template>

<script>
    export default {
        name: "air_cdt"
    }
</script>

<style scoped>
    .rootClass {
        display: flex;
    }
    .panel {
        border: 1px solid red;
    }
</style>