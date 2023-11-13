import {faker} from "@faker-js/faker";
import userModel from "@/library/models/user.model";
import {User} from "@prisma/client";

const userFactory = {
  /**
   * Initialize model attributes
   */
  definition: {
    walletAddress: faker.string.hexadecimal({length: 40}),
  },
  reloadDefinition: () => {
    userFactory.setDefinition(<User> {
      walletAddress: faker.string.hexadecimal({length: 40})
    })
  },
  /**
   * Custom definitions
   */
  setDefinition: (definition: User) => {
    userFactory.definition = {
      ...definition
    }

    return userFactory
  },
  /**
   * Create one or multiple model records
   */
  create: async (quantity = 1): Promise<User[]> => {
    let records: User[] = [];
    for (let i = 0; i < quantity; i++) {
      userFactory.reloadDefinition()
      records.push(<User> await userModel.create(userFactory.definition as User))
    }
    return records
  }
}

export default userFactory
