<template>
    <div class="mySetup card w-full ">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="myChart" />
    </div>
</template>
<style scoped>
.mySetup {
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
}

.myChart {
    width: 80%;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const x = [
    { label: 'Communications', value: 32 },
    { label: 'Prayer', value: 43 },
    { label: 'Technical and Stage Management', value: 24 },
    { label: 'Music', value: 19 },
    { label: 'Kids', value: 54 },
    { label: 'Admin', value: 22 },
    { label: 'Ushering & Security', value: 34 },
    { label: 'Creative Design', value: 14 },
]


x.sort((a, b) => b.value - a.value);
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: x.map(item => item.label),
        datasets: [
            {
                label: 'Record',
                data: x.map(item => item.value),
                backgroundColor: [
                    '#b30000',
                    '#7c1158',
                    '#4421af',
                    '#1a53ff',
                    '#0d88e6',
                    '#00b7c7',
                    '#5ad45a',
                    '#8be04e'

                ],
                barThickness: 70
                // borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                // borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>
