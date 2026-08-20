import PageBanner from '../components/PageBanner';
import Services from '../sections/Services';
import KeyFeatures from '../sections/KeyFeatures';
import StandOut from '../sections/StandOut';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title="Services Built Around Your Goals"
        text="From custom development to marketing and content, explore the full range of services Code's Thinker offers."
      />
      <Services />
      <KeyFeatures />
      <StandOut />
    </>
  );
}
