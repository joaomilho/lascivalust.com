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
ffmpeg -i tea-time.mp4 \
    -vcodec libvpx-vp9 -b:v 1M -acodec libvorbis \
    tea-time.webm

ffmpeg -i tea-time.webm \
    -map_metadata -1 -c:v copy -c:a copy \
    tea-time.webm
```


Optimize images

```
cwebp noir.png -o noir.webp
cwebp noir-portrait.png -o noir-portrait.webp
cwebp smoke-cartoon.png -o smoke-cartoon.webp
cwebp smoke-retro.png -o smoke-retro.webp
cwebp smoke.png -o smoke.webp

cwebp 1.jpg -o 1.webp
cwebp 2.jpg -o 2.webp
cwebp 3.jpg -o 3.webp
cwebp 4.jpg -o 4.webp
cwebp 5.jpg -o 5.webp
cwebp 6.jpg -o 6.webp
cwebp 7.jpg -o 7.webp
cwebp 8.jpg -o 8.webp
cwebp 9.jpg -o 9.webp
cwebp 10.jpg -o 10.webp
cwebp 11.jpg -o 11.webp
cwebp 12.jpg -o 12.webp
cwebp 13.jpg -o 13.webp
cwebp 14.jpg -o 14.webp
cwebp 15.jpg -o 15.webp
cwebp 16.jpg -o 16.webp
cwebp 17.jpg -o 17.webp
cwebp 18.jpg -o 18.webp
cwebp 19.jpg -o 19.webp
cwebp 20.jpg -o 20.webp
cwebp 21.jpg -o 21.webp
cwebp 22.jpg -o 22.webp
cwebp 23.jpg -o 23.webp
cwebp 24.jpg -o 24.webp
cwebp 25.jpg -o 25.webp
cwebp 26.jpg -o 26.webp

cwebp sinsearch.jpeg -o sinsearch.webp
cwebp mistress_guide_468x60_2.gif -o mistress_guide.webp
cwebp bdsm-lg.jpg -o openadultdirectory.webp
cwebp herrinkontaktebanner02.jpg -o herrinkontakte.webp
cwebp mistress-advisor-banner2.jpg -o mistress-advisor.webp
```