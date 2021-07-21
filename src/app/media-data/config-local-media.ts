class Config {
  audio: boolean
  video: boolean
  constructor (audio:boolean , video:boolean) {
    this.audio = audio,
    this.video = video
  }
}

export const config = new Config(true , true)
