// Styles
import { ReactElement, ReactText } from "react";

// Types
type Props = {
  text: ReactText;
  showPreview: ReactElement;
};

function SectionHeader({ text, showPreview }: Props) {
  return (
    <header className="flex items-center justify-between py-4 px-3 bg-gray-900">
      <h2 className="uppercase font-medium leading-none tracking-[.14em] text-gray-400">
        {text}
      </h2>
      {showPreview}
    </header>
  );
}

export default SectionHeader;
