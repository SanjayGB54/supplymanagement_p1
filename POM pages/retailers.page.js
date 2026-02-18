class retailers{
    constructor(page){
        this.selectCB=page.locator('//input[@name="chkId[]"]') // use last row
        this.deleteBtn=page.locator('//input[@value="Delete"]')
        this.logoutBtn=page.locator('//input[@value="Log out"]')
    }
}
export default retailers