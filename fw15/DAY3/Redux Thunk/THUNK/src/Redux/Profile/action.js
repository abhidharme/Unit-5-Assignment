import axios from "axios";

export const GIT_DATA = "GIT_DATA" ;

 const gitData = (data)=>({
    type:GIT_DATA,
    payload: data
})

const gitUserdata = (search)=> (dispatch)=>{
    return axios({
        url: `https://api.github.com/users/${search}`,
        method: "GET"
    })
    .then((res)=>{
        dispatch(gitData(res.data))
    })

}

export default gitUserdata

