import React from 'react'

export default function Button ({ voting, ...props }: { voting?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  const content = voting
    ? <span className="animate-pulse">
      表決中...
    </span>
    : <>
      <span className="mr-3 inline-block scale-[2] text-yellow-300">☭</span>
      開始表決
    </>

  return (
    <button
      type="submit"
      className="inline-block w-full min-w-[16rem] cursor-pointer select-none rounded-lg bg-red-600 py-3 px-5 font-bold text-white transition duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      {...props}
    >
      {content}
    </button>
  )
}
