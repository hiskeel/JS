const urlApi = "https://swapi.dev/api/people"

function dataToHtml(data){

}

const getSwapiData = () => {
    const request = new XMLHttpRequest();
    request.open("GET", urlApi);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            console.log("status ", request.status);
            console.log("data loaded");

            const responce = request.response;
            console.log(responce)
            dataToHtml(data.results)
        } 
        else{
            console.log("Not ok");
        }
    }
    request.send()

}

