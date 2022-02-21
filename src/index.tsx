import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Contribuição 1',
          type: 'deposit',
          category: 'Contribuição',
          amount: 80,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 2,
          title: 'Contribuição 2',
          type: 'deposit',
          category: 'Contribuição',
          amount: 100,
          createdAt: new Date('2021-02-02 09:00:00'),
        },
        {
          id: 3,
          title: 'Contribuição 3',
          type: 'deposit',
          category: 'Contribuição',
          amount: 75,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 4,
          title: 'Contribuição 4',
          type: 'deposit',
          category: 'Contribuição',
          amount: 100,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 5,
          title: 'Contribuição 5',
          type: 'deposit',
          category: 'Contribuição',
          amount: 100,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 6,
          title: 'Contribuição 6',
          type: 'deposit',
          category: 'Contribuição',
          amount: 70,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 7,
          title: 'Contribuição 7',
          type: 'deposit',
          category: 'Contribuição',
          amount: 100,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 8,
          title: 'Contribuição 8',
          type: 'deposit',
          category: 'Contribuição',
          amount: 100,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 9,
          title: 'Contribuição 9',
          type: 'deposit',
          category: 'Contribuição',
          amount: 100,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 10,
          title: 'Água',
          type: 'withdraw',
          category: 'Despesas',
          amount: 84.28,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 11,
          title: 'Luz',
          type: 'withdraw',
          category: 'Despesas',
          amount: 106.63,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
        {
          id: 9,
          title: 'Contribuição 10',
          type: 'deposit',
          category: 'Contribuição',
          amount: 25,
          createdAt: new Date('2021-02-01 09:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
