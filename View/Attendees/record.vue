<template>
    <span id="statisticsTitle">
        <h6>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            All Service Record
        </h6>
    </span>
    <span id="data1">

        <!-- All -->
        <Card class="card">
            <template #title>
                <span class="cardTitle">
                    <h6>Overall Record</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>

            </template>
            <template #subtitle>
                <span class="subTitle">
                    June 30, 2024
                </span>
            </template>
            <template #content>
                <span id="totalCount">
                    <h6>Total Attendees</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount" class="countService">
                    <h6>9 am Service</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>11 am Service</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>3 pm Service</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>5 pm Service</h6>
                    <h6>Count</h6>
                </span>
            </template>
        </Card>

        <!-- 9am -->
        <Card class="card">
            <template #title>
                <span class="cardTitle">
                    <h6>9am service Record</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>

            </template>
            <template #subtitle>
                <span class="subTitle">
                    June 30, 2024
                </span>
            </template>
            <template #content>
                <span id="totalCount">
                    <h6>Total Attendees</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount" class="countService">
                    <h6>Adult</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids Church</h6>
                    <h6>Count</h6>
                </span>


            </template>
        </Card>

        <!-- 11am -->
        <Card class="card">
            <template #title>
                <span class="cardTitle">
                    <h6>11am service Record</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>

            </template>
            <template #subtitle>
                <span class="subTitle">
                    June 30, 2024
                </span>
            </template>
            <template #content>
                <span id="totalCount">
                    <h6>Total Attendees</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount" class="countService">
                    <h6>Adult</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids Church</h6>
                    <h6>Count</h6>
                </span>


            </template>
        </Card>

        <!-- 3pm -->
        <Card class="card">
            <template #title>
                <span class="cardTitle">
                    <h6>3pm service Record</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>

            </template>
            <template #subtitle>
                <span class="subTitle">
                    June 30, 2024
                </span>
            </template>
            <template #content>
                <span id="totalCount">
                    <h6>Total Attendees</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount" class="countService">
                    <h6>Adult</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids Church</h6>
                    <h6>Count</h6>
                </span>


            </template>
        </Card>

        <!-- 5pm -->
        <Card class="card">
            <template #title>
                <span class="cardTitle">
                    <h6>5pm service Record</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>

            </template>
            <template #subtitle>
                <span class="subTitle">
                    June 30, 2024
                </span>
            </template>
            <template #content>
                <span id="totalCount">
                    <h6>Total Attendees</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount" class="countService">
                    <h6>Adult</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids</h6>
                    <h6>Count</h6>
                </span>

                <span id="totalCount">
                    <h6>Kids Church</h6>
                    <h6>Count</h6>
                </span>


            </template>
        </Card>

        <!-- Youth Service -->
        <Card class="card">
            <template #title>
                <span class="cardTitle">
                    <h6>Youth service Record</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                </span>

            </template>
            <template #subtitle>
                <span class="subTitle">
                    June 30, 2024
                </span>
            </template>
            <template #content>
                <span id="totalCount">
                    <h6>Total Attendees</h6>
                    <h6>Count</h6>
                </span>
            </template>
        </Card>
    </span>
</template>

<style scoped>
/* Cards */
#statisticsTitle {

    font-family: Inter-SemiBold;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: 100%;
    background-color: white;
    padding: 0 1.5em;
    margin: 1em 0 1em 0;

}

#statisticsTitle>h6 {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 1em;
    padding: .5em 1em;
    background-color: var(--gray1);
    color: var(--gray3);
}




#data1 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;

}

#data1>* {
    width: 30%;
}

.card {
    padding: .3em;
}

.cardTitle {
    display: flex;
    color: var(--blue2);
    font-family: Inter-SemiBold;
}

.cardTitle>svg {
    color: var(--green1);
    width: 1.2em;
}



#totalCount {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1em;
    font-size: 13px;
}

#totalCount> :first-child {
    width: 40%;
}

#statisticsTitle>svg {
    width: 2em;
}
</style>