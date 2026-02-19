class addmanufacturer{
    constructor(page){
        this.nameTF=page.locator('//input[@id="manufacturer:name"]')
        this.emailTF=page.locator('//input[@id="manufacturer:email"]')
        this.phoneTF=page.locator('//input[@id="manufacturer:phone"]')
        this.usernameTF=page.locator('//input[@id="manufacturer:username"]')
        this.passwordTF=page.locator('//input[@id="manufacturer:password"]')
        this.addmanufacturerBtn=page.locator('//input[@value="Add Manufacturer"]')
        this.manufacturerslink=page.locator('//a[text()="Manufacturers"]')

    }
}
export default addmanufacturer