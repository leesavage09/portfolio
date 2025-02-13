import { NextApiRequest, NextApiResponse } from 'next';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('I was asked to wakeUp');

  res.status(200).send('OK');
};

export default handle;
