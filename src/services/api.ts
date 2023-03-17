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
                        "content": "Hello!"
                    }
                ]
            }
    })
}
