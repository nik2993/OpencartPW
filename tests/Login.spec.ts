import{test,expect} from "@playwright/test"
//import { logout } from "../POM/logout"
import { Myaccountpage } from "../POM/Myaccountpage"
import { Login } from "../POM/Login"
import { TestConfig } from "../test.config"
import { Homepage } from "../POM/Homepage"
let testConfig:TestConfig
let login:Login
let myaccountpage:Myaccountpage
let homepage:Homepage

test.beforeEach(async({page})=>{

testConfig=new TestConfig()
login=new Login(page)
myaccountpage=new Myaccountpage(page)
homepage=new Homepage(page)
await page.goto(testConfig.appUrl)
 
})

test.afterEach(async({page})=>{

    await page.close()
})


test("verify the user login",async({page})=>{


await homepage.clickMyAccount()
await homepage.clickLogin()
await login.useremail(testConfig.email)
await login.userpassword(testConfig.password)
await login.loginbtn()

await myaccountpage.Myaccountexists()
await homepage.clickMyAccount()
await myaccountpage.clicklogout()

})
