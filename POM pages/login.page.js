class login{
    constructor(page){
        this.UsernameTF=page.getByPlaceholder('Username')
        this.PasswordTF=page.getByPlaceholder('Password')
        this.LoginTypeDropdown=page.locator('//select[@name="login_type"]')
        this.LoginButton=page.locator('.submit_button')
    }
    async selectLoginTypevalue(value){
        await this.LoginTypeDropdown.selectOption(value)
    }
}
export default login