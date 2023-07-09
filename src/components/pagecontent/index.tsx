import { Component, JSXElement } from "solid-js";

const PageContent: Component<{ children: JSXElement }> = (props) => {
  return (
    <>
      <div class="flex justify-center items-center w-screen m h-screen bg-slate-900">
        {props.children}
      </div>
    </>
  );
}

export default PageContent;