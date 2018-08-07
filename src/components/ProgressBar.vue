<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                    <!-- not sure about aria-* properties, it should be re-evaluated -->
                    <div class="progress-bar" role="progressbar" 
                    :style="{width: current / max  *100 + '%'}" aria-valuenow="current" aria-valuemin="0" aria-valuemax="max">{{ current }}/{{ max }}</div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['current', 'max']
}
</script>

<style>

</style>


