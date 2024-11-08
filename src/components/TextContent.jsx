const TextContent = ({ text, className, innerHtml }) => (
  <div className="">
    <p className={`text-sm   ${className}`}>{text ||<div  dangerouslySetInnerHTML={{__html:innerHtml}}/>}</p>
  </div>
  );

  export default TextContent;