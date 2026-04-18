import{test,expect,Locator} from "@playwright/test"

import { Homepage } from "../POM/Homepage"
import { Register } from "../POM/Register"
import { TestConfig } from "../test.config"
import { randomDataGenerator } from "../Utils/randomDataGenerator"
import { afterEach } from "node:test"

let homepage:Homepage
let register:Register

test.beforeEach(async({page})=>{

   let testConfig= new TestConfig()
   await page.goto(testConfig.appUrl) 

   homepage=new Homepage(page)
   register=new Register(page)
})

   test.afterEach(async({page})=>{
    await page.close()
     })

test("verify the user registration",async({page})=>{

    
   await homepage.clickMyAccount()
   await homepage.clickRegister()

   
   await register.setFirstName(randomDataGenerator.getfirstname())
   await register.setLastName(randomDataGenerator.getlastname())
   await register.setEmail(randomDataGenerator.getemail())
   await register.setTelephone(randomDataGenerator.getPhoneNumber())
   let password=randomDataGenerator.getPassword()
   await register.setPassword(password)
   await register.setConfirmPassword(password)
   await register.setPrivacyPolicy()
   await register.clickContinue()
   expect(await register.getConfirmationMsg()).toContain('Your Account Has Been Created!')

  await page.waitForTimeout(4000)

})