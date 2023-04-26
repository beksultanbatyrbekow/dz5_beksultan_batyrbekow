const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const convert = (element, input, input2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "date.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            if (element === som) {
                input.value = (element.value / response.usd).toFixed(2)
                input2.value=(element.value / response.euro).toFixed(2)
            } else if (element === usd){
                input.value = (element.value * response.usd).toFixed(2)
                input2.value = (element.value * response.usd / response.euro).toFixed(2)
            }
            else if (element === euro){
                input.value = (element.value / response.euro).toFixed(2)
                input2.value = (element.value * response.euro / response.usd).toFixed(2)
            }
            element.value === '' && (input.value = '')
            element.value === '' && (input2.value = '')
        })
    }
}

convert(som, usd, euro)
convert(usd, som, euro)
convert(euro,usd, som)