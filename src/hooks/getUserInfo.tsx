import { UserInfo } from "../App"

export const getUserInfo = () =>{
    const user = localStorage.getItem('actualUser')
    const list = localStorage.getItem('usersList')
    const parsedList = JSON.parse(list?list:'')
    const getUser = () =>{
        return JSON.parse(user?user:'')
     }

    const getThisUser = (ID: string) =>{
        const thisUser = parsedList.find((element:UserInfo)=>(element.id==ID))
        return thisUser
    }

    return {getUser, getThisUser}
}