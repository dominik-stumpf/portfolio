# portfolio

## Optimization

### Video processing

List ffmpeg commands used for video processing:

1. **AVC** - MP4 (most preferred)

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -vf scale=728:-2 -preset veryslow -movflags faststart -an -r 30 output.mp4
```

2. **HEVC** - MP4

```bash
ffmpeg -i input.mp4 -c:v libx265 -crf 32 -vf scale=728:-2 -preset veryslow -tag:v hvc1 -movflags faststart -an -r 30 output.mp4
```

3. **VP9** - WebM

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 40 -vf scale=728:-2 -deadline best -an -r 30 output.webm
```

4. **AV1** - MP4 (least preferred)

```bash
ffmpeg -i input.mp4 -c:v libaom-av1 -crf 30 -vf scale=728:-2 -an -r 30 output.mp4
```

Command for aoc clip:

```bash
ffmpeg -i input-src.mkv -vf "crop=1222:1328:0:0" -ss 00:00:01.22 -to 00:00:15.5 output-src.mkv
```
