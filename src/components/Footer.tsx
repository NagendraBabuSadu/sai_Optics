import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        &copy; 2025 <span className="font-semibold">Sai Optical Express. </span>
        Designed with ❤️ in India.
      </div>
    </footer>
  );
};

export default Footer;
