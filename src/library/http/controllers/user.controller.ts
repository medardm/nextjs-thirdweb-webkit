import {NextApiRequest, NextApiResponse} from "next";
import userModel from "@/library/models/user.model";
import {getHttpStatus, parseFormData} from "@/library/http";
import _ from "lodash"

const userController = {
  find: async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await userModel.findFirst({
      where: {'id': _.toNumber(req.query.id)}
    })

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  all: async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await userModel.all()

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  store: async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = await parseFormData(req)

    const data = await userModel.create({
      data: {walletAddress: formData.primary.walletAddress[0]}
    });

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  update: () => {
  },
  delete: () => {
  },
}

export default userController
