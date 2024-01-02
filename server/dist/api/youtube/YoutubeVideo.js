"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeVideo = void 0;
class YoutubeVideo {
    constructor(config) {
        this.config = config;
        this.youtubePlayer = null;
        this.initYoutubePlayer();
    }
    initYoutubePlayer() {
        var _a;
        const { videoContainerId, videoId } = this.config;
        const iframe = document.createElement('iframe');
        iframe.id = videoContainerId;
        iframe.width = '640';
        iframe.height = '360';
        iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
        (_a = document.getElementById(videoContainerId)) === null || _a === void 0 ? void 0 : _a.appendChild(iframe);
        this.youtubePlayer = iframe;
    }
    playVideo() {
        if (this.youtubePlayer) {
            this.sendMessageToPlayer('playVideo');
        }
    }
    pauseVideo() {
        if (this.youtubePlayer) {
            this.sendMessageToPlayer('pauseVideo');
        }
    }
    sendMessageToPlayer(command) {
        var _a;
        if (this.youtubePlayer) {
            (_a = this.youtubePlayer.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(JSON.stringify({ event: 'command', func: command }), 'https://www.youtube.com');
        }
    }
}
exports.YoutubeVideo = YoutubeVideo;
