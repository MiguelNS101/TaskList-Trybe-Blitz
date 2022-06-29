const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/models/connection');
const statusModel = require('../../src/models/status.model');

describe('A função getAll do model Status', () => {
  const tasks = [
    {
      task_id: 1,
      status_name: 'martelo',
    },
    {
      task_id: 2,
      status_name: 'traje',
    },
    {
      task_id: 3,
      status_name: 'escudo',
    },
  ];

  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([tasks]);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna array', async () => {
    const response = await statusModel.getAll();
    expect(response).to.be.an('array');
  });
});
