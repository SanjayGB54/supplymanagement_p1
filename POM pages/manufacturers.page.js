class manufacturers{
    constructor(page){
        this.logoutBtn=page.locator('//input[@value="Log out"]')
        this.lastrecordname=page.locator('//table[@class="table_displayData"]//tr[last()]//td[3]')

    }
}
export default manufacturers

