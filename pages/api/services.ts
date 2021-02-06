// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'
export default (req: NextApiRequest, res: NextApiResponse) => {
   //BY default get request

   //! complex backend logic :(
   console.log('API', services)

   res.status(200).json({ services })
}
