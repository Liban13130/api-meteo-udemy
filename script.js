let ville = "Bordeaux"
recevoirTemperature(ville)

let button = document.querySelector("#changer")
button.addEventListener("click", () => {
    ville = prompt("Quelle ville souhaitez-vous voir ?")
    recevoirTemperature(ville)
})

function recevoirTemperature(ville)
{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=3211cb03972f19d2091dcf5de7c6dc72&units=metric`
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.send();

    request.onload = function()
    {
    if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                let response = request.response
                console.log(response);
                let tempVille = response.main.temp
                let ville = response.name
                document.querySelector("#temperature_label").textContent = tempVille
                document.querySelector("#ville").textContent = ville
            }
            else
            {
                alert("Une erreur est survenue. Veuillez réessayer plus tard.")
            }
        }
    }
}
