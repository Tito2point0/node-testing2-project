const request = require("supertest");
const db = require("../db-config")
const server = require("../server");



const joke1 = { joke: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." }
const joke2 = { joke: "Why did the chicken cross the road?", punchline: "Because he was free range." }

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

it('            correct env var', () => {
        expect(process.env.NODE_ENV).toBe('test')
})

