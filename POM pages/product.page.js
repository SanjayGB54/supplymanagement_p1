class product{
    constructor(page){
        this.editicon=page.locator('//img[@src="../images/edit.png"]')
        this.deleteCB=page.locator('//input[@class="submit_button" and @value="Delete" ]')
        this.selectCB=page.locator('//input[@value="71" and @name="chkId[]"]')
    }
}
export default product