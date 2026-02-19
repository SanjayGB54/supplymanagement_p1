class editprofile{
    constructor(page){
        this.oldpwdTF=page.locator('#oldPassword')
        this.newpwdTF=page.locator('#newPassword')
        this.confirmpwdTF=page.locator('#confirmPassword')
        this.changepwdBtn=page.locator('//input[@value="Change Password"]')
        this.logoutBtn=page.locator('//input[@value="Log out"]')
    }
}
export default editprofile