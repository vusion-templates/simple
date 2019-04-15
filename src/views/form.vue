<template>
<u-form :class="$style.root" gap="large">
    <u-form-item label="计费方式" required>
        <u-radios v-model="model.chargeType">
            <u-radio label="0">包年包月</u-radio>
            <u-radio label="1">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="创建方式">
        <u-radios v-model="model.createType">
            <u-radio label="direct">直接创建</u-radio>
            <u-radio label="snapshot">从快照创建</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="名称" required>
        <u-input v-model="model.name" size="huge" maxlength="32" placeholder="1-32位小写字母、数字、或中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                chargeType: '1',
                availableZone: 'A',
                createType: 'direct',
                name: '',
                scope: '',
                ssdType: 'C_SSD',
            },
        };
    },
};
</script>

<style module>
.root {
    width: 1180px;
    margin: 0 auto;
    padding: 40px;
}
</style>

