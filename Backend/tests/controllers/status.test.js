const sinon = require('sinon');

const { expect } = require('chai');

const statusService = require('../../src/services/status.service');
const statusController = require('../../src/controllers/status.controller');

describe('A função getAll do controller Status', () => {
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
  const response = {};
  const request = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(status);
    sinon.stub(statusService, 'getAll').resolves(status);
  });

  afterEach(() => {
    statusService.getAll.restore();
  });

  it('Retorna array', async () => {
    const data = await statusController.getStatus(request, response);
    expect(data).to.be.an('array');
  });
});
