<template>
    <Toast position="top-center" />
    <ConfirmDialog></ConfirmDialog>
    <Button @click="confirm2()" :disabled="myMessage == 'yes'" id="delBttn" severity="secondary" icon="pi pi-trash"
        label="Delete" text aria-label="Filter" />
</template>

<style scoped>
#delBttn {
    font-size: 11px;
    margin-right: 5px;
}
</style>
<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { defineProps, ref, toRef } from 'vue'

const props = defineProps({
    myMessage: {
        type: String,
        default: () => ({})
    }
});
const myMessage = toRef(props, 'myMessage')


const confirm = useConfirm();
const toast = useToast();
const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Warning',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>
