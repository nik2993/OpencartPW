import {Page,Locator,expect} from '@playwright/test'
import { Homepage } from './Homepage'

export class logout{
    private readonly page:Page
    private readonly btncontinue:Locator

    constructor(page:Page){
        this.page=page
        this.btncontinue=page.getByRole('link', { name: 'Continue' })
         
    }

    async clickContinue(){
        await this.btncontinue.click()
        return new Homepage(this.page)
    }
}