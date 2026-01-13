const request = require('supertest');
const express = require('express');
const app = require('./server'); // You'll need to export app from server.js

describe('API Endpoints', () => {
  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /admin/orders without auth should return 401', async () => {
    const response = await request(app).get('/admin/orders');
    expect(response.status).toBe(401);
  });

  test('POST /api/order with invalid data should return 400', async () => {
    const response = await request(app)
      .post('/api/order')
      .send({ invalidField: 'test' });
    expect(response.status).toBe(400);
  });
});