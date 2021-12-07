export default function (utterance: SpeechSynthesisUtterance) {
  return new Promise((resolve, reject) => {
    utterance.addEventListener('end', resolve, true)
    utterance.addEventListener('error', reject, true)
    utterance.lang = 'zh-TW'
    speechSynthesis.speak(utterance)
  })
}
