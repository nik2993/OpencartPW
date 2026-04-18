import{Page,Locator} from "@playwright/test"
import { log } from "node:console"
import { logout } from "./logout"

export class Myaccountpage{
    private readonly page:Page
    private readonly MyAccmsg:Locator
    private readonly btnlogout:Locator



   constructor(page:Page){

    this.page=page
    this.MyAccmsg=page.locator('h2:has-text("My Account")')
    this.btnlogout=page.locator('a').filter({ hasText: 'Logout' }).first()
   }


   async Myaccountexists(){
    await this.MyAccmsg.isVisible()
   }

   async clicklogout(){
    try{
          await this.btnlogout.click()
          return new logout(this.page)
    }
    catch(error)
    {
        console.log("Error displayed",`${error}`);
        throw error
        
    }
    
   }

}