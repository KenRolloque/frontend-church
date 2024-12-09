import Swal from 'sweetalert2/dist/sweetalert2.js'

function success() {
    Swal.fire({

        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: true,
        timer: 1500
    });
}

function errorAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        // footer: 'Please check your data first'
    });
}

function edit() {
    Swal.fire({

        icon: "success",
        title: "Record has been updated",
        showConfirmButton: true,
        timer: 1500
    });
}

function noRecord() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No Record Found",
        // footer: 'Please check your data first'
    });
}

function alreadyExist() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Record Already Exist",
        // footer: 'Please check your data first'
    });
}



export {success, errorAlert, edit,noRecord,alreadyExist}