import coinPrize from '../assets/coin_prize.png';

const tasks = [
  {
    name: 'Join Simple App telegram',
    prize: 5,
    isCompleted: true,
    id: '12',
  },
  {
    name: 'Install Simple App',
    prize: 10,
    isCompleted: false,
    id: '13',
  },
];

const TasksScreen = () => {
  return (
    <div className={'tasks_wrapper'}>
      <div className={'title'}>
        {tasks.length} tasks available
      </div>
      {tasks.map((item) => (
        <div key={item.id} className={'task_item'}>
          <div className={'task_left'}>
            <div className={'task_name'}>
              {item.name}
            </div>
            <div className={'task_prize'}>
              <img src={coinPrize} alt={':)'} />
              +{item.prize} SMPL
            </div>
          </div>
          <div className={`task_right ${item.isCompleted ? 'done' : ''}`}>
            {item.isCompleted ? 'Done' : 'Start'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksScreen;
