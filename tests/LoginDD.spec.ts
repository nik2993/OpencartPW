import{test,expect} from "@playwright/test"
//import { logout } from "../POM/logout"
import { Myaccountpage } from "../POM/Myaccountpage"
import { Login } from "../POM/Login"
import { TestConfig } from "../test.config"
import { Homepage } from "../POM/Homepage"
import { dataprovider } from "../Utils/dataprovider"


let jsonpath='Testdata/logindata.json'
let jsontestdata=dataprovider.getDataFromJson(jsonpath)


for(let data of jsontestdata){
test(`verify the user login for ${data.testName} @sanity`,async({page})=>{

let testConfig=new TestConfig()
let login=new Login(page)
let myaccountpage=new Myaccountpage(page)
let homepage=new Homepage(page)

await page.goto(testConfig.appUrl)
await homepage.clickMyAccount()
await homepage.clickLogin()
await login.useremail(data.email)
await login.userpassword(data.password)
await login.loginbtn()

if(data.expected==='success'){
await myaccountpage.Myaccountexists()
await homepage.clickMyAccount()
await myaccountpage.clicklogout()
}
else{
    let errormsg=await login.errormessage()
    expect(errormsg).toContain('No match')
}



})
}
