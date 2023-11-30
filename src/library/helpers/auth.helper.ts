import {NextApiRequest} from "next";
import {ThirdwebAuthUser} from "@thirdweb-dev/auth/next";
import {getUser} from "@/pages/api/auth/[...thirdweb]";
import userModel from "@/library/models/user.model";
import config from "@/config/index";

export type AuthUser = ThirdwebAuthUser

export const getAuthUser = async (req: NextApiRequest): Promise<AuthUser> => {
  if (process.env.APP_ENV === 'test' && !config.app.guards.enabled) {
    /**
     * This is helpful when testing the API thru postman
     */
    let testUser = await userModel.findFirst()
    if (!testUser) {
      testUser = await userModel.create({
        data: {
          walletAddress: '0xd7dCD77D279EeD59C7D2D94982d18FEdf03CaaE8'
        }
      })
    }
    return <AuthUser>{
      address: testUser.walletAddress,
      session: {
        ...testUser
      }
    }
  }
  return <AuthUser>await getUser(req);
}
