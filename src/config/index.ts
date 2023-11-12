import { Binance } from "@thirdweb-dev/chains";

const app = {
  environment: process.env.APP_ENV ?? process.env.NODE_ENV
}

const constants = {
  NETWORK: Binance,
  thirdweb: {
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID ?? ''
  }
}

const config = {
  app,
  constants
}

export default config
