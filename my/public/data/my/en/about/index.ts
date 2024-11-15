import { AboutPageProps } from '@/sections/about';
import { hero } from './hero';
import { missionVision } from './MissionVision';
import { grabBanner } from './grabBanner';
import { businessSection } from '../common/businessSection';
import { footerBanner } from '../common/footerBanner';

export const aboutPage: AboutPageProps = {
  hero,
  missionVision,
  grabBanner,
  business: businessSection,
  footerBanner,
};
