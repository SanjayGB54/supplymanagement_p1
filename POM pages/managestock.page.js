class managestock{
    constructor(page){
        this.quantityCB= page.locator('//table[@class="table_displayData"]//tr[td][last()]/td[4]/input[@type="text"]')
        this.updatestockBtn= page.locator('#btnSubmit')
        this.logoutBtn=page.locator('//input[@value="Log out"]')
    }
}
export default managestock