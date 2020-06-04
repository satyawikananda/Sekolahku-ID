import { baseUrl } from "../const"
import axios from "axios"

export const sekolah: any = (kodeWilayah: string, bentuk: string) => {
    return new Promise( async (resolve: any, reject: any) => {
        await axios.get(`${ baseUrl }Csekolah/detailSekolahGET?mst_kode_wilayah=${kodeWilayah}&bentuk=${bentuk}`)
         .then((response: any):void => {
            if(response.status === 200){
                const result:any = response.data
                resolve(result)
            }else{
                type Message = {
                    code: number,
                    msg: string,
                }
                const error: Message = {
                    code: response.status,
                    msg: "Failed"
                }
                resolve(error)
            }
         })
         .catch((error: any):void =>{
            reject(error)
         })
    })
}