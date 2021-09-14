import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import EditorTemplate from "../components/editor/EditorTemplate";
import EditorHeader from '../components/editor/EditorHeader';
import EditorPageContainer from "../containers/editor/EditorPageContainer";
import PreviewPaneContainer from "../containers/editor/PreviewPaneContainer";

const editorPage = () => {
    return(
        <div>
            <EditorTemplate
                header={<EditorHeader/>}
                editor={<EditorPageContainer/>}
                preview={<PreviewPaneContainer/>}
            />
        </div>
    );
};

export default editorPage;