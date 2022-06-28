const sinon = require('sinon');
const { expect } = require('chai');
const taskModel = require('../../src/models/task.model');
const taskService = require('../../src/services/task.service');

describe('A função getAll do service Task', () => {
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

  beforeEach(() => {
    sinon.stub(taskModel, 'getAllStatus').resolves(tasks);
  });

  afterEach(() => {
    taskModel.getAllStatus.restore();
  });

  it('Retorna array', async () => {
    const response = await taskService.getAll();
    expect(response).to.be.an('array');
  });
});
