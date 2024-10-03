<template>
    <div class="chart-container">
        <Pie :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
    name: 'PieChart',
    components: {
        Pie
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
                responsive: true,
                maintainAspectRatio: false,
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
