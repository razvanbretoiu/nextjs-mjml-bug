import {NextApiRequest, NextApiResponse} from "next";
import mjml2html from "mjml";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const template = `<mjml><mj-body><mj-section><mj-column><mj-text>Template</mj-text></mj-column></mj-section></mj-body></mjml>`
  const htmlParseResult = mjml2html(template);
  const html = htmlParseResult.html;

  return res.status(200).json({ html });
}
