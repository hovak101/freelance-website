import React from "react";

interface IconProps {
  src: string;
  href?: string;
}

const Icon: React.FC<IconProps> = ({ src, href = "/" }) => {
  const [svgContent, setSvgContent] = React.useState<string>("");

  React.useEffect(() => {
    fetch(src)
      .then(response => response.text())
      .then(text => {
        // Remove any existing fill attributes and add our custom class
        const modifiedSvg = text
          .replace(/fill="[^"]*"/g, '')
          .replace(/<svg/g, '<svg class="icon-svg"');
        setSvgContent(modifiedSvg);
      });
  }, [src]);

  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E8F2] hover:border-primary hover:bg-primary"
        aria-label="social-link"
      >
        <div 
          className="flex h-5 w-5 items-center justify-center [&_.icon-svg]:h-full [&_.icon-svg]:w-full [&_.icon-svg]:fill-[var(--color-body)] group-hover:[&_.icon-svg]:fill-white"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </a>
    </div>
  );
};

export default Icon;
