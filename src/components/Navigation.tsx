import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { navigationItems } from '../data/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo.jpg"
              alt="Amigos Aura Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold aa-primary-dark">Amigos Aura</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-aa-blue-bright relative flex items-center gap-1 ${
                    location.pathname === item.href || (item.children && item.children.some(child => location.pathname === child.href))
                      ? 'aa-blue-primary'
                      : 'aa-primary'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  {(location.pathname === item.href || (item.children && item.children.some(child => location.pathname === child.href))) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aa-blue-primary rounded-full"></div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 animate-fadeIn">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          location.pathname === child.href
                            ? 'bg-blue-50 text-aa-blue-primary font-medium'
                            : 'text-aa-primary hover:bg-gray-50 hover:text-aa-blue-bright'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-aa-primary hover:text-aa-blue-bright"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpandedMenu(mobileExpandedMenu === item.name ? null : item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        item.children && item.children.some(child => location.pathname === child.href)
                          ? 'text-aa-blue-primary bg-blue-50'
                          : 'text-aa-primary hover:text-aa-blue-bright'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpandedMenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileExpandedMenu === item.name && item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-3 py-2 text-sm transition-colors duration-200 ${
                              location.pathname === child.href
                                ? 'text-aa-blue-primary bg-blue-50 font-medium'
                                : 'text-gray-600 hover:text-aa-blue-bright'
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileExpandedMenu(null);
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-aa-blue-primary bg-blue-50'
                        : 'text-aa-primary hover:text-aa-blue-bright'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;