import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

interface ICategoryRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: ICategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    // Select * from CATEGORIES WHERE NAME = "ALGUM VALOR"
    if (await repo.findOne({ name })) {
      return new Error("Category already exists");
    }

    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
