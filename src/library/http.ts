import {NextApiRequest, NextApiResponse} from "next";
import {StatusCodes} from "http-status-codes";
import formidable from "formidable";

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type RouteActions = {
  [HTTP_METHODS.GET]: any
  [HTTP_METHODS.POST]: any
  [HTTP_METHODS.PUT]: any
  [HTTP_METHODS.PATCH]: any
  [HTTP_METHODS.DELETE]: any
}

export const executeRouteAction = async (actions: RouteActions, req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method as HTTP_METHODS

  if (!method || !actions[method as HTTP_METHODS]) {
    const responseStatus = getHttpStatus('METHOD_NOT_ALLOWED')
    return res
      .status(responseStatus.code)
      .json({error: responseStatus.phrase, success: false})
  }

  let response
  try {
    response = await actions[method](req, res)
  } catch (e: any) {
    response = res
      .status(getHttpStatus('INTERNAL_SERVER_ERROR').code)
      .json({error: e, success: false})
  }

  return response
}

export const parseFormData = async (req: NextApiRequest): Promise<{ primary: any, files: any }> => {
  const form = formidable()

  const formData = await form.parse(req)

  return {
    primary: formData[0],
    files: formData[1]
  }
}

export const getHttpStatus = (responsePhrase: keyof typeof StatusCodes): { code: any, phrase: string } => {
  return {
    code: StatusCodes[responsePhrase],
    phrase: responsePhrase
  }
}
