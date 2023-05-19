import {NextResponse} from "next/server";
import mjml2html from "mjml";

export async function GET(request: Request) {
  const template = `<mjml><mj-body><mj-section><mj-column><mj-text>Template</mj-text></mj-column></mj-section></mj-body></mjml>`
  const htmlParseResult = mjml2html(template);
  const html = htmlParseResult.html;

  return NextResponse.json({ html });
}
