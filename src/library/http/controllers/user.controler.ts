import {User} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import userModel from "@/library/models/user.model";
import {getHttpStatus, parseFormData} from "@/library/http";
import _ from "lodash"

const userController = {
  find: async (req: NextApiRequest, res: NextApiResponse) => {
    const whereClause = {'id': _.toNumber(req.query.id)}
    const data = await userModel.find({where: whereClause})

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  all: async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await userModel.all()

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  read: () => {
  },
  store: async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = await parseFormData(req)

    const data = await userModel.create(<User>{
      walletAddress: formData.primary.walletAddress[0]
    });

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  update: () => {
  },
  delete: () => {
  },
}

export default userController
