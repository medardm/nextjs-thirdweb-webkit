---
to: src/library/http/controllers/<%= name %>.controller.ts
---
import {<%= h.capitalize(name) %>} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import <%= name %>Model from "@/library/models/<%= name %>.model";
import {getHttpStatus, parseFormData} from "@/library/http";

const <%= name %>Controller = {
  find: async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await <%= name %>Model.findFirst({
      where: {'id': _.toNumber(req.query.id)}
    })

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  all: async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await <%= name %>Model.all()

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  store: async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = await parseFormData(req)

    const data = await <%= name %>Model.create({
      data: {<%= name %>Column: formData.primary.<%= name %>Column[0]}
    });

    return res.status(getHttpStatus("OK").code).json({data: data, success: true})
  },
  update: () => {
  },
  delete: () => {
  },
}

export default <%= name %>Controller



