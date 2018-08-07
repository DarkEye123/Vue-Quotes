<template>
<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card text-center mb-3">
        <div class="card-body quote">
            <slot></slot> 
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
    div {
        font-family: Arizonia;
        color: #6e6e6e;
    }
    .card-body {
        font-size: 24px;
    }
    .quote {
        cursor: pointer;
    }
    .quote:hover {
        background-color: #ffe2e2;
    }
</style>