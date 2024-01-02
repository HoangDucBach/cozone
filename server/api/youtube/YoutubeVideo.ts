interface YoutubeApiConfig {
    videoContainerId: string;
    videoId: string;
}

export class YoutubeVideo {
    private youtubePlayer: HTMLIFrameElement | null = null;

    constructor(private config: YoutubeApiConfig) {
        this.initYoutubePlayer();
    }

    private initYoutubePlayer() {
        const {videoContainerId, videoId} = this.config;
        const iframe = document.createElement('iframe');
        iframe.id = videoContainerId;
        iframe.width = '640';
        iframe.height = '360';
        iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;

        document.getElementById(videoContainerId)?.appendChild(iframe);

        this.youtubePlayer = iframe;
    }

    public playVideo() {
        if (this.youtubePlayer) {
            this.sendMessageToPlayer('playVideo');
        }
    }

    public pauseVideo() {
        if (this.youtubePlayer) {
            this.sendMessageToPlayer('pauseVideo');
        }
    }

    private sendMessageToPlayer(command: string) {
        if (this.youtubePlayer) {
            this.youtubePlayer.contentWindow?.postMessage(
                JSON.stringify({event: 'command', func: command}),
                'https://www.youtube.com'
            );
        }
    }
}
