class addproduct{
    constructor(page){
        this.ProductnameTF=page.locator('//input[@name="txtProductName"]')
        this.ProductpriceTF=page.locator('//input[@name="txtProductPrice"]')
        this.UnittypeDropdown=page.locator('//select[@name="cmbProductUnit"]')
        this.CatergoryDropdown=page.locator('//select[@name="cmbProductCategory"]')
        this.enableSM=page.locator('//input[@value="1"]')
        this.disableSM=page.locator('//input[@value="2"]')
        this.DescriptionTAF=page.locator('//textarea[@name="txtProductDescription"]')
        this.AddproductButton=page.locator('//input[@value="Add Product"]')
        this.productslink=page.getByRole('link',{name:'Products',exact:true})
        this.managestocklink=page.getByRole('link',{name:'Manage Stock',exact:true})
    }

    async selectUnitType(value){
        await this.UnittypeDropdown.selectOption(value)
    }

    async selectCategory(value){
        await this.CatergoryDropdown.selectOption(value)
    }
}

export default addproduct