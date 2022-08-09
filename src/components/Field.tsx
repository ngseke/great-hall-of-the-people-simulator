import React from 'react'

export default function Field (props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <textarea
      rows={3}
      className="mb-4 w-full rounded-lg bg-gray-100 p-4 text-lg outline-none dark:bg-dark dark:text-white"
      placeholder="提案內容..."
      maxLength={300}
      {...props}
    />
  )
}
