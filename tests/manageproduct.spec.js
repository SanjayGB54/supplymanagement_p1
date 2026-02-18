import {test} from '@playwright/test'
import login from '../POM pages/login.page'
import home from '../POM pages/home.page'
import addproduct from '../POM pages/addproduct.page'
import product from '../POM pages/product.page.js'
import loginTD from '../TestData/logindata.json'
import productTD from '../TestData/addproduct.json'


test('add new product as a admin',async({page})=>{

    let loginpage=new login(page)
    let homepage=new home(page)
    let addproductpage=new addproduct(page)

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


    //admin page- click on add product link
    await homepage.AddProductslink.click()

    //addproduct page-fill product name
    await addproductpage.ProductnameTF.fill(productTD.productname)

    //fill product price
    await addproductpage.ProductpriceTF.fill(productTD.price)

    //select unit type from dropdown
    await addproductpage.selectUnitType('1')

    //select Category from dropwdown
    await addproductpage.selectCategory('4')

    //check 'Enable' stock management radio button
    await addproductpage.enableSM.click()

    //fill description test area field
    await addproductpage.DescriptionTAF.fill(productTD.description)

    //click on addproduct button
    await addproductpage.AddproductButton.click()

    //handle the simple alert
    await page.once('dailog',(d)=>{d.accept})

  
})