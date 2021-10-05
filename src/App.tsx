import { useRef, useState } from 'react'
import speak from './modules/speak'

export default function App () {
  const [isPlaying, setIsPlaying] = useState(false)
  const [message, setMessage] = useState<string>('大會要求全黨以「習近平新時代中國特色社會主義思想」統一思想和行動')

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const play = async () => {
    if (videoRef.current) {
      videoRef.current.play()
      videoRef.current.pause()
      setIsPlaying(true)
      videoRef.current.currentTime = 0
      await speak(new SpeechSynthesisUtterance(message))
      await videoRef.current.play()
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return <>
    <h1>人民大會堂</h1>
    <input
      type="text"
      value={message}
      onChange={e => setMessage(e.target.value)}
    />
    <button
      type="button"
      onClick={play}
      disabled={isPlaying}
    >開始表決</button>

    <br/>
    <video
      playsInline
      width="500"
      ref={videoRef}
      onEnded={handleVideoEnded}
    >
      <source src="./voting.mp4" type="video/mp4"/>
    </video>

  </>
}
