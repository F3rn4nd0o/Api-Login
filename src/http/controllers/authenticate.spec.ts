import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate', async () => {
    await request(app.server).post('/users').send({
      name: 'Jhon Doe',
      email: 'jhon.doe@exemple.com',
      password: '123456',
    })

    const reponse = await request(app.server).post('/sessions').send({
      email: 'jhon.doe@exemple.com',
      password: '123456',
    })

    expect(reponse.statusCode).toEqual(200)
    expect(reponse.body).toEqual({
      token: expect.any(String),
    })
  })
})
