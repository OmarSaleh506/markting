import { env } from "process"
import { makeRequest } from "src/core/data-access/http.service"
import { HttpMethods } from "src/core/enums/httpMethods.enum"


export const fetchData = () => {
    return makeRequest({
        url:'https://experimental.willow.vectara.io/v1/chat/completions',
        method: HttpMethods.POST,
        params: 
            {
                "Content-Type": "application/json",  
                "customer-id": "3395462520",
                "x-api-key": "zqt_ymKleI-dxJYkdCrdQk592Mjg8kD3UwVHS8ZWMw"
            },
            data: {
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": "كيفك"
                    }
                ]
            }
    })
}
// export const fetchData = (input:string) => {
//     return makeRequest({
//         url:'https://fakestoreapi.com/carts',
//         method: HttpMethods.GET,
//         data: JSON.stringify(
//             {
//                 userId:`${input}`,
//                 date:2020-2-3,
//                 products:[{productId:5,quantity:1},{productId:1,quantity:5}]
//             }
//         )
//     })
// }

//https://api.instantwebtools.net/v1/airlines

// {
//     "Content-Type" : "text/plain"
// },
// {
//     "Content-Length" : "<calculated when request is sent>"
// },
// {
//     "Host": "<calculated when request is sent>"
// },
// {
//     "User-Agent" : "PostmanRuntime/7.31.3"
// },
// {
//     "Accept": "*/*"
// },
// {
//     "Accept-Encoding": "gzip, deflate, br"
// },
// {
//     "Connection": "keep-alive"
// },