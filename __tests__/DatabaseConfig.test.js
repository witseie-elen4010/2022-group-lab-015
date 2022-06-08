/*eslint-env jest*/
'use strict'
const database = require('../database/databaseOperations')

describe("querying database for users", () => {
    // test("check username exists in database", async () => {
    //     jest.setTimeout(7000)
    //     let username = "samma"
    //     let name = "sam"
    //     let surn = "maj"
    //     let email = "sam@temp.com"
    //     let pass = "g15CompetitiveWordle"
    //     let newUser = await database.CreateUser(name, surn, email, username, pass)
    //     let isTrue = await database.DoesUserExistByUsername(username)
    //     await database.DeleteUser(username, pass)
    //     expect(isTrue).toBe(true)

    // })

    test("check username does not exist in database", async () => {
        jest.setTimeout(10000)
        let isTrue = await database.DoesUserExistByUsername('Lev')
        expect(isTrue).toBe(false)
    })
})

describe("creating a user profile", () => {
    test("check if new user created successfully in database", async () => {
        let username = "samma"
        let name = "sam"
        let surn = "maj"
        let email = "sam@temp.com"
        let pass = "g15CompetitiveWordle"
        let newUser = await database.CreateUser(name, surn, email,username, pass)
        
        await database.DeleteUser(username, pass)
        expect(newUser).toBe(true)

    })

    test("check if having empty fields fails new user creation", async () => {
        let username = null
        let name = null
        let surn = null
        let email = null
        let pass = null
        let newUser = await database.CreateUser(name, surn, email,username, pass)

        expect(newUser).toBe(false)
    })
})

describe("Check if password is updated", () => {
    test("Successful update ", async () => {
        let username = "sam"
        let name = "sam"
        let surn = "maj"
        let email = "sam@temp.com"
        let pass = "g15CompetitiveWordle"
        let newUser = await database.CreateUser(name, surn, email,username, pass)
        let newpass = "12345678"
        let newPass = await database.UpdatePassword(username,newpass)
        await database.DeleteUser(username, pass)

        expect(newPass).toBe(true)    
    })

    test("check if it failed to update", async () => {
        let username = "sam"
        let name = "sam"
        let surn = "maj"
        let email = "sam@temp.com"
        let pass = "g15CompetitiveWordle"
        let oldPass = null
        let newUser = await database.CreateUser(name, surn, email,username, pass)
        let newPass = await database.UpdatePassword(username,oldPass)
        await database.DeleteUser(username, pass) 

        expect(newPass).toBe(false)
    })

    test("check if it failed because of over 50 characters", async () => {
        let username = "sam"
        let name = "sam"
        let surn = "maj"
        let email = "sam@temp.com"
        let pass = "qewreyeuufdioijfodskgcvkgvkygvulhvt7yvlyuvfluyv gycrtc khvluvylijifdijodijjfduhdushfdjhdhfhdshfdshfhdshfdshfhdshududshfhdudhfhdfhhdudhdhfhdhufuhdhfduhuffdsuufdufhg15CompetitiveWordle"
        let newUser = await database.CreateUser(name, surn, email,username, pass)
        let newPass = await database.UpdatePassword(username,pass)
        await database.DeleteUser(username, pass) 

        expect(newPass).toBe(true)
    })

})
