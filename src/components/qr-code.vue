<template>
    <div>
        <div>
            <qriously :value="code" :size="size" />
        </div>
        <div>
            <p>{{ code }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        code: String,
        size: Number
    }
}
</script>
