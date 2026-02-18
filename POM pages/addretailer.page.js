class addretailer{
    constructor(page){
        this.usernameTF=page.locator('//input[@name="txtRetailerUname"]')
        this.passwordTF=page.locator('//input[@name="txtRetailerPassword"]')
        this.areacodeDD=page.locator('//select[@id="retailer:areaCode"]')
        this.phoneTF=page.locator('//input[@id="retailer:phone"]')
        this.emailTF=page.locator('//input[@id="retailer:email"]')
        this.addressTAF=page.locator('//textarea[@id="retailer:address"]')
        this.addretailerBtn=page.locator('//input[@value="Add Retailer"]')
        this.retailerslink=page.getByRole('link',{name:"Retailers",exact:true})

    }
}
export default addretailer