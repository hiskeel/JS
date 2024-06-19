
const searchFilms = () =>{
    const title = document.getElementById("titleSearchInput").value
    const type = document.getElementById("typeSearchInput").value
    const key = "1cb05b57"
    const urlApi = `https://www.omdbapi.com/?apikey=${key}&s=${title}&type=${type}`
    const request = new XMLHttpRequest();
    request.open("GET", urlApi);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            console.log("status ", request.status);
            const responce = request.response;
            const data = JSON.parse(responce)
            console.log(data);
            data.Serch

            
        }
        
        }
        
        request.send()

}