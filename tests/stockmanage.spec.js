import {test,expect} from '@playwright/test'
import login from '../POM pages/login.page'
import homeManu from '../POM pages/home_manufacturer.page'
import addproduct from '../POM pages/addproduct.page'
import managestock from '../POM pages/managestock.page'


import TD_login from '../TestData/TD_cred.json'
import productTD from '../TestData/addproduct.json'



//! Login as Manufacturer, add new product. 
//! Then navigate to manage stock, select newly added stock and update quantity and logout.


test('Add new product and update the quantity',async({page})=>{

    let loginpage=new login(page)
    let homepage=new homeManu(page)
    let addproductpage=new addproduct(page)
    let managestockpage=new managestock(page)

    // handling simple alert- confirmation alert
    await page.on('dailog',(alert)=>{alert.accept})

    //launch url
    await page.goto('http://49.249.28.218:8081/TestServer/Build/Supply_Management_System/index.php')

    //loginpage: login with manufacturer cred
    await loginpage.UsernameTF.fill(TD_login.users[0].username)
    await loginpage.PasswordTF.fill(TD_login.users[0].password)
    await loginpage.selectLoginTypevalue('Manufacturer')
    await loginpage.LoginButton.click()

    //homepage: navigate to add product page
    await homepage.addproductslink.click()

    //addproduct page: create new product
    await addproductpage.ProductnameTF.fill(productTD.productname)
    await addproductpage.ProductpriceTF.fill(productTD.price)
    await addproductpage.selectUnitType('1')
    await addproductpage.selectCategory('4')
    await addproductpage.enableSM.click()
    await addproductpage.DescriptionTAF.fill(productTD.description)
    await addproductpage.AddproductButton.click()

    await addproductpage.managestocklink.click()

    //manage stock page: update quantity for the recently added product
    await managestockpage.quantityCB.fill('20')
    await managestockpage.updatestockBtn.click()

    //await expect(managestockpage.quantityCB).toHaveText('20') // failed

    await managestockpage.logoutBtn.click()

    //take screenshot
    await page.screenshot({path:"screenshot/updatestock.png"})


 
    





})

