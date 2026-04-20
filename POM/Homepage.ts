import{Page,Locator} from "@playwright/test"
import { throwDeprecation } from "node:process"

export class Homepage{

    private readonly page:Page
    private readonly lnkmyaccount:Locator
    private readonly lnkregister:Locator
    private readonly lnklogin :Locator
    private readonly searchbar:Locator
    private readonly searchicon:Locator





    constructor(page:Page){

        this.page=page
        this.lnkmyaccount=page.locator('span:has-text("My Account")');
        this.lnkregister=page.getByRole('link', { name: 'Register' });
        this.lnklogin=page.getByRole('link', { name: 'Login' });
        this.searchbar=page.getByRole('textbox', { name: 'Search' });
        this.searchicon=page.locator('#search button[type="button"]');
    }


    async titleexists(){

        let title=await this.page.title()
        if(title)
        {
            return true;
        }
        return false

    }

    async clickMyAccount()
    {
        try
        {
            await this.lnkmyaccount.click()
        }
        catch(error){
          console.log("Expection thrown",`${error}`);
          throw error
          
        }
    }

    async clickRegister()
    {
        try
        {
            await this.lnkregister.click()
        }
        catch(error){
          console.log("Expection thrown",`${error}`);
          throw error
          
        }
    }

    async clickLogin()
    {
        try
        {
            await this.lnklogin.click()
        }
        catch(error){
          console.log("Expection thrown",`${error}`);
          throw error
          
        }
    }

    async searchText(pname:string)
    {
        try
        {
            await this.searchbar.fill(pname)
        }
        catch(error){
          console.log("Expection thrown",`${error}`);
          throw error
          
        }
    }

    async clickSearchIcon()
    {
        try
        {
            await this.searchicon.click()
        }
        catch(error){
          console.log("Expection thrown",`${error}`);
          throw error
          
        }
    }

}