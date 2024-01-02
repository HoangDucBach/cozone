import { google, youtube_v3 } from 'googleapis';
import axios from 'axios';

export class YoutubeAPI {
    private static API_KEY = process.env.API_KEY; // Get API key from environment variable
    private static youtube = google.youtube('v3');

    public static async getDescribe(videoId: string) {
        try {
            const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YoutubeAPI.API_KEY}`;

            const response = await axios.get(apiURL);
            const data = response.data.items[0];

            if (data) {
                const snippet = data.snippet;
                const statistics = data.statistics;

                console.log(123);
                console.log(snippet.title);
                return {
                    title:snippet.title,
                    channel:snippet.channelTitle,
                    views:statistics.viewCount,
                };
            } else {
                throw new Error('Video not found.');
            }
        } catch (error) {
            // @ts-ignore
            console.error('Error fetching video data:', error.message);
            throw error;
        }
    }
}
