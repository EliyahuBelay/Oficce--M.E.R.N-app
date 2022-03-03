

const basic_url = process.env.NODE_ENV === "production" ?
"https://first-office-app-mern.herokuapp.com/":"http://localhost:8080/worker";


export const GetAllWorkers = async ()=>{
    return fetch(basic_url)
    .then((response)=> console.log(response))
    .catch((err)=> console.log(err))
}