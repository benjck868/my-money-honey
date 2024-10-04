import React from 'react'

export default function route() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
        <div className="text-2xl font-bold">$10,000</div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">New Customers</h2>
        <div className="text-2xl font-bold">100</div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Active Users</h2>
        <div className="text-2xl font-bold">500</div>
        </div>
    </div>
  )
}
