class homeManu{
    constructor(page){
        this.profilename=page.getByRole('cell', { name: 'kevin', exact: true })
        this.profilephone=page.getByRole('cell', { name: '7894554987', exact: true })
        this.logoutBtn=page.locator('//input[@value="Log out"]')
        this.addproductslink=page.getByRole('link',{name:"Add Products",exact:true})
        
    }
}
export default homeManu