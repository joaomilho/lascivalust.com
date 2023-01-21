This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Deploy to GH pages:

```sh
pnpm run deploy
```

Optimize video

- -an removes audio

```
ffmpeg -i smoke-cartoon.mov \
    -vcodec libvpx-vp9 -b:v 1M -acodec libvorbis \
    smoke-cartoon-1.webm

ffmpeg -i smoke-cartoon-1.webm \
    -map_metadata -1 -c:v copy -c:a copy \
    smoke-cartoon-2.webm
```


Optimize images

```
cwebp noir.png -o noir.webp
cwebp noir-portrait.png -o noir-portrait.webp
cwebp smoke-cartoon.png -o smoke-cartoon.webp
cwebp smoke-retro.png -o smoke-retro.webp
cwebp smoke.png -o smoke.webp

cwebp 3.jpg -o 3.webp
cwebp 4.jpg -o 4.webp
cwebp 6.jpg -o 6.webp
cwebp 7.jpg -o 7.webp
cwebp 8.jpg -o 8.webp
cwebp 9.jpg -o 9.webp
cwebp 10.jpg -o 10.webp
cwebp 11.jpg -o 11.webp
cwebp 12.jpg -o 12.webp
cwebp 13.jpg -o 13.webp
```