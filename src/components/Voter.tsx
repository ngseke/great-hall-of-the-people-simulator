import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import Button from './Button'
import Card from './Card'
import Field from './Field'
import Footer from './Footer'
import Title from './Title'
import speak from '../modules/speak'
import useMessageState from '../hooks/useMessageState'

export default function Voter () {
  const [isVoting, setIsVoting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const { message, setMessage } = useMessageState(
    '大會要求全黨以「習近平新時代中國特色社會主義思想」統一思想和行動'
  )

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const initVideo = () => {
    if (!videoRef.current) return
    videoRef.current.play()
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  useEffect(initVideo, [])

  const play = async () => {
    if (!videoRef.current) return

    setIsVoting(true)
    initVideo()
    await speak(new SpeechSynthesisUtterance(message as string))

    setIsPlaying(true)
    await videoRef.current.play()
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  useEffect(() => {
    if (!isPlaying) setIsVoting(false)
  }, [isPlaying])

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="container flex-1 py-6 sm:py-8 px-4 space-y-6">
        <Title/>
        <div className="block lg:flex items-start">
          <Card className="lg:w-[700px] mb-6 lg:mb-0">
            <form
              className="flex flex-col pr-0 lg:pr-12"
              onSubmit={(e) => {
                e.preventDefault()
                play()
              }}
            >
              <Field
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <div className="flex justify-start lg:justify-end">
                <Button
                  disabled={!message || isVoting}
                  voting={isVoting}
                />
              </div>
            </form>
          </Card>
          <div className="transform lg:-translate-x-10 lg:translate-y-10">
            <video
              playsInline
              width="500"
              ref={videoRef}
              onEnded={handleVideoEnded}
              className={clsx('bg-white rounded-lg shadow-xl')}
            >
              <source src="./voting.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
