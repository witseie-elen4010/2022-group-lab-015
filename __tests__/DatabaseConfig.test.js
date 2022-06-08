/*eslint-env jest*/
'use strict'
const database = require('../database/databaseOperations')

describe("querying database for users", () => {
    test("check username exists in database", async () => {
        let isTrue = await database.DoesUserExistByUsername('sama')
        expect(isTrue) .toBe(true)

    })

    test("check username does not exist in database", async () => {
        let isTrue = await database.DoesUserExistByUsername('Lev')
        expect(isTrue) .toBe(false)
    })
})

describe("creating a user profile", () => {
    test("check if new user created successfully in database", async () => {
        let username = "sam"
        let name = "sam"
        let surn = "maj"
        let email = "sam@temp.com"
        let pass = "g15CompetitiveWordle"
        let newUser = await database.CreateUser(name, surn, username, email, pass)
        
        await database.DeleteUser(username, pass)
        expect(newUser) .toBe(true)

    })

    test("check if having empty fields fails new user creation", async () => {
        let username = null
        let name = null
        let surn = null
        let email = null
        let pass = null
        let newUser = await database.CreateUser(name, surn, username, email, pass)

        expect(newUser).toBe(false)
    })
})