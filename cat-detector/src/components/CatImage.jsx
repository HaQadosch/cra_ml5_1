import React, { useEffect, useState, useRef } from 'react'
import Unsplash from 'unsplash-js'
import ml5 from 'ml5'

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_ACCESS,
  secret:        process.env.REACT_APP_SECRET
})

export const CatImage = () => {
  const [imgSrc,  setImgSrc]  = useState('')
  const [imgDesc, setImgDesc] = useState('')
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)
  const [predictions, setPredictions] = useState([])
  const imgRef = useRef(null)
  
  function onLoaded (options, model) {
    console.log('Model Loaded!', {options, model})
    model.predict(imgRef.current, function(err, results) {
      console.log({ results, err })
      if (results) setPredictions(results)
    })
  }


  useEffect(() => {
    unsplash
      .photos
      .getRandomPhoto({query: 'cat', count: 1})
      .then(res => {
        const {ok, statusText} = res
        if (!ok) {
          throw new Error(statusText)
        }
        return res
      })
      .then(res => res.json())
      .then(([{alt_description: alt, width, height, urls: {regular: url}, user: {first_name, last_name}}]) => {
        setImgDesc(`Photo by ${first_name} ${last_name} on Unsplash, ${alt}`)
        setImgSrc(url)
        setImgWidth(width)
        setImgHeight(height)
      })
      .then(() => ml5.imageClassifier('MobileNet', onLoaded))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <figure>
        <img src={imgSrc} alt={imgDesc} ref={imgRef} width={imgWidth} height={imgHeight} />
        <figcaption>{imgDesc}</figcaption>
      </figure>
      <section>
        <ul>
          {predictions.map(({label, confidence}) => (
            <li key={confidence}>{label}: confidence {confidence}</li>            
          ))}
        </ul>
      </section>
    </>
  )
}
