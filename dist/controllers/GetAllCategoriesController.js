"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesController = void 0;
const GetAllCategoriesServices_1 = require("../services/GetAllCategoriesServices");
class GetAllCategoriesController {
    async handle(request, response) {
        const service = new GetAllCategoriesServices_1.GetAllCategoriesService();
        const result = await service.execute();
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.GetAllCategoriesController = GetAllCategoriesController;
