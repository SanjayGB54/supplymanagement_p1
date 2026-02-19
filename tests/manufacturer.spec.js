import {test,expect} from '@playwright/test'
import login from '../POM pages/login.page'
import home from '../POM pages/home.page'
import addmanufacturer from '../POM pages/addmanufacturer.page'
import manufacturers from '../POM pages/manufacturers.page'
import homeManu from '../POM pages/home_manufacturer.page'

import TD_login from '../TestData/logindata.json'
import TD_addmanufacturer from '../TestData/addmanufacturer.json'


//! E2E scenario--> login as admin, create a new manufacturer and logout. Login as manufacturer verify details shown on home page and logout.

test('E2E_create manufacturer',async({page})=>{

    let loginpage=new login(page)
    let homepage=new home(page)
    let addmanufacturerpage=new addmanufacturer(page)
    let manufacturerpage=new manufacturers(page)
    let manuhomepage=new homeManu(page)

    // handle simple alert
     await page.on('dailog',(d)=>{d.accept})


    // launch URL
    await page.goto('http://49.249.28.218:8081/TestServer/Build/Supply_Management_System/index.php')
    
    // login as admin
    await loginpage.UsernameTF.fill(TD_login.username)
    await loginpage.PasswordTF.fill(TD_login.password)
    await loginpage.selectLoginTypevalue('Admin')
    await loginpage.LoginButton.click()

    // admin home page
    await homepage.AddManufacturerlink.click()

    // add manufacturer page
    await addmanufacturerpage.nameTF.fill(TD_addmanufacturer.name)
    await addmanufacturerpage.emailTF.fill(TD_addmanufacturer.email)
    await addmanufacturerpage.phoneTF.fill(TD_addmanufacturer.phone)
    await addmanufacturerpage.usernameTF.fill(TD_addmanufacturer.username)
    await addmanufacturerpage.passwordTF.fill(TD_addmanufacturer.password)
    await addmanufacturerpage.addmanufacturerBtn.click()
    await addmanufacturerpage.manufacturerslink.click()

    // manufacturers list page
    let name=await manufacturerpage.lastrecordname.textContent()
    console.log("last added name",name);
    await expect(manufacturerpage.lastrecordname).toHaveText('kevin')

    await manufacturerpage.logoutBtn.click()

    await page.screenshot({path:"screenshot/adminlogout.png"})

    //loginpage: login as manufacturer

    await expect (loginpage.UsernameTF).toBeVisible()
    await loginpage.UsernameTF.fill(TD_addmanufacturer.username)
    await loginpage.PasswordTF.fill(TD_addmanufacturer.password)
    await loginpage.selectLoginTypevalue('manufacturer')
    await loginpage.LoginButton.click()

    //manufacturer home page: validate the profile details and logout
    
    let profilename=await manuhomepage.profilename.textContent()
    let profilephone=await manuhomepage.profilephone.textContent()
    console.log("name:",profilename,"phone:",profilephone);

    await expect(manuhomepage.profilename).toHaveText('kevin')
    await expect(manuhomepage.profilephone).toHaveText('7894554987')

    await manuhomepage.logoutBtn.click()

    await page.screenshot({path:"screenshot/manulogout.png"})

    


})