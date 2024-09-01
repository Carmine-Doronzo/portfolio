// components/BarChart.vue
<template>
    <div class="chart-container">
        <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: {
        Bar
    },
    props: {
        dataTech: { type: Array },
        countTech: { type: Array }
    },
    data() {
        return {
            chartData: {
                labels: this.dataTech,
                datasets: [
                    {
                        label: 'Tecnologie',
                        backgroundColor: [
                            '#f1e05a', 
                            '#41b883', 
                            '#e34c26', 
                            '#c6538c', 
                            '#ff6384', 
                            '#36a2eb', 
                            '#cc65fe', 
                            '#ffce56', 
                            '#4bc0c0', 
                            '#9966ff', 
                            '#ff9f40', 
                            '#ffcd56', 
                            '#c9cbcf', 
                            '#36a2eb', 
                            '#ff6384', 
                            '#4bc0c0', 
                            '#9966ff', 
                            '#ff9f40', 
                            '#ffcd56', 
                            '#c9cbcf'  
                        ],
                        data: this.countTech
                    }
                ]
            },
            chartOptions: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 300000
                    }
                }
            }
        };
    }
};
</script>

<style scoped>
.chart-container {
    position: relative;
    height: 40vh;
    min-width: 100%;
}
</style>
