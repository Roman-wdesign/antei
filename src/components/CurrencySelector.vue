<script setup>
const currencies = ['USD', 'EUR', 'GBP'];

const emit = defineEmits(['currencyChange']);

const handleCurrencyChange = (event) => {
    emit('currencyChange', event.target.value);
};
</script>

<template>
    <select @change="handleCurrencyChange">
        <option v-for="currency in currencies" :key="currency" :value="currency">
            {{ currency }}
        </option>
    </select>
</template>
