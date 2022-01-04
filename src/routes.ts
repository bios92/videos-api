import { Router } from "express";

//Categories imports
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/category/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";

//Vídeos imports
import { CreateVideoController } from "./controllers/videos/CreateVideoController";
import { DeleteVideoController } from "./controllers/videos/DeleteVideoController";
import { GetAllVideosController } from "./controllers/videos/GetAllVideosController";
import { UpdateVideoController } from "./controllers/videos/UpdateVideoController";

const routes = Router();

//Categories routes
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle); 
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

//Videos routes
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);
routes.put("/videos", new UpdateVideoController().handle);

export { routes };
