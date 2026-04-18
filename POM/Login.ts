import{Page,Locator} from "@playwright/test"


export class Login{
    private readonly page:Page
    private readonly email:Locator
    private readonly password:Locator
    private readonly loginbutton:Locator
    private readonly errormsg:Locator

    constructor(page:Page)
    {
        this.page=page
        this.email=page.getByRole('textbox', { name: 'E-Mail Address' })
        this.password=page.getByRole('textbox', { name: 'Password' })
        this.loginbutton=page.locator('input.btn.btn-primary')
        this.errormsg=page.getByText('Warning: No match for E-Mail Address and/or Password.')
    }

    async useremail(email:string){
        await this.email.fill(email)
        
    }

    async userpassword(pass:string)
    {
        await this.password.fill(pass)
    }

    async loginbtn(){
        await this.loginbutton.click()
    }

    async errormessage()
    {
       return(await this.errormsg.textContent()) 
    }


}