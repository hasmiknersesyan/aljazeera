const { I } = inject();

export class LivePage {
  videoPlayer: string;
  switchPlayerButton: string;

  constructor() {
    this.videoPlayer = '#vjs_video_3';
    this.switchPlayerButton = '#liveStreamPlayerHelpButton';
  }

  async seeVideoPlayer() {
    I.seeElement(this.videoPlayer);
  }

  async seeSwitchPlayerButton() {
    I.seeElement(this.switchPlayerButton);
  }
}

export default new LivePage();
