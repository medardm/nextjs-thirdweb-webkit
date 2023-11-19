import {NextApiRequest, NextApiResponse} from "next";
import userController from "@/library/http/controllers/user.controller";
import {executeRouteAction} from "@/library/http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * Add your routes here
   */
  const actions: any = {
    'GET': userController.find
  };

  return await executeRouteAction(actions, req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
};
