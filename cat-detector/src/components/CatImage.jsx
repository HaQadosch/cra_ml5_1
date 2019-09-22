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
  
  let classifier

  function onLoaded (options, model) {
    console.log('Model Loaded!', {options, model})
    model && model.predict(imgRef.current, 10, function(err, results) {
      console.log({ modelPredict: results, err })
      if (results) setPredictions(results)
    })

    classifier.predict(imgRef.current, 10, function(err, results) {
      console.log({ classifierPredict: results, err })
      if (results) setPredictions(results)
    })
    
    const newImg = new Image(400, 400)
    newImg.src="/index.png"
    
    model && model.predict(newImg, 10, function(err, results) {
      console.log({ newImgModelPredict: results, err, newImg })
      if (results) setPredictions(results)
    })
    classifier.predict(newImg, 10, function(err, results) {
      console.log({ newImgClassifierPredict: results, err })
      if (results) setPredictions(results)
    })

    const yolo = ml5.YOLO()
    yolo.detect(newImg, (err, res) => {
      console.log({yolo, err, newImg: res})
    })
    yolo.detect(imgRef.current, (err, res) => {
      console.log({yolo, err, newImg: res})
    })
  }


  useEffect(() => {
    unsplash
      .photos
      .getRandomPhoto({query: 'boat', count: 1})
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
      .then(() => { classifier = ml5.imageClassifier('MobileNet', onLoaded) })
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
