let inputcpfTitular = document.getElementById('cpfTitular')
let inputcrm = document.getElementById('crm')

inputcpfTitular.addEventListener('keyup', (event) => {
    if (isNaN(inputcpfTitular.value)) {
        event.preventDefault();
        inputcpfTitular.value = inputcpfTitular.value.substring(0, (inputcpfTitular.value.length - 100))
    }

    if (inputcpfTitular.value.length >= 11) {
        inputcpfTitular.value = inputcpfTitular.value.substring(0, 11)
    }
})

inputcrm.addEventListener('keyup', (event)=> {
    if(isNaN(inputcrm.value)) {
        event.preventDefault();
        inputcrm.value = inputcrm.value.substring(0,(inputcrm.value.length -100))
    }
    if (inputcrm.value.length >=6) {
        inputcrm.value=inputcrm.value.substring(0,6)
    }
})