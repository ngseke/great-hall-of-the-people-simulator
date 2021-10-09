import React from 'react'

export default function Field (props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <textarea
      rows={3}
      className="bg-gray-100 outline-none p-4 w-full rounded-lg text-lg mb-4"
      {...props}
    />
  )
}