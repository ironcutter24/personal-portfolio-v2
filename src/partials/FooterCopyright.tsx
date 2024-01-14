type IFooterCopyrightProps = {
  site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-center text-sm text-gray-200">
      {`\u00A9 ${new Date().getFullYear()} ${props.site_name}`}
    </div>
  </div>
);

export { FooterCopyright };
