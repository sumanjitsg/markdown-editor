import React, { ReactElement } from "react";

// Components
import SectionHeader from "./SectionHeader";
import PreviewContent from "./PreviewContent";
import { ReactComponent as IconHidePreview } from "assets/icon-hide-preview.svg";

// Types
type Props = {
  children: React.ReactNode;
  showPreviewState: boolean;
  hidePreview: ReactElement;
};

function PreviewSection({ showPreviewState, hidePreview, children }: Props) {
  return (
    <section
      className={`${
        showPreviewState ? "w-full" : "w-0 lg:w-1/2"
      } flex flex-col`}
    >
      <SectionHeader text="Preview" showPreview={hidePreview} />
      <PreviewContent>{children}</PreviewContent>
    </section>
  );
}

export default PreviewSection;
