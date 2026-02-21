// import {test} from '@playwright/test'
// import login from '../POM pages/login.page'
// import home from '../POM pages/home.page'
// import editprofile from '../POM pages/editprofile.page'

// import loginTD from '../TestData/logindata.json'
// import editprofileTD from '../TestData/editprofileTD.json'
// import newcredTD from '../TestData/newcred.json'

// test('change password',async({page})=>{
    
//     let loginpage=new login(page)
//     let homepage=new home(page)
//     let editprofilepage= new editprofile(page)


//    //handle simple alert
//     await page.on('dailog',(d)=>{d.accept})

//     //launch the url
//     await page.goto('http://49.249.28.218:8081/TestServer/Build/Supply_Management_System/')

//     //loginpage: login as admin
//     await loginpage.UsernameTF.fill(loginTD.username)
//     await loginpage.PasswordTF.fill(loginTD.password)
//     await loginpage.selectLoginTypevalue('Admin')
//     await loginpage.LoginButton.click()

//     //homepage: click on change pwd link
//     await homepage.ChangePasswordlink.click()

//     //edit profile page: fill details
//     await editprofilepage.oldpwdTF.fill(editprofileTD.oldpwd)
//     await editprofilepage.newpwdTF.fill(editprofileTD.newpwd)
//     await editprofilepage.confirmpwdTF.fill(editprofileTD.confirmpwd)
//     await editprofilepage.changepwdBtn.click()

//     await editprofilepage.logoutBtn.click()

//     //login page: login with new cred
//     await loginpage.UsernameTF.fill(newcredTD.username)
//     await loginpage.PasswordTF.fill(newcredTD.password)
//     await loginpage.selectLoginTypevalue('Admin')
//     await loginpage.LoginButton.click()

//     //after succesful login: take screenshot of home page
//     await page.screenshot({path:"screenshot/updatepwd.png"})
    










// })