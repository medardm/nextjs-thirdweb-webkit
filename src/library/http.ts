import {NextApiRequest, NextApiResponse} from "next";
import {StatusCodes} from "http-status-codes";
import formidable from "formidable";

export const executeRouteAction = async (actions: any, req: NextApiRequest, res: NextApiResponse) => {
  if (!req.method || !actions[req.method]) {
    const responseStatus = getHttpStatus('METHOD_NOT_ALLOWED')
    return res
      .status(responseStatus.code)
      .json({message: responseStatus.phrase, success: false})
  }

  let response
  try {
    response = await actions[req.method](req, res)
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
