"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeAPI = void 0;
const googleapis_1 = require("googleapis");
const axios_1 = __importDefault(require("axios"));
class YoutubeAPI {
    static getDescribe(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YoutubeAPI.API_KEY}`;
                const response = yield axios_1.default.get(apiURL);
                const data = response.data.items[0];
                if (data) {
                    const snippet = data.snippet;
                    const statistics = data.statistics;
                    console.log(123);
                    console.log(snippet.title);
                    return {
                        title: snippet.title,
                        channel: snippet.channelTitle,
                        views: statistics.viewCount,
                    };
                }
                else {
                    throw new Error('Video not found.');
                }
            }
            catch (error) {
                // @ts-ignore
                console.error('Error fetching video data:', error.message);
                throw error;
            }
        });
    }
}
exports.YoutubeAPI = YoutubeAPI;
YoutubeAPI.API_KEY = process.env.API_KEY; // Get API key from environment variable
YoutubeAPI.youtube = googleapis_1.google.youtube('v3');
