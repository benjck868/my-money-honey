import { Outlet } from '@remix-run/react'
import React from 'react'

export default function route() {
  return (
    <div className="md:bg-gray-100 bg-white min-h-screen flex items-center justify-center">
        <Outlet />
    </div>
  )
}
