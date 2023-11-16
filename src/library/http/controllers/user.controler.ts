import {User} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import userModel from "@/library/models/user.model";
import {getHttpStatus, parseFormData} from "@/library/http";

const userController = {
  index: () => {
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
