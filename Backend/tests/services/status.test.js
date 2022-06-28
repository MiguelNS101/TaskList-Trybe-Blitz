const sinon = require('sinon');
const { expect } = require('chai');
const statusModel = require('../../src/models/status.model');
const statusService = require('../../src/services/status.service');

describe('A função getAll do service Status', () => {
  const status = [
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
    sinon.stub(statusModel, 'getAll').resolves(status);
  });

  afterEach(() => {
    statusModel.getAll.restore();
  });

  it('Retorna array', async () => {
    const response = await statusService.getAll();
    expect(response).to.be.an('array');
  });
});
