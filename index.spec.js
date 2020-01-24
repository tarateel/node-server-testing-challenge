const supertest = require('supertest');
const server = require('./index');
const db = require('./data/dbConfig');

beforeEach(async () => {
  await db.seed.run()
});

test('welcome route', async () => {
  const res = await supertest(server).get('/')
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect(res.body.message).toMatch(/Welcome to our list of The Doctor's Companions, starting from the 9th Doctor./i)
})

test('get companion list', async () => {
  const res = await supertest(server).get('/companions')
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect([res.body]).toBeArray()
  expect(res.body[0].id).toBeNumber()
  expect(res.body[0].name).toBeString()
})