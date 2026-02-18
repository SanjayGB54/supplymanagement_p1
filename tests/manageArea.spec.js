import {test} from '@playwright/test'
import login from '../POM pages/login.page.js'
import home from '../POM pages/home.page.js'
import managearea from '../POM pages/managearea.page.js'
import addarea from '../POM pages/addarea.page.js'
import addareaTD from '../TestData/addareaTD.json'
import loginTD from '../TestData/logindata.json'


test('E2E test- add new area as admin',async({page})=>{
    let loginpage=new login(page)
    let homepage=new home(page)
    let manageareapage=new managearea(page)
    let addareapage=new addarea(page)

    //launch url
    await page.goto('http://49.249.28.218:8081/TestServer/Build/Supply_Management_System/')
    
    //launch the url
    //await page.goto('http://49.249.28.218:8081/TestServer/Build/Supply_Management_System/')

    //fill username
    await loginpage.UsernameTF.fill(loginTD.username)

    //fill password
    await loginpage.PasswordTF.fill(loginTD.password)

    //select admin option from  'login-type' dropdown
    await loginpage.selectLoginTypevalue("admin")

    //click on Login button
    await loginpage.LoginButton.click()

    //home page-click on manage area link
    await homepage.ManageArealink.click()

    //managearea page- click on add area button
    await manageareapage.AddareaBtn.click()

    //addarea page- fill area name
    await addareapage.areanameTF.fill(addareaTD.areaname)

   //addarea page- fill area code
    await addareapage.areacodeTF.fill(addareaTD.areacode)

    // addarea page- click on add area button
    await addareapage.addareaBtn.click()

    //handle simple alert-area added confirmation
    await page.once('dailog',(d)=>{d.accept})
    



})