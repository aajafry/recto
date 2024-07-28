import Link from "../atom/Link";
import Paragraph from "../atom/Paragraph";


function FooterContent() {
  const footerParagraphStyle = "capitalize text-sm"
  return (
    <>
      <Paragraph style={footerParagraphStyle}>
        all rights reserved @2024
      </Paragraph>
      <Paragraph style={footerParagraphStyle}>
        Design & Development by
        <Link
          href="https://aajafry.github.io/"
          style="text-highlighter-theme font-semibold lowercase ml-1"
        >
          @aajafry
        </Link>
      </Paragraph>
    </>
  );
}

export default FooterContent;
