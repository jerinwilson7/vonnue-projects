import { Common } from '@/assets/svgs';

const imageUrls = [
  Common.BusinessLogoLarge1,
  Common.BusinessLogoLarge2,
  Common.BusinessLogoLarge13,
  Common.BusinessLogoLarge3,
  Common.BusinessLogoLarge4,
  Common.BusinessLogoLarge14,
  Common.BusinessLogoLarge5,
  Common.BusinessLogoLarge6,
  Common.BusinessLogoLarge15,
  Common.BusinessLogoLarge7,
  Common.BusinessLogoLarge8,
  Common.BusinessLogoLarge9,
  Common.BusinessLogoLarge16,
  Common.BusinessLogoLarge10,
  Common.BusinessLogoLarge17,
  Common.BusinessLogoLarge11,
  Common.BusinessLogoLarge12,
];

const imageSmallUrls = [
  Common.BusinessLogoSmall1,
  Common.BusinessLogoSmall2,
  Common.BusinessLogoSmall13,
  Common.BusinessLogoSmall3,
  Common.BusinessLogoSmall4,
  Common.BusinessLogoSmall14,
  Common.BusinessLogoSmall5,
  Common.BusinessLogoSmall6,
  Common.BusinessLogoSmall15,
  Common.BusinessLogoSmall7,
  Common.BusinessLogoSmall8,
  Common.BusinessLogoSmall16,
  Common.BusinessLogoSmall9,
  Common.BusinessLogoSmall10,
  Common.BusinessLogoSmall17,
  Common.BusinessLogoSmall11,
  Common.BusinessLogoSmall12,
];

export const imagesLg = imageUrls.map(image => ({
  url: image,
  alt: 'logo',
}));

export const imagesSm = imageSmallUrls.map(image => ({
  url: image,
  alt: 'logo',
}));
