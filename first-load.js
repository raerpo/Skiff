const knex = require('./config/database');

const rows = {
  days: [
    {
      'id_d': 0,
      'name': 'lunes',
      'numberDay': 1
    },
    {
      'id_d': 1,
      'name': 'martes',
      'numberDay': 2
    },
    {
      'id_d': 2,
      'name': 'miercoles',
      'numberDay': 3
    },
    {
      'id_d': 3,
      'name': 'jueves',
      'numberDay': 4
    },
    {
      'id_d': 4,
      'name': 'viernes',
      'numberDay': 5
    },
    {
      'id_d': 5,
      'name': 'sabado',
      'numberDay': 6
    },
    {
      'id_d': 6,
      'name': 'domingo',
      'numberDay': 7
    }
  ],
  hours: [
    { 'id_h': 0, 'value': '08:00 - 10:00' },
    { 'id_h': 1, 'value': '10:00 - 12:00' },
    { 'id_h': 2, 'value': '12:00 - 14:00' },
    { 'id_h': 3, 'value': '14:00 - 16:00' },
    { 'id_h': 4, 'value': '16:00 - 18:00' },
    { 'id_h': 5, 'value': '18:00 - 20:00' },
    { 'id_h': 6, 'value': '20:00 - 22:00' }
  ],
  admin: [
    {
      rut: '1-1',
      password: '12345',
      name: 'Draaakos',
      lastName: 'Pro',
      birth: '16/03/2000',
      phone: '989248502',
      email: 'orlando.andaur.c@gmail.com',
      comune: 'Valpo',
      country: 'Chile',
      availableDays: 30,
      accountPlan: 'Personalizado',
      accountPay: 20000,
      accountsAvaibles: 10,
      keygen: 'JJDH2834',
      type: 0,
      statusAccount: 1
    }
  ]
};

knex.batchInsert('day', rows.days, 100)
.then(knex.batchInsert('hour', rows.hours, 100))
.then(knex.batchInsert('admin', rows.admin, 100));
