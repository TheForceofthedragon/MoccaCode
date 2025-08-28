'use client'
import Image, { ImageProps } from 'next/image'

function shimmer(w: number, h: number) {
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g"><stop stop-color="#eee" offset="20%"/><stop stop-color="#ddd" offset="50%"/><stop stop-color="#eee" offset="70%"/></linearGradient></defs>
    <rect width="${w}" height="${h}" fill="#eee"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`
}
function toBase64(str: string) {
  if (typeof window === 'undefined') return Buffer.from(str).toString('base64')
  return window.btoa(str)
}

export default function SmartImage(props: ImageProps & { width: number; height: number }) {
  const { width, height, alt, ...rest } = props
  const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`
  return <Image alt={alt} placeholder="blur" blurDataURL={blurDataURL} width={width} height={height} {...rest} />
}
