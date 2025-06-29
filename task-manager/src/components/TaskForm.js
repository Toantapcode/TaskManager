import React from 'react';

export default function TaskForm({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
                <h1 className='text-2xl font-bold'>Thêm công việc</h1>
                <div className="">
                    <label className='block font-medium'>Tiêu đề</label>
                    <input type="text" placeholder='Nhập tiêu đề'
                        className='border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600 transition w-[300px]'
                    ></input>
                </div>
                <div className="">
                    <label className='block font-medium'>Danh mục</label>
                    <select className="border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600 transition w-[300px]">
                        <option value="Công việc">Công việc</option>
                        <option value="Cá nhân">Cá nhân</option>
                        <option value="Khẩn cấp">Khẩn cấp</option>
                    </select>
                </div>
                <div className="">
                    <label className='block font-medium'>Ngày hết hạn</label>
                    <input type="date" className='border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600 transition w-[300px]' />
                </div>
                <div className="">
                    <label className='block font-medium'>Trạng thái</label>
                    <select className="border-2 border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600 transition w-[300px]">
                        <option value="Hoàn thành">Hoàn thành</option>
                        <option value="Đang chờ">Đang chờ</option>
                    </select>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        type='submit'
                        onClick={onClose}
                        className='mr-4 bg-green-600 text-white px-4 py-2 rounded'
                    >
                        Thêm
                    </button>
                    <button
                        type='cancel'
                        onClick={onClose}
                        className=' bg-red-500 text-white px-4 py-2 rounded'
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    )
}
