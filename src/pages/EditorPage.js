import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import EditorTemplate from "../components/editor/EditorTemplate";
import EditorHeader from '../components/editor/EditorHeader';
import EditorPane from '../components/editor/EditorPane';
import PreviewPane from "../components/editor/PreviewPane";

const editorPage = () => {
    return(
        <div>
            <EditorTemplate
                header={<EditorHeader/>}
                editor={<EditorPane/>}
                preview={<PreviewPane/>}
            />
        </div>
    );
};

export default editorPage;