<template>
    <div class="card2">
        <Chart id='lineGraph' type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
</template>

<style scoped>
.card2 {
    width: 90%;
    display: flex;

}

#lineGraph {
    width: 100%;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
        datasets: [
            {
                label: '9 am Service',
                data: [65, 59, 80, 81],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                tension: 0.4
            },
            {
                label: '11 am Service',
                data: [28, 48, 40, 19],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                tension: 0.4
            }
            ,
            {
                label: '3pm Service',
                data: [38, 28, 30, 29],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-blue-500'),
                tension: 0.4
            }
            ,
            {
                label: '5pm Service',
                data: [19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-red-500'),
                tension: 0.4
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
        maintainAspectRatio: false,
        aspectRatio: 0.6,
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
