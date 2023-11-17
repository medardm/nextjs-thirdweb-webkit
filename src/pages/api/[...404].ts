import {NextApiRequest, NextApiResponse} from "next";
import {getHttpStatus} from "@/library/http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(getHttpStatus("NOT_FOUND").code).json({
    message: getHttpStatus("NOT_FOUND").phrase,
  })
}
