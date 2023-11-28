import roleModel from "@/library/models/role.model";
import {ROLES} from "@/library/enums/roles.enum";
import enumUtil from "@/library/utils/enum.utils";

export default async function seedRoles() {
  const roleList = enumUtil.getKeys(ROLES)

  for (const value of roleList) {
    const key = Number(ROLES[value])
    await roleModel.create({
      data: {
        id: key,
        name: value
      }
    })
  }
}

