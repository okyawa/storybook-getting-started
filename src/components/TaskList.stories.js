import React from 'react';

import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: PureTaskList,
  title: 'TaskList',
  // デコレーターを使ってストーリーに任意のラッパーを設定できる
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.tasks, id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { ...TaskStories.Default.args.tasks, id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { ...TaskStories.Default.args.tasks, id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { ...TaskStories.Default.args.tasks, id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { ...TaskStories.Default.args.tasks, id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    { ...TaskStories.Default.args.tasks, id: '6', title: 'Task 6', state: 'TASK_INBOX' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  ...Loading.args,
  loading: false,
};
