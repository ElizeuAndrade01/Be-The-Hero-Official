const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{

    beforeEach(async()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(()=>{
        connection.destroy();
    });

    it('should be able to create a new ONG', async()=>{
        const response = await request(app).
        post('/ongs')
        .send({
            name: "APAD",
            email: "contato@asap.com.br",
            whatsapp: "4777777777777",
            city: "Fortaleza",
            uf: "CE"
        })
    })
})