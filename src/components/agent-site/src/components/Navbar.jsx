import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSticky, setIsSticky } = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      }
       else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  //navitems array
  const navItems = [
    {link: "Home", path: "home"},
    {link: "Service", path: "serivce"},
    {link: "About", path: "about"},
    {link: "Product", path: "product"},
    {link: "Testimonial", path: "testimonial"},
    {link: "FAQ", path: "faq"},
  ]
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <span className="text-[#263238]">NEXCENT</span>
          </a>

          //navitem for large device  */
          <ul className="md:flex space-x-12 hidden">
            {
                navItems.map(({link, path}) => <link key={path} to={path}>{link}</link>)
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
