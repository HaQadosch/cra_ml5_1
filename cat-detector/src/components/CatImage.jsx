import React, { useEffect, useState } from 'react'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_ACCESS,
  secret:        process.env.REACT_APP_SECRET
})

export const CatImage = () => {
  const [imgSrc,  setImgSrc]  = useState('')
  const [imgDesc, setImgDesc] = useState('')

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
      .then(([{alt_description: alt, urls: {regular: url}, user: {first_name, last_name}}]) => {
        setImgDesc(`Photo by ${first_name} ${last_name} on Unsplash, ${alt}`)
        setImgSrc(url)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <figure>
      <img src={imgSrc} alt={imgDesc} />
      <figcaption>{imgDesc}</figcaption>
    </figure>
  )
}
