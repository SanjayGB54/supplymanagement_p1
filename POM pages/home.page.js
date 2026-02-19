class home{
    constructor(page){
        this.AddProductslink=page.getByRole('link',{name:"Add Products"})
        this.AddRetailerslink=page.getByRole('link',{name:"Add Retailers"})
        this.AddManufacturerlink=page.getByRole('link',{name:"Add Manufacturer",exact:true})
        this.AddDistributor=page.getByRole('link',{name:"Add Distributor"})
        this.Logout=page.locator('.submit_button')
        this.ManageArealink=page.getByRole('link',{name:"Manage Area"})
        this.ChangePasswordlink=page.getByRole('link',{name:"Change Password",exact:true})
    }
}
export default home