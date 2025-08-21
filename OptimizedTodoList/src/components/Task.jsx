import React from "react"

const Task = React.memo(({ task, id, onDelete }) => {
    console.log('Task com render');

    return (
        <li className="flex items-center justify-between p-3 my-2 bg-white rounded-lg shadow transition-all duration-200 ease-in-out hover:shadow-md">
            <span className="text-gray-700">{task}</span>
            <button className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors" onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
});

export default Task
