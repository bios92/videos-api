import { Router } from "express";

//Categories
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/category/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";


//Vídeos
import { CreateVideoController } from "./controllers/videos/CreateVideoController";
import { GetAllVideosController } from "./controllers/videos/GetAllVideosController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
