class addarea{
    constructor(page){
        this.areanameTF=page.locator('#areaName')
        this.areacodeTF=page.locator('#areaCode')
        this.addareaBtn=page.locator('//input[@value="Add Area"]')
    }
}
export default addarea