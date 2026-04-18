import fs from 'fs'
import {parse} from 'csv-parse/sync'
import { tr } from '@faker-js/faker'


export class dataprovider{

    static getDataFromJson(filepath:string)
    {

        let data:any=JSON.parse(fs.readFileSync(filepath,'utf8'))
        return data
    }

    static getDataFromCsv(filepath:string){
        let data:any=parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true})
        return data
    }
} 