import {test} from '@playwright/test'
import login from '../POM pages/login.page.js'
import home from '../POM pages/home.page.js'
import retailers from '../POM pages/retailers.page.js'
import addretailer from '../POM pages/addretailer.page.js'

import loginTD from '../TestData/logindata.json'
import addretailersTD from '../TestData/addretailers.json'



test('E2E TC: add and delete retailer record as admin',async({page})=>{

    let loginpage=new login(page)
    let homepage=new home(page)
    let retailerspage=new retailers(page)
    let addretailerspage=new addretailer(page)

    //handle simple alert
    await page.on('dailog',(d)=>{d.accept})

    //launch the url
    await page.goto('http://49.249.28.218:8081/TestServer/Build/Supply_Management_System/')

    //fill username
    await loginpage.UsernameTF.fill(loginTD.username)

    //fill password
    await loginpage.PasswordTF.fill(loginTD.password)

    //select admin option from  'login-type' dropdown
    await loginpage.selectLoginTypevalue("admin")

    //click on Login button
    await loginpage.LoginButton.click()

    //homepage: click on add retailers link
    await homepage.AddRetailerslink.click()

    //addretailerpage: fill username
    await addretailerspage.usernameTF.fill(addretailersTD.username)

    //addretailerpage: fill password
    await addretailerspage.passwordTF.fill(addretailersTD.password)

    //addretailerpage: select  areacode dropdown
    await addretailerspage.areacodeDD.selectOption({value:"12"})

    //addretailerpage: fill phone
    await addretailerspage.phoneTF.fill(addretailersTD.phone)

    //addretailerpage: fill email
    await addretailerspage.emailTF.fill(addretailersTD.email)

    //addretailerpage: fill address
    await addretailerspage.addressTAF.fill(addretailersTD.address)

    //addretailerpage: click on add retailer btn
    await addretailerspage.addretailerBtn.click()

     //handle simple alert
    // await page.once('dailog',(d)=>{d.accept})


    //addretailerpage: click on retailer link
    await addretailerspage.retailerslink.click()

    //retaiers page:select checkbox
    let checkbox=await retailerspage.selectCB.last()
    await checkbox.click()

    //retailerpage: delete the reatiler record
    await retailerspage.deleteBtn.click()

    //take secreenshot for validation
    await page.screenshot({path:"screenshot/addretailers.png"})
    



})