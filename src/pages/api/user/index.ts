import {NextApiRequest, NextApiResponse} from "next";
import userController from "@/library/http/controllers/user.controller";
import {executeRouteAction, HTTP_METHODS, RouteActions} from "@/library/http";
import conf from "@/config/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {POST, GET} = HTTP_METHODS
  /**
   * Add your routes here
   */
  return await executeRouteAction(<RouteActions> {
    [GET]: userController.all,
    [POST]: userController.store
  }, req, res)
}

// force use formidable as parser
export const config = conf.api.routes.config;
