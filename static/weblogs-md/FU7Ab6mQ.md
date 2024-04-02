---
title: "Processing videos for the web -- A complete guide"
publishedAt: 2024-03-31 16:54:00
lead: "Compressing images and resizing them are easy enough, videos on the other hand can pose some challenges. I'm here to discuss how to tackle them."
keyphrases: ["guide", "ffmpeg", "video compression", "web optimization"]
---

> Here is a [TLDR](#tldr) if you are in a hurry.

## The problem

Optimizing videos for the web can be a challenging task, since different devices support different codecs and we also have to deal with optimal compression levels depending on how much impact the video has on the website and our target audience.

> A bunch of factors to consider, right?  
> -- Not done yet.

Video processing requires way more computing power than image, and they are considered "do it yourself" by web frameworks I've dealt with so far, probably due to above reasons. Additionally it could make the build time unrealisticly long.

<figure>
  <img src="/images/yt-video-metadata.png" alt="youtube video metadata"/>
<figcaption>
YouTube video metadata from the Big Buck Bunny short film (10min)
</figcaption>
</figure>

## The solution

> Step in, FFmpeg! Our Savior.

The ancient, unfriendly CLI tool for nerds, I can never remember its options for an extended period of time.

I decided not to explain in-depth what the different commands do, because I felt it wouldn't be beneficial for this article. If you need to modify them or want to understand them better, refer to the manual.

### Containers

Containers can hold different codecs depending on type. Here are a few of them:

- **MPEG-4** `.mp4` - The wildcard container that supports various codecs, such as `VP8`, `H.264`, `AV1` and a lot more, [supported across browsers.](https://caniuse.com/?search=mp4)

- **Matroska** `.mkv` - Not used in web, but it's worth to mention. It's Open standard, has wide range of support for codecs and a neat channel management. Video recorder OBS uses it by default.

- **WebM** `.webm` - Can contain `VP8`, `VP9`, based on the profile of Matroska, [supported across browsers](https://caniuse.com/?search=webm).

When talking about bitrate and compression efficiency, the primary factor **is not the container** (file ending).

### Codecs

From personal experience and research I found that most devices seem to support codec `H.264` also known as `x264` also also known as _Advanced Video Coding_ (AVC). It's widely adopted and its algorithm comes with many parameters.

The list below contains commands I prepared that strips out the audio, compresses videos with quality loss, 728px width @ 30fps. _Adjust options to your needs._

> Tip of the day: Three consecutive clicks select all code in the elements below (native browser feature).

1. H.264 (AVC) in `.mp4`

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -vf scale=728:-2 -preset veryslow -movflags faststart -an -r 30 output.mp4
```

2. H.265 (HEVC) in `.mp4`

```bash
ffmpeg -i input.mp4 -c:v libx265 -crf 32 -vf scale=728:-2 -preset veryslow -tag:v hvc1 -movflags faststart -an -r 30 output.mp4
```

3. VP9 in `.webm`

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 40 -vf scale=728:-2 -deadline best -an -r 30 output.webm
```

4. AV1 in `.mp4` - **warning: compute resource expensive**

```bash
ffmpeg -i input.mp4 -c:v libaom-av1 -crf 30 -vf scale=728:-2 -an -r 30 output.mp4
```

FFmpeg commands with metadata in a table for your convenience. The results were generated by the commands above on the original [Big Buck Bunny](http://bbb3d.renderfarming.net/) short film, standard 2D full HD version.

| Codec        | Filesize (MiB) | Bitrate (kb/s) | Processed videos                        |
| ------------ | -------------- | -------------- | --------------------------------------- |
| H.254 (AVC)  | 16.9           | 222            | [inspect quality](/videos/bbb-h264.mp4) |
| H.265 (HEVC) | 19.4           | 254            | [inspect quality](/videos/bbb-h265.mp4) |
| VP9          | 27.7           | 345            | [inspect quality](/videos/bbb-vp9.webm) |
| AV1          | -              | -              | -                                       |

> Note: I'm not an expert in how these complex algorithms have support for the web, but people writing MDN probably are. They have [well documented resources](https://developer.mozilla.org/en-US/docs/Web/Media/Formats) touching areas that are out of my reach.

### The `<video>` tag

Browsers have different constrains on how video can be served by a website. It gets tedious quickly. Here are things to look out for:

- Make sure your video is `muted` if `autoplay` attribute is present. Keep muted in anyway, especially if you have no audio.

- Attribute `playsinline` is **required** for some Safari users.

Take this example video with the following attributes:

```html
<video src="/videos/bbb-h264.mp4" loop muted playsinline controls></video>
```

Results in:

<video src="/videos/bbb-h264.mp4" 
  loop 
  muted 
  playsinline 
  controls>
</video>

I tested it and it works well with an iPhone 14, Samsung Android from 2020, Windows 11, rolling Linux. Hopefully it works for you too.

### TLDR

Use the following command as it works the most in my experience. Also don't forget `<video>` [tag attributes required](#the-video-tag) by some browsers.

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -vf scale=728:-2 -preset veryslow -movflags faststart -an -r 30 output.mp4
```

## Final notes & tips

- Videos take large storage size and can hurt your cellular data users. Keep in mind, for them **data is money.**

- If your video doesn't have audio make sure to drop that channel from the video.

- Before starting a long computing process, make sure the result will work for you by previewing.

- Explore alternatives. Do you really need to have videos? For displaying terminal interactions, writing code or any text you are far better off with [asciinema](https://asciinema.org/), rendering them in the form of vectors graphics instead of rasters.

- Test your video on different devices. Use `<source>` tag for cross-platform compatibility.

> "Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it)."  
> -- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

That's it, Good luck with your website!