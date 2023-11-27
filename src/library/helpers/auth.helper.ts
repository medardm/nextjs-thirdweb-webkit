import {NextApiRequest} from "next";
import {ThirdwebAuthUser} from "@thirdweb-dev/auth/next";
import {getUser} from "@/pages/api/auth/[...thirdweb]";

export type AuthUser = ThirdwebAuthUser

export const getAuthUser = async (req: NextApiRequest): Promise<AuthUser> => {
  if (process.env.APP_ENV === 'test') {
    // fake user when testing E2E with cypress
    return <AuthUser>{
      address: '0xd7dCD77D279EeD59C7D2D94982d18FEdf03CaaE8',
      session: {}
    }
  }
  return <AuthUser>await getUser(req);
}
