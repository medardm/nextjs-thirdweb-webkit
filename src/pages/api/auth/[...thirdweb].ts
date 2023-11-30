import {ThirdwebAuth} from "@thirdweb-dev/auth/next";
import {PrivateKeyWallet} from "@thirdweb-dev/auth/evm";
import userModel from "@/library/models/user.model";
import {serialize} from "@/library/utils/json.utils";

export const {ThirdwebAuthHandler, getUser} = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
  callbacks: {
    onLogin: async (address): Promise<any> => {
      console.log('login event')
      // save if new or update
      const user = await userModel.login({
        walletAddress: address
      })

      const formattedRoles = user.roles.map(val => {
        return {
          assignedAt: val.createdAt,
          ...val.role,
        }
      })

      // store user session data in session
      return serialize({
        id: user.id,
        walletAddress: user.walletAddress,
        lastLoginAt: user.lastLoginAt,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        roles: formattedRoles,
      })
    },
    onUser: async (user) => {
      // Here we can run side-effects whenever a user is fetched from the client side
      console.log('onUser event')
      return {}
      // provide any extra user data to be sent to the client
      // along with the default user object.
      // return user;
    },
    onLogout: async (user) => {
      // Finally, we can run any side-effects whenever a user logs out.
      console.log('onlogout event')
    },
  },
});

export default ThirdwebAuthHandler();
