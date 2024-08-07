const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currencies = ['USD', 'EUR', 'GBP'];
const emit = defineEmits(['currencyChange']);
const handleCurrencyChange = (event) => {
    emit('currencyChange', event.target.value);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.handleCurrencyChange) }, });
    for (const [currency] of __VLS_getVForSourceType((__VLS_ctx.currencies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((currency)), value: ((currency)), });
        (currency);
        // @ts-ignore
        [handleCurrencyChange, currencies,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $emit: emit,
                currencies: currencies,
                handleCurrencyChange: handleCurrencyChange,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
});
;
