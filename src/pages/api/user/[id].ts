import {NextApiRequest, NextApiResponse} from "next";
import userControler from "@/library/http/controllers/user.controler";
import {executeRouteAction} from "@/library/http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * Add your routes here
   */
  const actions: any = {
    'GET': userControler.find
  };

  return await executeRouteAction(actions, req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
};
