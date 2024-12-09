<template>
    <div class="card" v-if="data != undefined">
        <Message>Attendance Record during {{ data[0].attendance_date }}</Message>
        <Chart id='chart' type="bar" :data="chartData" :options="chartOptions" class="h-[30rem] w-full" />
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;
}

.card>h6 {

    font-family: Inter-Bold;
    color: var(--blue1);
    font-size: 16px;
}
</style>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getAttendance } from '../../../src/state/attendance'

var attendance = getAttendance();
var props = defineProps({
    records: Object
})
var data = ref();

watch(props, (newvalue) => {
    data.value = props.records['Services']
    chartData.value = setChartData(data.value);
    chartOptions.value = setChartOptions();
})

onMounted(() => {

});

const chartData = ref();
const chartOptions = ref();

const setChartData = (dataValue) => {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        labels: [
            'Adults',
            'Kids',
            'Toddlers',
            'Foreigners',
        ],
        datasets: [
            {
                label: dataValue[0].service,
                backgroundColor: '#0d88e6',
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                data: [
                    dataValue[0].attendance_adults,
                    dataValue[0].attendance_kids,
                    dataValue[0].attendance_toddlers,
                    dataValue[0].attendance_foreigner,

                ]
            },
            {
                label: dataValue[1].service,
                backgroundColor: '#5ad45a',
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                data: [
                    dataValue[1].attendance_adults,
                    dataValue[1].attendance_kids,
                    dataValue[1].attendance_toddlers,
                    dataValue[1].attendance_foreigner,
                ]
            },
            {
                label: dataValue[2].service,
                backgroundColor: '#8be04e',
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                data: [
                    dataValue[2].attendance_adults,
                    dataValue[2].attendance_kids,
                    dataValue[2].attendance_toddlers,
                    dataValue[2].attendance_foreigner,

                ]
            }
            ,
            {
                label: dataValue[3].service,
                backgroundColor: '#ebdc78',
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                data: [
                    dataValue[3].attendance_adults,
                    dataValue[3].attendance_kids,
                    dataValue[3].attendance_toddlers,
                    dataValue[3].attendance_foreigner,
                ]
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
        aspectRatio: 0.8,
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
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
</script>
