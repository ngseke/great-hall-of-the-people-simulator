import { useCallback, useEffect, useRef, useState } from 'react'
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
import useLogs from '../hooks/useLogs'
import History from './History'

export default function Voter () {
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)
  const [isVoting, setIsVoting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { message, setMessage } = useMessageState(
    '大會要求全黨以「習近平新時代中國特色社會主義思想」統一思想和行動'
  )

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const initVideo = useCallback(async () => {
    if (!videoRef.current) return
    videoRef.current.muted = false
    await videoRef.current.play()
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }, [])

  useEffect(() => { initVideo() }, [initVideo])

  const { pushLog } = useLogs()

  const submit = async () => {
    if (!videoRef.current) return

    setIsVoting(true)
    initVideo()
    await speak(new SpeechSynthesisUtterance(message))

    setIsPlaying(true)
    await videoRef.current.play()
  }

  useEffect(() => {
    if (!isPlaying) { setIsVoting(false) }
  }, [isPlaying])

  const size = { width: 1920, height: 1080 }

  return (
    <div className="flex min-h-[100vh] flex-col">
      <div className="container flex-1 space-y-6 py-6 px-4 sm:py-8">
        <Title/>
        <div className="flex flex-wrap items-start justify-center">
          <div className="mb-6 flex-1 lg:mb-0">
            {
              !isVoting &&
                <Card>
                  <form
                    className="flex flex-col pr-0 lg:pr-12"
                    onSubmit={(e) => {
                      e.preventDefault()
                      submit()
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
            }
            {
              isVoting &&
                <Card red>
                  <div className="flex flex-col items-start pr-0 text-yellow-300 lg:pr-12">
                    <div className="scale-150 select-none text-3xl">❝</div>
                    <div className="pl-4 font-serif text-2xl leading-8 lg:text-3xl lg:leading-10">{message}</div>
                  </div>
                </Card>
            }
          </div>
          <div className="relative h-auto w-full overflow-hidden rounded-lg shadow-xl lg:h-[281.25px] lg:w-[500px] lg:-translate-x-10 lg:translate-y-10 2xl:h-[337.5px] 2xl:w-[600px]">
            <VideoOverlay
              className={clsx('transition duration-700', {
                'opacity-0': isPlaying || isVideoLoading,
                'opacity-100': isVoting && !isPlaying,
              })}
            >
              <img
                src={opening}
                className="h-full w-full"
                {...size}
              />
            </VideoOverlay>
            <video
              playsInline
              muted
              preload="auto"
              ref={videoRef}
              {...size}
              onLoadStart={() => setIsVideoLoading(true)}
              onLoadedData={() => setIsVideoLoading(false)}
              onEnded={() => {
                setIsPlaying(false)
                pushLog(message)
              }}
              onError={() => setIsVideoError(true)}
              className="h-full w-full bg-white"
            >
              <source src="./voting.mp4" type="video/mp4"/>
            </video>
            {
              isVideoLoading &&
                <VideoOverlay className="bg-red-600">
                  <div className="animate-pulse select-none text-9xl  font-bold text-yellow-400">☭</div>
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
        <div className="lg:pb-10"/>
        <History/>
      </div>

      <Footer/>
    </div>
  )
}
