
fetch("https://api.covid19api.com/summary", {
    "method": "GET",
    body: JSON.stringify(),
})
    .then(res => res.json())
    .then(data => {
        const global = data.Global;
        const totalConfirmed = global.TotalConfirmed;
        const totalDeaths = global.TotalDeaths;
        const totalRecovered = global.TotalRecovered;

        const newConfirmed = global.NewConfirmed;
        const newDeaths = global.NewDeaths;
        const newRecovered = global.NewRecovered;

        document.getElementById("new-confirmed").innerText = newConfirmed;
        document.getElementById("new-deaths").innerText = newDeaths;
        document.getElementById("new-recovered").innerText = newRecovered;

        document.getElementById("total-confirmed").innerText = totalConfirmed;
        document.getElementById("total-deaths").innerText = totalDeaths;
        document.getElementById("total-recovered").innerText = totalRecovered;

        console.log(data);
        console.log(global);
        // console.log(newConfirmed);
    })

    .catch(err => {
        console.error(err);
    });

    