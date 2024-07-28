import FooterContent from "../molecules/FooterContent";

function Footer() {
  return (
    <footer className="py-3 w-full flex-initial text-center border-t-[1px] border-slate-300 dark:border-slate-700 secoundary-bg-theme text-gray-500 dark:text-gray-400">
      <FooterContent />
    </footer>
  );
}

export default Footer;
