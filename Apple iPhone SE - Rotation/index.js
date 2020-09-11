const loader = new PxLoader()
const images = []

for (let i = 0; i < 85; i++) {
  images[i] = loader.addImage(
    `https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.${i}.png`
  )
}
