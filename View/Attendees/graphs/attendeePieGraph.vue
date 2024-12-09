<template>
    <div id="container" class="card flex justify-center w-full">

        <div id="table_container" class="table_container">
            <h6 id="title">Total Attendance per Classification</h6>
            <DataTable :value="data" showGridlines :style="tableStyle">

                <Column field="total_adults" header="Adults Total Attendance"></Column>
                <Column field="total_kids" header="Kids Total Attendance"></Column>
                <Column field="total_toddlers" header="Toddlers Total Attendance"></Column>
                <Column field="total_foreigner" header="Foreigner Total Attendance"></Column>

            </DataTable>
        </div>

        <div id="doughnut_container">
            <Chart type="doughnut" :data="chartData" :options="chartOptions" style="width: 50%;" />
        </div>

    </div>
</template>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2em;
}

#table_container {

    display: flex;
    flex-direction: column;
    gap: 1em;
}

#doughnut_container {
    width: 100%;
    display: flex;
    justify-content: center;
}

#title {
    font-family: Inter-Bold;
    color: var(--blue2);
    font-size: 14px;

}


.table_container :deep(.p-datatable-header-cell) {
    background-color: var(--blue2);
    color: white;
}

/* .p-datatable-header-cell {
    background-color: red;
} */
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios'
import { AxiosInstance } from '../../../src/axios_instance'

var data = ref()
var tableStyle = {
    fontSize: '13px',

}
async function getData() {
    try {
        AxiosInstance();
        var response = await axios.get('/api/attendance/get/total/classification');
        data.value = await response.data;
        chartData.value = setChartData(data.value[0]);
        chartOptions.value = setChartOptions();
    } catch (error) {

    }
}
onMounted(() => {
    getData();

});

const chartData = ref();
const chartOptions = ref();

const setChartData = (dataValue) => {
    const documentStyle = getComputedStyle(document.body);
    console.log(dataValue)
    return {
        labels: ['Total Adults', 'Total Kids', 'Total Toddlers', 'Total Foreigner'],
        datasets: [
            {
                data: [
                    dataValue.total_adults,
                    dataValue.total_kids,
                    dataValue.total_toddlers,
                    dataValue.total_foreigner,
                ],
                backgroundColor: [
                    '#9b19f5',
                    '#0bb4ff',
                    '#50e991',
                    '#e6d800'

                ],
                hoverBackgroundColor: [
                    '#e60049',
                ]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    color: textColor,
                }
            }
        }
    };
};
</script>
