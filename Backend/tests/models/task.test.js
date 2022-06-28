const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/models/connection');
const taskModel = require('../../src/models/task.model');

describe('A função getAllStatus do model Task', () => {
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
    sinon.stub(connection, 'execute').resolves([tasks]);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna array', async () => {
    const response = await taskModel.getAll();
    expect(response).to.be.an('array');
  });
});

describe('A função findById do model Task', () => {
  const task = {
    task_id: 1,
    task_name: 'martelo',
    task_message: 'martelo',
    status: 'status1',
    task_date: 'data',
  };

  beforeEach(() => {
    sinon.stub(taskModel, 'findById').resolves(task);
  });

  afterEach(() => {
    taskModel.findById.restore();
  });
  describe('id 1', () => {
    it('Retorna object', async () => {
      const response = await taskModel.findById(1);
      expect(response).to.be.an('object');
    });
  });
});
