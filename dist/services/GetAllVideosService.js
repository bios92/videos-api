"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosService = void 0;
const typeorm_1 = require("typeorm");
const Video_1 = require("../entities/Video");
class GetAllVideosService {
    async execute() {
        const repoVideo = (0, typeorm_1.getRepository)(Video_1.Video);
        const videos = await repoVideo.find({ relations: ["category"] });
        if (!videos) {
            return new Error("Videos are not found!");
        }
        return videos;
    }
}
exports.GetAllVideosService = GetAllVideosService;
