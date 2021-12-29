import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";

export class GetAllVideosService {
  async execute() {
    const repoVideo = getRepository(Video);

    const videos = await repoVideo.find({relations:["category"]});

    if (!videos) {
      return new Error("Videos are not found!");
    }

    return videos;
  }
}
