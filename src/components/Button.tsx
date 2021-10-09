import React from 'react'

export default function Button ({ voting, ...props }: { voting?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  const content = voting
    ? <>
      表決中...
    </>
    : <>
      <span className="inline-block text-yellow-300 transform scale-[2] mr-3">☭</span>
      開始表決
    </>

  return (
    <button
      type="button"
      className="text-white bg-red-600 font-bold inline-block py-3 px-5 w-full sm:w-auto min-w-[16rem] rounded-lg hover:shadow-lg transition duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 select-none"
      disabled={voting}
      {...props}
    >
      {content}
    </button>
  )
}
