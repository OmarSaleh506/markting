import { makeRequest } from "src/core/data-access/http.service"
import { HttpMethods } from "src/core/enums/httpMethods.enum"


export const fetchData = (input:string) => {
    return makeRequest({
        url:'https://experimental.willow.vectara.io/v1/chat/completions',
        method: HttpMethods.POST,
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
