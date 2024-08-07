<script setup>
import { ref, computed } from 'vue';
import jobsData from '@/jobs.json';
import CurrencySelector from '@/components/CurrencySelector.vue';

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
</script>

<template>
  <div>
    <CurrencySelector @currencyChange="setCurrency" />
    <div>
      <input type="text" v-model="searchTitle" placeholder="Search by title" />
      <input type="number" v-model.number="minSalary" placeholder="Min salary" />
      <input type="number" v-model.number="maxSalary" placeholder="Max salary" />
    </div>
    <div>
      <label for="sort">Sort by salary:</label>
      <select v-model="sortOrder">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
    <ul>
      <li v-for="job in sortedJobs" :key="job.id">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
        <p>Salary: {{ convertSalary(job.salary, job.currency) }} {{ selectedCurrency }}</p>
        <button @click="hideJob(job.id)">Hide</button>
      </li>
    </ul>
  </div>
</template>
