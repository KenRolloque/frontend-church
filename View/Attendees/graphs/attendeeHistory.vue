<template>
    <div class="card2">
        <div id="table_container" class="table_container">
            <h6 id="title">Total Attendance per Classification</h6>
            <DataTable paginator :rows="4" :rowsPerPageOptions="[5, 10, 20, 50]" :value="data" showGridlines
                :style="tableStyle">

                <Column field="month" header="Month"></Column>
                <Column field="service" header="Service"></Column>
                <Column field="attendance_total" header="Attendance Total"></Column>

            </DataTable>
        </div>
        <div id="doughnut_container">
            <h6 id="title">Line Graph</h6>
            <Chart id='lineGraph' type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
        </div>

    </div>
</template>

<style scoped>
.card2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3em;

}

#lineGraph {
    width: 100%;
    margin-top: 1em;
}

#table_container {
    width: 100%;
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.table_container :deep(.p-datatable-header-cell) {
    background-color: var(--blue2);
    color: white;
}

#title {
    font-family: Inter-Bold;
    color: var(--blue1);
    font-size: 14px;

}

#doughnut_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2em;


}
</style>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from 'axios';
import { AxiosInstance } from '../../../src/axios_instance'

var tableStyle = {
    fontSize: '13px',
}

const data = ref();
const chartData = ref();
const chartOptions = ref();
var x = null;

// watch(firstWeek, async (newvalue) => {
//     firstWeek.value = newvalue

// })

async function getRecord() {
    try {
        const response = await axios.get('api/attendance/get/total/latest')
        data.value = await response.data;
        chartData.value = setChartData(data.value);
        chartOptions.value = setChartOptions();
    } catch (error) {

    }

}

const setChartData = (dataValue) => {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        labels: [dataValue[0].month, dataValue[4].month, dataValue[8].month],
        datasets: [
            {
                label: data.value[0].service,
                data: [
                    dataValue[0].attendance_total,
                    dataValue[4].attendance_total,
                    dataValue[8].attendance_total,
                ],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                tension: 0.4
            },
            {
                label: data.value[1].service,
                data: [
                    dataValue[1].attendance_total,
                    dataValue[5].attendance_total,
                    dataValue[9].attendance_total,
                ],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                tension: 0.4
            }
            ,
            {
                label: data.value[2].service,
                data: [
                    dataValue[2].attendance_total,
                    dataValue[6].attendance_total,
                    dataValue[10].attendance_total,
                ],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-blue-500'),
                tension: 0.4
            }
            ,
            {
                label: data.value[3].service,
                data: [
                    dataValue[4].attendance_total,
                    dataValue[7].attendance_total,
                    dataValue[11].attendance_total,
                ],
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
onMounted(() => {
    getRecord();

});
</script>
