import { makeRequest, makeRequests } from "src/core/data-access/http.service"
import { HttpMethods } from "src/core/enums/httpMethods.enum"


export const fetchData = (input:string,input2:string) => {
    return makeRequest({
        url:'https://experimental.willow.vectara.io/v1/chat/completions',
        method: HttpMethods.POST,
            data: {
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": `انشئلي محتوى اعلاني عن شركة${input} ومحتواها ${input2}`
                    }
                ]
            }
    })
}

export const fetchImage = (input:string,input2:string) => {
    return makeRequests({
        url:'https://api.openai.com/v1/images/generations',
        method: HttpMethods.POST,
            data: {
                "prompt": `create instagram  post for ${input} sourdough ${input2}`,
                "n": 1,
                "size": "512x512"
            }
    })
}
