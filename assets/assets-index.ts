// =============================================================================
// ASSETS INDEX - Central reference for all portfolio assets
// =============================================================================

// -----------------------------------------------------------------------------
// SCRIBBLES - Hand-drawn SVG elements
// -----------------------------------------------------------------------------

export const SCRIBBLES = {
  arrows: {
    arrow1: 'assets/scribbles/Arrow_1.svg',
    arrow2: 'assets/scribbles/Arrow_2.svg',
    arrow3: 'assets/scribbles/Arrow_3.svg',
  },
  circles: {
    circle1: 'assets/scribbles/Circle_1.svg',
    circle2: 'assets/scribbles/Circle_2.svg',
  },
  lines: {
    line1: 'assets/scribbles/Line_1.svg',
    line2: 'assets/scribbles/Line_2.svg',
  },
  icons: {
    check: 'assets/scribbles/Check_1.svg',
    email: 'assets/scribbles/Email.svg',
    linkedin: 'assets/scribbles/LinkedIn.svg',
    scratch: 'assets/scribbles/Scratch_1.svg',
  }
} as const;

// -----------------------------------------------------------------------------
// CONTACT - Personal images
// -----------------------------------------------------------------------------

export const CONTACT = {
  profile: 'assets/contact/Jacob_Cliff.webp',
} as const;

// -----------------------------------------------------------------------------
// BRANDING PROJECTS - Logo and brand design work
// -----------------------------------------------------------------------------

export const BRANDING = {
  fuegoFC: {
    portfolio: 'assets/branding/fuego-fc/Selected Logo Sheet_Portfolio.webp',
  },
  lyonEspresso: {
    cardMock: 'assets/branding/lyon-espresso/Lyon Espresso Card Mock.webp',
  },
  buildingBlue: {
    logo: 'assets/branding/building-blue/Building Blue FINAL_Square.webp',
  },
  miscSports: {
    portfolio: 'assets/branding/misc-sports/Misc Logos_Portfolio.webp',
  }
} as const;

// -----------------------------------------------------------------------------
// PROJECT PORTFOLIO - Integrated design work
// -----------------------------------------------------------------------------

export const PROJECTS = {
  publicHealth: {
    billboard1Long: 'assets/projects/public-health/BBPH Billboard1_Long.webp',
    billboard1Square: 'assets/projects/public-health/BBPH Billboard1_Square.webp',
    billboard2: 'assets/projects/public-health/BBPH Billboard2.webp',
    fcphBillboard: 'assets/projects/public-health/FCPH Billboard Mock.webp',
    busWrap: 'assets/projects/public-health/FCPH Clinic Bus Wrap Rear_Square.webp',
  },
  ae2s: {
    awardsPoster: 'assets/projects/ae2s/Awards Poster Mockup_Portfolio.webp',
    clientStandards: 'assets/projects/ae2s/Client Service Standards Mockup_Portfolio.webp',
    polyMailers: 'assets/projects/ae2s/Poly Mailers Mockup_Mid.webp',
  },
  burnsville: {
    commReport: 'assets/projects/burnsville/Burnsville Comm Report_Portfolio.webp',
    orgAnalysis: 'assets/projects/burnsville/Burnsville Org Ananlysis Mock_Portfolio.webp',
    strategic: 'assets/projects/burnsville/Burnsville Strat_Portfolio.webp',
  }
} as const;

// -----------------------------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Get asset path with proper base URL handling
 * @param assetPath - Relative path to asset
 * @returns Full asset path
 */
export function getAssetPath(assetPath: string): string {
  return `/${assetPath}`;
}

/**
 * Get random arrow scribble
 * @returns Random arrow asset path
 */
export function getRandomArrow(): string {
  const arrows = Object.values(SCRIBBLES.arrows);
  return arrows[Math.floor(Math.random() * arrows.length)];
}

/**
 * Get random circle scribble
 * @returns Random circle asset path
 */
export function getRandomCircle(): string {
  const circles = Object.values(SCRIBBLES.circles);
  return circles[Math.floor(Math.random() * circles.length)];
}

/**
 * Get featured project images for homepage
 * @returns Array of featured project asset paths
 */
export function getFeaturedProjects(): string[] {
  return [
    PROJECTS.publicHealth.billboard1Long,
    BRANDING.fuegoFC.portfolio,
    PROJECTS.ae2s.awardsPoster,
    BRANDING.lyonEspresso.cardMock,
  ];
}

/**
 * Get all branding showcase images
 * @returns Array of branding asset paths
 */
export function getBrandingShowcase(): string[] {
  return [
    BRANDING.fuegoFC.portfolio,
    BRANDING.lyonEspresso.cardMock,
    BRANDING.buildingBlue.logo,
    BRANDING.miscSports.portfolio,
  ];
}

/**
 * Get public health campaign images
 * @returns Array of public health project asset paths
 */
export function getPublicHealthProjects(): string[] {
  return Object.values(PROJECTS.publicHealth);
}