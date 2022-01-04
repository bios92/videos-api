import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";

interface VideoUpdateResquest {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class UpdateVideoService {
  async execute({
    id,
    name,
    description,
    duration,
    category_id,
  }: VideoUpdateResquest) {
    
    const repo = getRepository(Video);

    const video = await repo.findOne(id);

    if (!video) {
      return new Error("Video does not exist!");
    }

    video.name = name || video.name;
    video.description = description || video.description;
    video.duration = duration || video.duration;
    video.category_id = category_id || video.category_id;

    await repo.save(video);
  }
}
