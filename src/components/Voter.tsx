import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import Button from './Button'
import Card from './Card'
import Field from './Field'
import Footer from './Footer'
import Title from './Title'
import speak from '../modules/speak'
import useMessageState from '../hooks/useMessageState'
import VideoOverlay from './VideoOverlay'

import opening from '../assests/opening.png'

export default function Voter () {
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)
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
    await speak(new SpeechSynthesisUtterance(message))

    setIsPlaying(true)
    await videoRef.current.play()
  }

  useEffect(() => {
    if (!isPlaying) setIsVoting(false)
  }, [isPlaying])

  const size = { width: 1920, height: 1080 }

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="container flex-1 py-6 sm:py-8 px-4 space-y-6">
        <Title/>
        <div className="flex flex-wrap justify-center items-start">
          <div className="flex-1">
            <Card className="mb-6 lg:mb-0">
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
                    disabled={!message || isVoting || isVideoLoading}
                    voting={isVoting}
                  />
                </div>
              </form>
            </Card>
          </div>
          <div className="w-full h-auto lg:w-[500px] lg:h-[281.25px] 2xl:w-[600px] 2xl:h-[337.5px] relative transform lg:-translate-x-10 lg:translate-y-10 rounded-lg overflow-hidden shadow-xl">
            <VideoOverlay
              className={clsx('transition duration-700', {
                'opacity-0': isPlaying || isVideoLoading,
                'opacity-100': isVoting && !isPlaying,
              })}
            >
              <img
                src={opening}
                className="w-full h-full"
                {...size}
              />
            </VideoOverlay>
            <video
              playsInline
              preload="auto"
              ref={videoRef}
              {...size}
              onLoadStart={() => setIsVideoLoading(true)}
              onLoadedData={() => setIsVideoLoading(false)}
              onEnded={() => setIsPlaying(false)}
              onError={() => setIsVideoError(true)}
              className="w-full h-full bg-white"
            >
              <source src="./voting.mp4" type="video/mp4"/>
            </video>
            {
              isVideoLoading &&
                <VideoOverlay className="bg-red-600">
                  <div className="font-bold text-9xl text-yellow-400  animate-pulse select-none">☭</div>
                </VideoOverlay>
            }
            {
              isVideoError &&
                <VideoOverlay className="bg-gray-100 text-gray-500">
                  <div>載入失敗 🥲</div>
                  <a
                    href="#"
                    onClick={() => location.reload()}
                    className="underline"
                  >重試</a>
                </VideoOverlay>
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
