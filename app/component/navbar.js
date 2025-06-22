"use client";
import React, { useState } from 'react';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';

const MyNavbar = ({ service = [], truckTypes = [], navbars = [] }) => {


  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isTruckTypesDropdownOpen, setTruckTypesDropdownOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setOffcanvasOpen(false);
    }
  };

  const toggleServicesDropdown = () => setServicesDropdownOpen(prev => !prev);
  const toggleTruckTypesDropdown = () => setTruckTypesDropdownOpen(prev => !prev);
  const handleOffcanvasToggle = () => setOffcanvasOpen(prev => !prev);

  const {
    DryVan = "", Reefer = "", BoxTruck = "", Flatbed = "",
    StepDeck = "", PowerOnly = ""
  } = truckTypes[0] || {};

  const {
    home = "", about = "", services = "", trucktypes = "",
    testimonials = "", faqs = "", contact = "", setup = "", picture = ""
  } = navbars[0] || {};

  const {
    LoadSearch = "", Booking = "", BrokerSetup = "", Detention = "",
    Invoicing = "", Factoring = "", Support = ""
  } = service[0] || {};


  return (
    <Navbar className="navbar navbar-expand-lg fixed-top">
      <NavbarBrand href="/">
        {picture && (
          <img
            src={picture}
            alt="Logo"
            width="120"
            height="auto"
        
            style={{ WebkitUserDrag: "none", userDrag: "none", userSelect: "none" }}
          />
        )}
      </NavbarBrand>

      <NavbarToggler onClick={handleOffcanvasToggle} />

      <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1">
        <div className="offcanvas-header">
          <Button close aria-label="Close" onClick={handleOffcanvasToggle} />
        </div>
        <div className="offcanvas-body">
          <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <NavItem><NavLink href="#Home" onClick={e => handleScroll(e, "Home")}>{home}</NavLink></NavItem>
            <NavItem><NavLink href="#About Us" onClick={e => handleScroll(e, "About Us")}>{about}</NavLink></NavItem>
            <NavItem className="dropdown">
              <NavLink className="dropdown-toggle" onClick={toggleServicesDropdown}>{services}</NavLink>
              <div className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}>
                <a className="dropdown-item" href="#LOAD SEARCH FTL/LTL" onClick={e => handleScroll(e, "LOAD SEARCH FTL/LTL")}>LOAD SEARCH FTL/LTL</a>
                  <a className="dropdown-item" href="#LOAD SEARCH FTL/LTL" onClick={e => handleScroll(e, "LOAD SEARCH FTL/LTL")}>RATE NEGOTIATION &
                  <br></br> BOOKING</a>
               
                {/* <a className="dropdown-item" href="#RATE NEGOTIATION & BOOKING" onClick={e => handleScroll(e, "RATE NEGOTIATION & BOOKING")}>
                  {Booking.split(" || ").map((part, i) => <React.Fragment key={i}>{part}<br /></React.Fragment>)}
                </a> */}
                <a className="dropdown-item" href="#BROKER SETUP" onClick={e => handleScroll(e, "BROKER SETUP")}>BROKER SETUP</a>
                <a className="dropdown-item" href="#DETENTION LAYOVER TONU" onClick={e => handleScroll(e, "DETENTION LAYOVER TONU")}>DETENTION LAYOVER TONU</a>
                <a className="dropdown-item" href="#INVOICING" onClick={e => handleScroll(e, "INVOICING")}>INVOICING</a>
                <a className="dropdown-item" href="#INVOICING" onClick={e => handleScroll(e, "INVOICING")}>FACTORING & INSURANCE <br></br> ASSISTANCE</a>      
                {/* <a className="dropdown-item" href="#FACTORING & INSURANCE ASSISTANCE" onClick={e => handleScroll(e, "FACTORING & INSURANCE ASSISTANCE")}>
                  {Factoring.split(" || ").map((part, i) => <React.Fragment key={i}>{part}<br /></React.Fragment>)}
                </a> */}
                <a className="dropdown-item" href="#Support" onClick={e => handleScroll(e, "Support")}>24/7 SUPPORT</a>
                <a className="nav-link dropdown-toggle" style={{fontSize:"20px"}} onClick={toggleTruckTypesDropdown}>{trucktypes}</a>
                <div className={`dropdown-menu ${isTruckTypesDropdownOpen ? 'show' : ''}`}>
                  <a className="dropdown-item" href="#DRY VAN" onClick={e => handleScroll(e, "DRY VAN")}>DRY VAN</a>
                  <a className="dropdown-item" href="#REEFER" onClick={e => handleScroll(e, "REEFER")}>REEFER</a>
                  <a className="dropdown-item" href="#BOX TRUCK" onClick={e => handleScroll(e, "BOX TRUCK")}>BOX TRUCK</a>
                  <a className="dropdown-item" href="#FLATBED" onClick={e => handleScroll(e, "FLATBED")}>FLATBED</a>
                  <a className="dropdown-item" href="#STEP DECK" onClick={e => handleScroll(e, "STEP DECK")}>STEP DECK</a>
                  <a className="dropdown-item" href="#POWER ONLY" onClick={e => handleScroll(e, "POWER ONLY")}>POWER ONLY</a>
                </div>
              </div>
            </NavItem>
            <NavItem><NavLink href="#FAQ" onClick={e => handleScroll(e, "FAQ")}>{faqs}</NavLink></NavItem>
            <NavItem><NavLink href="#Customer" onClick={e => handleScroll(e, "Customer")}>{testimonials}</NavLink></NavItem>
            <NavItem><NavLink href="#Contact" onClick={e => handleScroll(e, "Contact")}>{contact}</NavLink></NavItem>
            <NavItem>
              <Button color="black" onClick={() => {
                setOffcanvasOpen(false);
                document.getElementById("SETUP")?.scrollIntoView({ behavior: "smooth" });
              }}>{setup}</Button>
            </NavItem>
          </Nav>
        </div>
      </div>
    </Navbar>

  );
};

export default MyNavbar;
