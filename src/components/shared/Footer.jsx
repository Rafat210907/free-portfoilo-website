
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-40 pb-4 relative">      
      <div className="pt-5 border-t border-dark/20">
        <p className="text-center text-[13px] text-black">
          Copyright © | Developed By{" "}
          <Link
            to="https://guns.lol/zerox6968"
            target="_blank"
            className="text-blue-600"
          >
            Tahsan Ahmed Rafat
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
