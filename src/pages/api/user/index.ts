import {NextApiRequest, NextApiResponse} from "next";
import userControler from "@/library/http/controllers/user.controler";
import {executeRouteAction, HTTP_METHODS, RouteActions} from "@/library/http";
import conf from "@/config/index";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {POST, GET} = HTTP_METHODS
  /**
   * Add your routes here
   */
  return await executeRouteAction(<RouteActions> {
    [GET]: userControler.all,
    [POST]: userControler.store
  }, req, res)
}

// force use formidable as
export const config = conf.api.routes.config;
