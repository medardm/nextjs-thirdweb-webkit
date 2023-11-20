import {NextApiRequest, NextApiResponse} from "next";
import userModel from "@/library/models/user.model";
import {getHttpStatus, parseFormData} from "@/library/http";
import _ from "lodash"
import userRequest from "@/library/http/requests/user.request";

const userController = {
  find: async (req: NextApiRequest, res: NextApiResponse) => {
    const validatedData = await userRequest.validate({'id': _.toNumber(req.query.id)}, 'find')

    const data = await userModel.findFirst({
      where: validatedData
    })

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  all: async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await userModel.all()

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  store: async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = await parseFormData(req)

    const validatedData = await userRequest.validate({
      walletAddress: formData.primary.walletAddress[0]
    }, 'store')

    const data = await userModel.create({
      data: validatedData
    });

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  update: () => {
  },
  delete: () => {
  },
}

export default userController
