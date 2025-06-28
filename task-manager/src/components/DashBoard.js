import React from 'react';
import TaskList from './TaskList';

export default function DashBoard() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className='text-3xl font-bold mb-6'>Bảng quản lý công việc</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-lg shadow-md">
                    <h3 className=' text-lg font-medium'>Tổng số lượng công việc</h3>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow-md">
                    <h3 className=' text-lg font-medium'>Số công việc đã hoàn thành</h3>
                </div>
                <div className="p-4 bg-red-100 rounded-lg shadow-md">
                    <h3 className=' text-lg font-medium'>Đang chờ</h3>
                </div>
            </div>
            <div className=" mb-6">
                <label className=' block text-gray-700 text-sm font-medium mb-2'>Lọc công việc</label>
                <select className="p-2 border rounded-md">
                    <option value="Tất cả"></option>
                    <option value="Công việc"></option>
                    <option value="Cá nhân"></option>
                    <option value="Khẩn cấp"></option>
                    <option value="Đã hoàn thành"></option>
                    <option value="Đang chờ"></option>
                </select>
            </div>
            <TaskList />
        </div>
    )
}
