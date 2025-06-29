import React, { use, useState } from 'react'
import TaskForm from './TaskForm'

export default function TaskList() {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const showTaskForm = () => {
    setIsTaskFormOpen(true);
  }

  const handleOk = () => {
    setIsTaskFormOpen(false);
  }

  const handleClose = () => {
    setIsTaskFormOpen(false);
  }
  return (
    <div>
      <div className="flex justify-between">
        <p className='text-3xl block'>Danh sách công việc</p>
        <button
          className='p-3 bg-blue-700 text-white rounded-lg font-bold'
          type='primary'
          onClick={showTaskForm}
        >
          Thêm công việc
        </button>
      </div>
      <TaskForm isOpen={isTaskFormOpen} onClose={handleClose} />
    </div>
  )
}
