import{Page,Locator} from "@playwright/test"

    export class Register
{
    private readonly page:Page
    private readonly FNtext:Locator
    private readonly LNtext:Locator
    private readonly EmailText:Locator
    private readonly Telephone:Locator
    private readonly passtext:Locator
    private readonly Passconfirm:Locator
    private readonly Policycheck:Locator
    private readonly continuebutton:Locator
    private readonly confirmmessage:Locator


    constructor(page:Page)
    {

        this.page=page
        this.FNtext=page.getByRole('textbox', { name: 'First Name' })
        this.LNtext=page.getByRole('textbox', { name: 'Last Name' })
        this.EmailText=page.getByRole('textbox', { name: 'E-Mail' })
        this.Telephone=page.getByRole('textbox', { name: 'Telephone' })
        this.passtext=page.locator('#input-password')
        this.Passconfirm=page.getByPlaceholder('Password Confirm')
        this.Policycheck=page.locator('input[name="agree"]')
        this.continuebutton=page.locator('input.btn.btn-primary')
        this.confirmmessage=page.getByRole('heading', { name: 'Your Account Has Been Created!' })

    }
 /**
     * Sets the first name in the registration form
     * @param fname - First name to enter
     */
    async setFirstName(fname: string): Promise<void> {
        await this.FNtext.fill(fname);
    }

    /**
     * Sets the last name in the registration form
     * @param lname - Last name to enter
     */
    async setLastName(lname: string): Promise<void> {
        await this.LNtext.fill(lname);
    }

    /**
     * Sets the email in the registration form
     * @param email - Email to enter
     */
    async setEmail(email: string): Promise<void> {
        await this.EmailText.fill(email);
    }

    /**
     * Sets the telephone number in the registration form
     * @param tel - Telephone number to enter
     */
    async setTelephone(tel: string): Promise<void> {
        await this.Telephone.fill(tel);
    }

    /**
     * Sets the password in the registration form
     * @param pwd - Password to enter
     */
    async setPassword(pwd: string): Promise<void> {
        await this.passtext.fill(pwd);
    }

    /**
     * Sets the confirm password in the registration form
     * @param pwd - Password to confirm
     */
    async setConfirmPassword(pwd: string): Promise<void> {
        await this.Passconfirm.fill(pwd);
    }

    /**
     * Checks the privacy policy checkbox
     */
    async setPrivacyPolicy(): Promise<void> {
        await this.Policycheck.check();
    }

    /**
     * Clicks the Continue button
     */
    async clickContinue(): Promise<void> {
        await this.continuebutton.click();
    }

    /**
     * Gets the confirmation message text
     * @returns Promise<string> - Confirmation message text
     */
    async getConfirmationMsg() {
        return await this.confirmmessage.textContent();
    }
}