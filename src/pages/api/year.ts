import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const currentYear = new Date().getFullYear();
    res.status(200).json({ year: currentYear });
}
