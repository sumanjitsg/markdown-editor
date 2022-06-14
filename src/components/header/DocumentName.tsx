import { useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import { RootState } from "store";

function DocumentName() {
  const { filename } = useSelector((state: RootState) => state.metadata);

  return (
    <div className="flex items-center gap-x-4">
      <IconDocument />
      <div>{filename}.md</div>
    </div>
  );
}
export default DocumentName;
