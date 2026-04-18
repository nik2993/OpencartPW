# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDD.spec.ts >> verify the user login for Invalid login
- Location: tests/LoginDD.spec.ts:15:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Warning: No match for E-Mail Address and/or Password.')

```

# Test source

```ts
  1  | import{Page,Locator} from "@playwright/test"
  2  | 
  3  | 
  4  | export class Login{
  5  |     private readonly page:Page
  6  |     private readonly email:Locator
  7  |     private readonly password:Locator
  8  |     private readonly loginbutton:Locator
  9  |     private readonly errormsg:Locator
  10 | 
  11 |     constructor(page:Page)
  12 |     {
  13 |         this.page=page
  14 |         this.email=page.getByRole('textbox', { name: 'E-Mail Address' })
  15 |         this.password=page.getByRole('textbox', { name: 'Password' })
  16 |         this.loginbutton=page.locator('input.btn.btn-primary')
  17 |         this.errormsg=page.getByText('Warning: No match for E-Mail Address and/or Password.')
  18 |     }
  19 | 
  20 |     async useremail(email:string){
  21 |         await this.email.fill(email)
  22 |         
  23 |     }
  24 | 
  25 |     async userpassword(pass:string)
  26 |     {
  27 |         await this.password.fill(pass)
  28 |     }
  29 | 
  30 |     async loginbtn(){
  31 |         await this.loginbutton.click()
  32 |     }
  33 | 
  34 |     async errormessage()
  35 |     {
> 36 |        return(await this.errormsg.textContent()) 
     |                                   ^ Error: locator.textContent: Target page, context or browser has been closed
  37 |     }
  38 | 
  39 | 
  40 | }
```