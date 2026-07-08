import path from "path"
import fs from "fs"
import {parse} from "csv-parse/sync";
export interface registerUser{
    fname:string;
    lname:string;
    email:string;
    password:string;
    confirmpassword:string;
}
export function readRegisterData():registerUser[]{
    const filepath = path.join(process.cwd(), "testdata", "register.csv");
    const fileContent=fs.readFileSync(filepath,"utf-8");
    return parse(fileContent,{
    columns:true,
    skip_empty_lines:true,
    trim:true
   })as registerUser[];
}
