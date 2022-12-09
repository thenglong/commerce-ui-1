import type { NextApiRequest, NextApiResponse } from "next";
import stringify from "fast-safe-stringify";

type ResponseData =
  | {
      message: string;
    }
  | any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json(JSON.parse(stringify(req)));
}
