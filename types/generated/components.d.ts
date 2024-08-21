import type { Schema, Attribute } from '@strapi/strapi';

export interface TitlesTitle extends Schema.Component {
  collectionName: 'components_titles_titles';
  info: {
    displayName: 'Title';
    icon: 'alien';
  };
  attributes: {
    Title: Attribute.String;
    SubTitle: Attribute.Text;
  };
}

export interface TestsTests extends Schema.Component {
  collectionName: 'components_tests_tests';
  info: {
    displayName: 'Test';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    TestName: Attribute.String;
    Amount: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface TestsTestList extends Schema.Component {
  collectionName: 'components_tests_test_lists';
  info: {
    displayName: 'TestList';
    icon: 'filter';
  };
  attributes: {
    Tests: Attribute.Component<'tests.tests', true>;
  };
}

export interface PartnershipPartnerShip extends Schema.Component {
  collectionName: 'components_partnership_partner_ships';
  info: {
    displayName: 'PartnerShip';
    icon: 'alien';
  };
  attributes: {
    Scheme: Attribute.String;
    Description: Attribute.Text;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartnershipPartnerShipList extends Schema.Component {
  collectionName: 'components_partnership_partner_ship_lists';
  info: {
    displayName: 'PartnerShipList';
  };
  attributes: {
    SchemeList: Attribute.Component<'partnership.partner-ship', true>;
  };
}

export interface NavbarTabs extends Schema.Component {
  collectionName: 'components_navbar_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    links: Attribute.Component<'navbar.link', true>;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bulletList';
  };
  attributes: {
    Tabs: Attribute.Component<'navbar.tabs', true>;
  };
}

export interface NavbarLink extends Schema.Component {
  collectionName: 'components_navbar_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    Text: Attribute.String;
    URL: Attribute.String;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
  };
  attributes: {
    Header: Attribute.String;
  };
}

export interface FacilitiesFacility extends Schema.Component {
  collectionName: 'components_facilities_facilities';
  info: {
    displayName: 'Facility';
    icon: 'arrowRight';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.Text;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FacilitiesCoreFacilities extends Schema.Component {
  collectionName: 'components_facilities_core_facilities';
  info: {
    displayName: 'CoreFacilities';
    icon: 'apps';
  };
  attributes: {
    Facility: Attribute.Component<'facilities.facility', true>;
  };
}

export interface ExperiencePatientExperiences extends Schema.Component {
  collectionName: 'components_experience_patient_experiences';
  info: {
    displayName: 'PatientExperiences';
    icon: 'eye';
  };
  attributes: {
    PatientExperience: Attribute.Component<'experience.experience', true>;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'filter';
  };
  attributes: {
    Name: Attribute.String;
    Designation: Attribute.String;
    Profile: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Experience: Attribute.Text;
  };
}

export interface CarouselCarousel extends Schema.Component {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'titles.title': TitlesTitle;
      'tests.tests': TestsTests;
      'tests.test-list': TestsTestList;
      'partnership.partner-ship': PartnershipPartnerShip;
      'partnership.partner-ship-list': PartnershipPartnerShipList;
      'navbar.tabs': NavbarTabs;
      'navbar.navbar': NavbarNavbar;
      'navbar.link': NavbarLink;
      'header.header': HeaderHeader;
      'facilities.facility': FacilitiesFacility;
      'facilities.core-facilities': FacilitiesCoreFacilities;
      'experience.patient-experiences': ExperiencePatientExperiences;
      'experience.experience': ExperienceExperience;
      'carousel.carousel': CarouselCarousel;
      'banner.banner': BannerBanner;
    }
  }
}
