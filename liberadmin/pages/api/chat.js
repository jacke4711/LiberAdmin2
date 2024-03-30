// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Placeholder response - replace with your OpenAI API call
    res.status(200).json({ answer: "This is a placeholder response." });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
