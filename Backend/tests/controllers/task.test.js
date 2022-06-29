const sinon = require('sinon');

const { expect } = require('chai');

const taskService = require('../../src/services/task.service');
const taskController = require('../../src/controllers/task.controller');

describe('A função getAll do controller Task', () => {
  const tasks = [
    {
      task_id: 1,
      task_name: 'martelo',
      task_message: 'martelo',
      status: 'status1',
      task_date: 'data',
    },
    {
      task_id: 2,
      task_name: 'traje',
      task_message: 'traje',
      status: 'status2',
      task_date: 'data',
    },
    {
      task_id: 3,
      task_name: 'escudo',
      task_message: 'escudo',
      status: 'status3',
      task_date: 'data',
    },
  ];
  const response = {};
  const request = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(tasks);
    sinon.stub(taskService, 'getAll').resolves(tasks);
  });

  afterEach(() => {
    taskService.getAll.restore();
  });

  it('Retorna array', async () => {
    const data = await taskController.getTasks(request, response);
    expect(data).to.be.an('array');
  });
});
