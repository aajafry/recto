import Paragraph from "../atom/Paragraph";

const dividerSpanStyle = "flex-1 border-b md:border-l border-highlighter-theme";
function Divider() {
  return (
    <div className="h-full w-full md:w-auto flex-center flex-row md:flex-col gap-4">
      <span className={dividerSpanStyle}></span>
      <Paragraph style="p-3 uppercase font-semibold rounded-full border-[1px] border-highlighter-theme">
        or
      </Paragraph>
      <span className={dividerSpanStyle}></span>
    </div>
  );
}

export default Divider;