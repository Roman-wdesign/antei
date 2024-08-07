import { ref, computed } from 'vue';
import jobsData from '@/jobs.json';
import CurrencySelector from '@/components/CurrencySelector.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Загружаем данные из JSON-файла
const jobs = ref([...jobsData]);
// Переменные для фильтрации и сортировки
const searchTitle = ref('');
const minSalary = ref(0);
const maxSalary = ref(Infinity);
const selectedCurrency = ref('USD');
const sortOrder = ref('asc');
// Функция для установки выбранной валюты
const setCurrency = (currency) => {
    selectedCurrency.value = currency;
};
// Функция для конвертации зарплаты в выбранную валюту
const convertSalary = (salary, currency) => {
    const rates = {
        USD: 1,
        EUR: 1.2,
        GBP: 1.4
    };
    return (salary * rates[selectedCurrency.value] / rates[currency]).toFixed(2);
};
// Фильтрация вакансий по названию и зарплате
const filteredJobs = computed(() => {
    return jobs.value.filter((job) => {
        const matchesTitle = job.title.toLowerCase().includes(searchTitle.value.toLowerCase());
        const matchesSalary = job.salary >= minSalary.value && job.salary <= maxSalary.value;
        return matchesTitle && matchesSalary;
    });
});
// Сортировка вакансий по зарплате
const sortedJobs = computed(() => {
    return filteredJobs.value.slice().sort((a, b) => {
        const salaryA = parseFloat(convertSalary(a.salary, a.currency));
        const salaryB = parseFloat(convertSalary(b.salary, b.currency));
        return sortOrder.value === 'asc' ? salaryA - salaryB : salaryB - salaryA;
    });
});
// Функция для скрытия вакансии
const hideJob = (id) => {
    const jobIndex = jobs.value.findIndex((job) => job.id === id);
    if (jobIndex !== -1) {
        jobs.value.splice(jobIndex, 1);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [CurrencySelector,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(CurrencySelector, new CurrencySelector({ ...{ 'onCurrencyChange': {} }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onCurrencyChange': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ 'onCurrencyChange': {} }, }));
    let __VLS_5;
    const __VLS_6 = {
        onCurrencyChange: (__VLS_ctx.setCurrency)
    };
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(CurrencySelector, __VLS_1));
    let __VLS_2;
    let __VLS_3;
    // @ts-ignore
    [setCurrency,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.searchTitle)), placeholder: ("Search by title"), });
    // @ts-ignore
    [searchTitle,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), placeholder: ("Min salary"), });
    (__VLS_ctx.minSalary);
    // @ts-ignore
    [minSalary,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), placeholder: ("Max salary"), });
    (__VLS_ctx.maxSalary);
    // @ts-ignore
    [maxSalary,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("sort"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.sortOrder)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("asc"), });
    // @ts-ignore
    [sortOrder,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("desc"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [job] of __VLS_getVForSourceType((__VLS_ctx.sortedJobs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((job.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (job.title);
        // @ts-ignore
        [sortedJobs,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (job.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.convertSalary(job.salary, job.currency));
        (__VLS_ctx.selectedCurrency);
        // @ts-ignore
        [convertSalary, selectedCurrency,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.hideJob(job.id);
                    // @ts-ignore
                    [hideJob,];
                } }, });
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
                CurrencySelector: CurrencySelector,
                searchTitle: searchTitle,
                minSalary: minSalary,
                maxSalary: maxSalary,
                selectedCurrency: selectedCurrency,
                sortOrder: sortOrder,
                setCurrency: setCurrency,
                convertSalary: convertSalary,
                sortedJobs: sortedJobs,
                hideJob: hideJob,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
