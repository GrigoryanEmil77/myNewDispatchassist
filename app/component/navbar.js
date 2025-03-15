'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css"; 
import { Button, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { getServicesType } from '@/_actions/servicesAction';
import { getTrucktype } from '@/_actions/truckAction';
import { getNavbarData } from '@/_actions/navbarAction';

const MyNavbar = () => {
  const [navbars, setNavbars] = useState([]);
  const [service, setService] = useState([]);
  const [truckTypes, setTruckTypes] = useState([]);
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isTruckTypesDropdownOpen, setTruckTypesDropdownOpen] = useState(false);


  const fetchData = async (url, setter) => {
    try {
      const response = await axios.get(url);
      setter(response.data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  const handleOffcanvasToggle = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };

 
  const toggleTruckTypesDropdown = () => {
    setTruckTypesDropdownOpen(!isTruckTypesDropdownOpen);
  };


  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.querySelectorAll('.dropdown-item').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const href = this.getAttribute('href');
          if (href) {
            const targetId = href.substring(1); 
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              const navbarHeight = document.querySelector('.navbar').offsetHeight;
              const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
              
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    }
  }, []);

  
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
        const response = await getServicesType();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setService(response.services);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);
       
      }
    };

    fetchTruckTypes();
  }, []);

  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
        const response = await getTrucktype();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setTruckTypes(response.truck);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);

      }
    };

    fetchTruckTypes();
  }, []);
  
  useEffect(() => {
    const fetchTruckTypes = async () => {
      try {
        const response = await getNavbarData();
        if (response.errMsg) {
          setErrMsg(response.errMsg);
        } else {
          setNavbars(response.data);
        }
      } catch (error) {
        console.error("Error fetching truck types:", error);

      }
    };

    fetchTruckTypes();
  }, []);

  const { home = "", about = "", services = "", trucktypes = "", testimonials = "", faqs = "", contact = "", setup = "", picture = "" } = navbars.length > 0 ? navbars[0] : {};
  const { LoadSearch = "", Booking = "", BrokerSetup = "", Detention = "", Invoicing = "", Factoring = "", Support = "" } = service.length > 0 ? service[0] : {};
  const { DryVan = "", Reefer = "", BoxTruck = "", Flatbed = "", StepDeck = "", PowerOnly = "" } = truckTypes.length > 0 ? truckTypes[0] : {};

  return (
    <Navbar className="navbar navbar-expand-lg fixed-top">
      <NavbarBrand href="/">
      <img
            src={picture||null}
            id="logo"
            alt=''
            className="navbar-brand"
            style={{
              WebkitUserDrag: "none",
              userDrag: "none",
              userSelect: "none",
            }}
          />
      </NavbarBrand>
      <NavbarToggler className="navbar-toggler" onClick={handleOffcanvasToggle} />
      <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <Button close aria-label="Close" onClick={handleOffcanvasToggle} />
        </div>
        <div className="offcanvas-body">
          <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <NavItem className="custom-spacing" data-bs-dismiss="offcanvas" onClick={handleOffcanvasToggle}>
              <NavLink  className="dropdown-item"  href="#Home" onClick={(e) => handleScroll(e, "Home")}>{home}</NavLink>
            </NavItem>
            <NavItem className="custom-spacing" data-bs-dismiss="offcanvas" onClick={handleOffcanvasToggle}>
              <NavLink className="dropdown-item"  href="#About Us" onClick={(e) => handleScroll(e, "About Us")}>{about}</NavLink>
            </NavItem>
         
            <NavItem className="nav-item dropdown custom-spacing" data-bs-dismiss="offcanvas">
  <NavLink className="nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
    {services}
  </NavLink>
  <div className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}>
    <a className="dropdown-item" href="#LOAD SEARCH FTL/LTL" onClick={handleOffcanvasToggle}>
      {LoadSearch}
    </a>
    <a className="dropdown-item" href="#RATE NEGOTIATION & BOOKING" onClick={handleOffcanvasToggle}>
      {Booking.split(" || ").map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== Booking.split(" || ").length - 1 && <br />}
        </React.Fragment>
      ))}
    </a>
    <a className="dropdown-item" href="#BROKER SETUP" onClick={handleOffcanvasToggle}>
      {BrokerSetup}
    </a>
    <a className="dropdown-item" href="#DETENTION LAYOVER TONU" onClick={handleOffcanvasToggle}>
      {Detention.split(" || ").join(" ")}
    </a>
    <a className="dropdown-item" href="#INVOICING" onClick={handleOffcanvasToggle}>
      {Invoicing}
    </a>
    <a className="dropdown-item" href="#FACTORING & INSURANCE ASSISTANCE" onClick={handleOffcanvasToggle}>
      {Factoring.split(" || ").map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== Factoring.split(" || ").length - 1 && <br />}
        </React.Fragment>
      ))}
    </a>
    <a className="dropdown-item" href="#Support" onClick={handleOffcanvasToggle}>
      {Support}
    </a>
    <a 
      className="nav-link dropdown-toggle"
      data-bs-toggle="dropdown"
style={{ fontWeight: "bold", fontSize: "20px" }}
onClick={toggleTruckTypesDropdown}>

      {trucktypes}
    </a>
    <div className={`dropdown-menu ${isTruckTypesDropdownOpen ? 'show' : ''}`}>
      <a className="dropdown-item" href="#DRY VAN" onClick={handleOffcanvasToggle}>{DryVan}</a>
      <a className="dropdown-item" href="#REEFER" onClick={handleOffcanvasToggle}>{Reefer}</a>
      <a className="dropdown-item" href="#BOX TRUCK" onClick={handleOffcanvasToggle}>{BoxTruck}</a>
      <a className="dropdown-item" href="#FLATBED" onClick={handleOffcanvasToggle}>{Flatbed}</a>
      <a className="dropdown-item" href="#STEP DECK" onClick={handleOffcanvasToggle}>{StepDeck}</a>
      <a className="dropdown-item" href="#POWER ONLY" onClick={handleOffcanvasToggle}>{PowerOnly}</a>
    </div>
  </div>
</NavItem>

            <NavItem className="nav-item custom-spacing" data-bs-dismiss="offcanvas">
              <NavLink className="dropdown-item"  href="#FAQ" onClick={handleOffcanvasToggle}>{faqs}</NavLink>
            </NavItem>
            <NavItem className="nav-item custom-spacing" data-bs-dismiss="offcanvas">
              <NavLink className="dropdown-item"  href="#Customer" onClick={handleOffcanvasToggle}>{testimonials}</NavLink>
            </NavItem>
            <NavItem className="nav-item custom-spacing" data-bs-dismiss="offcanvas">
              <NavLink className="dropdown-item"  href="#Contact" onClick={handleOffcanvasToggle}>{contact}</NavLink>
            </NavItem>
            <NavItem className="nav-item custom-spacing" data-bs-dismiss="offcanvas" onClick={handleOffcanvasToggle}>
              <Button color="black"
                    style={{ marginLeft: "10px" }}
               onClick={() => document.getElementById("SETUP")?.scrollIntoView({ behavior: "smooth" })}>
                {setup}
              </Button>
            </NavItem>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
