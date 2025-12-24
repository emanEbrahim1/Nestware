import svgPaths from "./svg-rspfni7o73";
import clsx from "clsx";
import { useState, useEffect } from "react";
import "../styles/carousel.css";
import OurServices from "../components/OurServices";
import Container from "./Container";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute size-[70px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
        {children}
      </svg>
    </div>
  );
}

function Link({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[16px]">{children}</div>
    </div>
  );
}
type Group2VectorProps = {
  additionalClassNames?: string;
};

function Group2Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<Group2VectorProps>) {
  return (
    <div className={clsx("absolute bottom-0 top-[26.1%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 106">
        {children}
      </svg>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[23px] items-start left-[190px] not-italic w-[507px]", additionalClassNames)}>
      <p className="font-['Arvo:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#212121] text-[32px] w-full">{text}</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[83px] leading-[30px] relative shrink-0 text-[24px] text-neutral-200 w-full">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid relative w-[284px]", additionalClassNames)}>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-1px] whitespace-pre">{text}</p>
    </div>
  );
}
type LinkTextProps = {
  text: string;
  onClick?: () => void;
};

function LinkText({ text, onClick }: LinkTextProps) {
  return (
    <div className="h-[21px] relative shrink-0 w-[284px] cursor-pointer" onClick={onClick}>
      <Text1 text={text} additionalClassNames="h-[21px]" />
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-[284px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[284px]">
        <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[2px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
  onClick?: () => void;
};

function Text({ text, additionalClassNames = "", onClick }: TextProps) {
  return (
    <div className={clsx("grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer", additionalClassNames)} onClick={onClick}>
      <div className="[grid-area:1_/_1] bg-[#5a47fb] h-[40px] ml-0 mt-0 w-[148px]" />
      <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] ml-[15px] mt-[9px] not-italic relative text-[16px] text-nowrap text-white whitespace-pre">{text}</p>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    quote: "Working with Nestware has elevated our entire development process. Their software solutions are robust, scalable, and their support team is outstanding. Best decision we made this year!",
    initials: "MC",
    name: "Michael Chen",
    title: "CTO, Digital Innovations Inc"
  },
  {
    id: 2,
    quote: "Nestware transformed our digital presence completely. Their attention to detail and commitment to excellence is unmatched. The team went above and beyond our expectations.",
    initials: "SJ",
    name: "Sarah Johnson",
    title: "CEO, TechVision Solutions"
  },
  {
    id: 3,
    quote: "The level of professionalism and technical expertise Nestware brings is exceptional. They delivered our project on time and exceeded all quality benchmarks. Highly recommended!",
    initials: "DM",
    name: "David Martinez",
    title: "Product Lead, Innovation Labs"
  },
  {
    id: 4,
    quote: "Partnering with Nestware was a game-changer for our business. Their innovative approach and seamless execution helped us scale faster than we ever imagined possible.",
    initials: "ER",
    name: "Emily Rodriguez",
    title: "Founder, StartupHub"
  }

];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white relative w-full" style={{ minHeight: '6000px' }} data-name="Home">
      {/* Fixed Navigation Bar Container - Outside overflow container */}
      <nav className={clsx(
        "fixed left-1/2 top-0 translate-x-[-50%] w-auto z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg  px-4" : ""
      )}>
        <div className="relative h-[100px] w-[1440px] mx-auto">
          <div className="absolute h-[30px] left-[142px] top-[32px] w-[27.933px] cursor-pointer transition-transform duration-500 hover:rotate-[360deg]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
              <g id="Frame 2">
                <path d={svgPaths.p1c13e1c0} fill="var(--fill-0, #1A1A1A)" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="absolute h-[36px] left-[213.98px] top-[32px] w-[1084.02px]" data-name="Container">
            <div className="absolute content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[21px] items-center leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-center text-nowrap top-1/2 translate-y-[-50%] whitespace-pre">
              <p onClick={() => scrollToSection('about')} className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#5A47FB] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5A47FB] after:transition-all after:duration-300 hover:after:w-full">About</p>
              <p onClick={() => scrollToSection('services')} className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#5A47FB] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5A47FB] after:transition-all after:duration-300 hover:after:w-full">Services</p>
              <p onClick={() => scrollToSection('vision')} className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#5A47FB] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5A47FB] after:transition-all after:duration-300 hover:after:w-full">Vision</p>
              <p onClick={() => scrollToSection('process')} className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#5A47FB] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5A47FB] after:transition-all after:duration-300 hover:after:w-full">Process</p>
              <p onClick={() => scrollToSection('testimonials')} className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#5A47FB] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5A47FB] after:transition-all after:duration-300 hover:after:w-full">Testimonials</p>
            </div>
          </div>
          <div className="absolute h-[32px] right-[142px] top-[36px] w-[98px]">
            <div className="absolute contents left-[-10.25px] top-[-4px]">
              <div className="absolute h-[36px] left-[-10.25px] top-[-4px] w-[108.247px] transition-transform duration-300 hover:scale-105 cursor-pointer">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 36">
                  <path d={svgPaths.p373fe740} fill="var(--fill-0, #1A1A1A)" id="Rectangle 1" className="transition-colors duration-300 hover:fill-[#5A47FB]" />
                </svg>
              </div>
              <p onClick={() => scrollToSection('process')} className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[22.5px] leading-[20px] left-[44.43px] text-[14px] text-center text-white top-[2.75px] translate-x-[-50%] w-[87.26px]">Get in Touch</p>
            </div>
          </div>
        </div>
      </nav>
      <div id="hero" className="absolute bg-white h-[587px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[1440px]">
        <div className="absolute h-[331px] left-[255px] top-[170px] w-[906px]">
          <div className="absolute content-stretch flex flex-col gap-[51px] items-center left-0 top-0 w-[906px]">
            <div className="h-[143px] relative shrink-0 w-full">
              <div className="absolute contents inset-0 illustration-animate">
                <div className="absolute bottom-0 left-0 right-[89.96%] top-[25.81%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 107">
                    <path d={svgPaths.p11f6b580} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
                <Group2Vector additionalClassNames="left-[12.71%] right-[76.91%]">
                  <path d={svgPaths.p32df4400} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                </Group2Vector>
                <div className="absolute bottom-0 left-[25.76%] right-[64.19%] top-[25.95%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 106">
                    <path d={svgPaths.p1071d0f0} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-[38.48%] right-[54.84%] top-0" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 143">
                    <g id="Vector">
                      <mask fill="white" id="path-1-inside-1_3_944">
                        <path d={svgPaths.p3a755a00} />
                      </mask>
                      <path d={svgPaths.p3a755a00} fill="var(--fill-0, #5A47FB)" />
                      <path d={svgPaths.p35fbbb80} fill="var(--stroke-0, black)" mask="url(#path-1-inside-1_3_944)" />
                    </g>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-[65.84%] right-[23.51%] top-[26.1%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 106">
                    <path d={svgPaths.p3e1b1d80} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-[79.16%] right-[13.05%] top-[26.1%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 106">
                    <path d={svgPaths.p27a9e200} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
                <Group2Vector additionalClassNames="left-[89.62%] right-0">
                  <path d={svgPaths.p13691280} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                </Group2Vector>
                <div className="absolute bottom-0 left-[47.83%] right-[36.83%] top-[25.81%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 107">
                    <path d={svgPaths.p2af55b70} fill="var(--fill-0, #5A47FB)" id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[723px]">
              <div className="content-stretch flex flex-col gap-[11px] items-center not-italic relative shrink-0 text-center w-full">
                <p className="font-['Arvo:Regular',sans-serif] h-[32px] leading-[20px] relative shrink-0 text-[#1b1b1b] text-[48px] w-full">Where Ideas Become Actions</p>
                <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[45px] leading-[22px] relative shrink-0 text-[#1a1a1a] text-[18px] w-full">Nestware helps you grow through technology, design, and mentorship.</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0">
                <Text text="Explore Services" onClick={() => scrollToSection('services')} />
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer" onClick={() => window.location.href = 'mailto:hello@nestware.com'}>
                  <div className="[grid-area:1_/_1] border border-[#5a47fb] border-solid h-[40px] ml-0 mt-0 w-[148px]" />
                  <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] ml-[29px] mt-[9px] not-italic relative text-[#5a47fb] text-[16px] text-nowrap whitespace-pre">Get in Touch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[19px] left-[73px] top-[205.5px] w-[10px] illustration-animate">
            <div className="absolute inset-[-1.96%_-47.26%_-43.97%_-43.54%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 28">
                <g filter="url(#filter0_d_3_946)" id="Vector 297">
                  <path d={svgPaths.p15721b00} stroke="var(--stroke-0, #1B1B1B)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.7252" id="filter0_d_3_946" width="19.0798" x="-8.9407e-08" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_946" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_946" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute h-[88.637px] left-[228.46px] top-[296px] w-[100.544px] illustration-animate">
          <div className="absolute inset-[-0.18%_-3.98%_-9.58%_-4.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 98">
              <g filter="url(#filter0_d_3_858)" id="Vector 296">
                <path d={svgPaths.p27aa9d40} stroke="var(--stroke-0, #1B1B1B)" strokeDasharray="9 9" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="97.2883" id="filter0_d_3_858" width="109.044" x="-2.98023e-08" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_858" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_858" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div id="testimonials" className="absolute h-[532px] left-1/2 top-[4934px] translate-x-[-50%] w-[1528px]" data-section="testimonials">
        <p className="absolute font-['Arvo:Regular',sans-serif] leading-[20px] left-[calc(50%-310px)] not-italic text-[#2c2c2c] text-[48px] text-nowrap top-[50px] whitespace-pre" data-section-heading="testimonials">What people are saying</p>
        <div className="absolute h-[114px] left-[1024px] top-0 w-[117.202px] illustration-animate">
          <div className="absolute bottom-[-1.9%] left-[-1.28%] right-[-1.28%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 117">
              <g id="Frame 40">
                <g filter="url(#filter0_d_3_897)" id="Vector 6">
                  <path d={svgPaths.p36882730} fill="var(--fill-0, white)" />
                </g>
                <g id="Testimonial-2--Streamline-Brooklyn">
                  <path d={svgPaths.p2fc8cf80} fill="var(--fill-0, #5A47FB)" id="Vector" />
                  <path d={svgPaths.p2f69f940} fill="var(--fill-0, #5A47FB)" id="Vector_2" />
                  <path d={svgPaths.p68afc00} fill="var(--fill-0, #5A47FB)" id="Vector_3" />
                  <path d={svgPaths.p2d155e00} fill="var(--fill-0, #5A47FB)" id="Vector_4" />
                  <path d={svgPaths.p1be72000} fill="var(--fill-0, #5A47FB)" id="Vector_5" />
                  <path d={svgPaths.pbbd8e00} fill="var(--fill-0, #5A47FB)" id="Vector_6" />
                  <path d={svgPaths.p1b43de80} fill="var(--fill-0, #5A47FB)" id="Vector_7" />
                  <path d={svgPaths.p84dbf00} fill="var(--fill-0, #5A47FB)" id="Vector_8" />
                  <path d={svgPaths.p908f300} fill="var(--fill-0, #5A47FB)" id="Vector_9" />
                  <path d={svgPaths.p31f29740} fill="var(--fill-0, #1B1B1B)" id="Vector_10" />
                  <path d={svgPaths.p2eb42200} fill="var(--fill-0, #1B1B1B)" id="Vector_11" />
                  <path d={svgPaths.p3b7a1ef0} fill="var(--fill-0, #1B1B1B)" id="Vector_12" />
                  <path d={svgPaths.p2832f380} fill="var(--fill-0, #FFD300)" id="Vector_13" />
                  <path d={svgPaths.p3f2c4400} fill="var(--fill-0, #FFD300)" id="Vector_14" />
                  <path d={svgPaths.p8e6f900} fill="var(--fill-0, #FFD300)" id="Vector_15" />
                  <path d={svgPaths.p3bcc5900} fill="var(--fill-0, #FFD300)" id="Vector_16" />
                  <path d={svgPaths.p3dfcb5f0} fill="var(--fill-0, #FFD300)" id="Vector_17" />
                  <path d={svgPaths.p1f286d40} fill="var(--fill-0, #1B1B1B)" id="Vector_18" />
                  <path d={svgPaths.p19e21700} fill="var(--fill-0, #1B1B1B)" id="Vector_19" />
                  <path d={svgPaths.p1f4ee900} fill="var(--fill-0, #5A47FB)" id="Vector_20" />
                  <path d={svgPaths.p20ec4500} fill="var(--fill-0, #5A47FB)" id="Vector_21" />
                  <path d={svgPaths.p359d64b0} fill="var(--fill-0, #5A47FB)" id="Vector_22" />
                  <path d={svgPaths.p3541df40} fill="var(--fill-0, #1B1B1B)" id="Vector_23" />
                  <path d={svgPaths.pa7f7c00} fill="var(--fill-0, #1B1B1B)" id="Vector_24" />
                  <path d={svgPaths.p24f4d680} fill="var(--fill-0, #1B1B1B)" id="Vector_25" />
                  <path d={svgPaths.pbfb08c0} fill="var(--fill-0, #1B1B1B)" id="Vector_26" />
                  <path d={svgPaths.p2d257500} fill="var(--fill-0, #1B1B1B)" id="Vector_27" />
                  <path d={svgPaths.p399b0800} fill="var(--fill-0, #1B1B1B)" id="Vector_28" />
                  <path d={svgPaths.p2c1fcbf0} fill="var(--fill-0, #1B1B1B)" id="Vector_29" />
                  <path d={svgPaths.p134770f0} fill="var(--fill-0, #1B1B1B)" id="Vector_30" />
                  <path d={svgPaths.p2ccaf00} fill="var(--fill-0, #1B1B1B)" id="Vector_31" />
                  <path d={svgPaths.pfda6b00} fill="var(--fill-0, #1B1B1B)" id="Vector_32" />
                  <path d={svgPaths.p3517ae80} fill="var(--fill-0, #1B1B1B)" id="Vector_33" />
                  <path d={svgPaths.p2ef5f00} fill="var(--fill-0, #1B1B1B)" id="Vector_34" />
                  <path d={svgPaths.p4f44b00} fill="var(--fill-0, #1B1B1B)" id="Vector_35" />
                  <path d={svgPaths.p165f3470} fill="var(--fill-0, #1B1B1B)" id="Vector_36" />
                  <path d={svgPaths.pbe3f180} fill="var(--fill-0, #1B1B1B)" id="Vector_37" />
                  <path d={svgPaths.p35b99cf2} fill="var(--fill-0, #1B1B1B)" id="Vector_38" />
                  <path d={svgPaths.pd5c8980} fill="var(--fill-0, #1B1B1B)" id="Vector_39" />
                  <path d={svgPaths.p7d3d900} fill="var(--fill-0, #1B1B1B)" id="Vector_40" />
                  <path d={svgPaths.p2496b580} fill="var(--fill-0, #1B1B1B)" id="Vector_41" />
                  <path d={svgPaths.p37e75900} fill="var(--fill-0, #1B1B1B)" id="Vector_42" />
                  <path d={svgPaths.p3e9d6900} fill="var(--fill-0, #1B1B1B)" id="Vector_43" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="115.171" id="filter0_d_3_897" width="120.202" x="-1.28953e-08" y="1">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="0.75" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_897" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_897" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute left-0 top-[142px] w-full">
          <div 
            className="testimonial-carousel-wrapper relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="carousel-arrow carousel-arrow-left"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="carousel-arrow carousel-arrow-right"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="carousel-track-container overflow-hidden">
              <div 
                className="carousel-track flex transition-transform duration-600 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 386}px)`,
                  gap: '16px'
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className={clsx("carousel-slide", index === currentSlide && "active")}>
                    <div className="h-[390px] relative w-[370px]">
                      <div className="absolute h-[390px] left-0 top-0 w-[370px] illustration-animate" data-name="Frame">
                        <div className="absolute h-[390px] left-0 overflow-clip top-0 w-[370px]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 390">
                            <g id="Frame 13">
                              <path d={svgPaths.p1205af00} fill="var(--fill-0, #EDEDED)" id="Vector" />
                              <path d={svgPaths.p1a6c6c00} fill="var(--fill-0, #C0C0C0)" id="Ã¢" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[71px] h-[390px] items-start left-0 pb-0 pl-[27px] pr-0 pt-[109px] top-0 w-[370px]" data-name="Container">
                        <div className="h-[120px] relative shrink-0 w-[306px]" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[120px] relative w-[306px]">
                            <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] w-[304px]">{testimonial.quote}</p>
                          </div>
                        </div>
                        <div className="h-[64px] relative shrink-0 w-[306px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-[64px] items-center relative w-[306px]">
                            <div className="bg-[#5a47fb] relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
                                <div className="h-[24px] relative shrink-0 w-[24.281px]" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[24.281px]">
                                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">{testimonial.initials}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[44px] relative shrink-0 w-[170.469px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-[170.469px]">
                                <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">{testimonial.name}</p>
                                </div>
                                <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">{testimonial.title}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={clsx("carousel-dot", index === currentSlide && "active")}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Services Section */}
      <OurServices />
      
      <div className="absolute bg-[#ededed] h-[320px] left-1/2 overflow-clip rounded-tl-[150px] top-[5556px] translate-x-[-50%] w-[1198px]">
        <p className="absolute font-['Arvo:Regular',sans-serif] leading-[20px] left-[calc(50%-331px)] not-italic text-[#212121] text-[48px] text-nowrap top-[136px] whitespace-pre">Ready to start your journey?</p>
        <div className="absolute content-stretch flex gap-[8px] items-center leading-[0] left-1/2 top-[188px] translate-x-[-50%]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer" onClick={() => scrollToSection('services')}>
            <div className="[grid-area:1_/_1] bg-[#212121] h-[40px] ml-0 mt-0 w-[148px]" />
            <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] ml-[15px] mt-[9px] not-italic relative text-[16px] text-nowrap text-white whitespace-pre">Explore Services</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer" onClick={() => window.location.href = 'mailto:hello@nestware.com'}>
            <div className="[grid-area:1_/_1] border border-[#212121] border-solid h-[40px] ml-0 mt-0 w-[148px]" />
            <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] ml-[29px] mt-[9px] not-italic relative text-[#212121] text-[16px] text-nowrap whitespace-pre">Get in Touch</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#5a47fb] h-[437px] left-1/2 overflow-clip rounded-tl-[150px] top-[1306px] translate-x-[-50%] w-[1440px]">
        <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[720px] top-[155px] w-[487px]">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[84px] leading-[22px] not-italic relative shrink-0 text-[16px] text-white w-full">Whether you’re building a new product, growing your brand, or starting your career — we’re here to help you grow smarter, together.</p>
          <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer" onClick={() => scrollToSection('services')}>
              <div className="[grid-area:1_/_1] bg-black h-[40px] ml-0 mt-0 w-[148px]" />
              <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] ml-[15px] mt-[9px] not-italic relative text-[16px] text-nowrap text-white whitespace-pre">Explore Services</p>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer" onClick={() => window.location.href = 'mailto:hello@nestware.com'}>
              <div className="[grid-area:1_/_1] border border-black border-solid h-[40px] ml-0 mt-0 w-[148px]" />
              <p className="[grid-area:1_/_1] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] ml-[29px] mt-[9px] not-italic relative text-[16px] text-black text-nowrap whitespace-pre">Get in Touch</p>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[271px] size-[413px] top-0 illustration-animate">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="relative size-[413px]" data-name="Startup-2--Streamline-Brooklyn">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 413 413">
                <g id="Startup-2--Streamline-Brooklyn">
                  <path d={svgPaths.p1280e680} fill="var(--fill-0, #1B1B1B)" id="Vector" />
                  <path d={svgPaths.p26a6af00} fill="var(--fill-0, #1B1B1B)" id="Vector_2" />
                  <path d={svgPaths.p388c1280} fill="var(--fill-0, #1B1B1B)" id="Vector_3" />
                  <path d={svgPaths.p2b5f3e80} fill="var(--fill-0, #1B1B1B)" id="Vector_4" />
                  <path d={svgPaths.p9d2c900} fill="var(--fill-0, #1B1B1B)" id="Vector_5" />
                  <path d={svgPaths.p11491000} fill="var(--fill-0, #FFD300)" id="Vector_6" />
                  <path d={svgPaths.p242a7400} fill="var(--fill-0, #FFD300)" id="Vector_7" />
                  <path d={svgPaths.pa1e8400} fill="var(--fill-0, #FFD300)" id="Vector_8" />
                  <path d={svgPaths.p3c481c00} fill="var(--fill-0, #FFD300)" id="Vector_9" />
                  <path d={svgPaths.p2d8dae00} fill="var(--fill-0, #1B1B1B)" id="Vector_10" />
                  <path d={svgPaths.p20445700} fill="var(--fill-0, #1B1B1B)" id="Vector_11" />
                  <path d={svgPaths.p4878c80} fill="var(--fill-0, #1B1B1B)" id="Vector_12" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#5a47fb] content-stretch flex flex-col gap-[48px] h-[422px] items-start left-1/2 pb-0 pl-[91px] pr-[79px] pt-[64px] top-[5966px] translate-x-[-50%] w-[1440px]" data-name="Footer">
        <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[193px] relative shrink-0 w-full" data-name="Container">
          <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
            <div className="absolute h-[44px] left-0 top-[55px] w-[284px]" data-name="Paragraph">
              <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-0 w-[254px]">Empowering growth through technology, design, and mentorship.</p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[39px] items-start left-0 top-0 w-[243px]" data-name="FooterLogo">
              <div className="h-[39px] overflow-clip relative shrink-0 w-full illustration-animate" data-name="Icon">
                <div className="absolute bottom-[1.66%] contents left-0 right-0 top-0">
                  <div className="absolute bottom-[1.66%] left-0 right-[89.96%] top-[25.39%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 29">
                      <path d={svgPaths.pb988280} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[25.66%_76.91%_1.66%_12.71%]" data-name="Vector_2">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 29">
                      <path d={svgPaths.p23c2bc00} fill="var(--fill-0, white)" id="Vector_2" />
                    </svg>
                  </div>
                  <div className="absolute inset-[25.53%_64.19%_1.66%_25.76%]" data-name="Vector_3">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 29">
                      <path d={svgPaths.p1ceadb80} fill="var(--fill-0, white)" id="Vector_3" />
                    </svg>
                  </div>
                  <div className="absolute bottom-[1.66%] left-[38.48%] right-[54.84%] top-0" data-name="Vector_4">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 39">
                      <path d={svgPaths.p103c2a00} fill="var(--fill-0, white)" id="Vector_4" />
                    </svg>
                  </div>
                  <div className="absolute inset-[25.66%_23.51%_1.66%_65.84%]" data-name="Vector_5">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 29">
                      <path d={svgPaths.p2c3a8300} fill="var(--fill-0, white)" id="Vector_5" />
                    </svg>
                  </div>
                  <div className="absolute inset-[25.66%_13.05%_1.66%_79.16%]" data-name="Vector_6">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 29">
                      <path d={svgPaths.p33b8f700} fill="var(--fill-0, white)" id="Vector_6" />
                    </svg>
                  </div>
                  <div className="absolute bottom-[1.66%] left-[89.62%] right-0 top-[25.66%]" data-name="Vector_7">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 29">
                      <path d={svgPaths.p1a464000} fill="var(--fill-0, white)" id="Vector_7" />
                    </svg>
                  </div>
                  <div className="absolute inset-[25.39%_36.83%_1.66%_47.83%]" data-name="Vector_8">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 29">
                      <path d={svgPaths.p13fc4900} fill="var(--fill-0, white)" id="Vector_8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <HeadingText text="Quick Links" />
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-full items-start relative w-[284px]">
                <LinkText text="About Us" onClick={() => scrollToSection('about')} />
                <LinkText text="Services" onClick={() => scrollToSection('services')} />
                <LinkText text="Vision" onClick={() => scrollToSection('vision')} />
                <LinkText text="Process" onClick={() => scrollToSection('process')} />
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px] cursor-pointer" data-name="Link" onClick={() => scrollToSection('testimonials')}>
                  <Text1 text="Testimonials" additionalClassNames="h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <HeadingText text="Services" />
            <div className="h-[120px] relative shrink-0 w-[284px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[120px] items-start relative w-[284px]">
                <LinkText text="Web Development" />
                <LinkText text="UI/UX Design" />
                <LinkText text="Consulting" />
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="Link">
                  <Text1 text="Mentorship" additionalClassNames="h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <HeadingText text="Contact Us" />
            <div className="h-[132px] relative shrink-0 w-[284px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[132px] items-start relative w-[284px]">
                <LinkText text="hello@nestware.com" />
                <LinkText text="+1 (234) 567-890" />
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['IBM_Plex_Sans:Regular',sans-serif] h-full leading-[22px] not-italic relative text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap w-[284px] whitespace-pre">
                    <p className="absolute left-0 top-0">123 Innovation Street</p>
                    <p className="absolute left-0 top-[22px]">San Francisco, CA 94102</p>
                    <p className="absolute left-0 top-[44px]">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[53px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-[1146px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-dashed border-white inset-0 pointer-events-none" />
          <div className="h-[20px] relative shrink-0 w-[231.313px]" data-name="Paragraph">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[231.313px]">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre">© 2025 Nestware. All rights reserved.</p>
            </div>
          </div>
          <div className="h-[16px] relative shrink-0 w-[136px]" data-name="Container">
            <Container />
          </div>
        </div>
      </div>
      <div className="absolute contents left-1/2 top-[3068px] translate-x-[-50%]">
        <div id="process" className="absolute h-[1866px] left-1/2 top-[3068px] translate-x-[-50%] w-[1440px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1866">
            <path d={svgPaths.p1c341800} fill="var(--fill-0, #EDEDED)" id="Vector 298" />
          </svg>
        </div>
        <div className="absolute contents left-[calc(50%+0.1px)] top-[3224px] translate-x-[-50%]">
          <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[calc(50%+0.5px)] not-italic text-[#212121] text-center top-[3224px] translate-x-[-50%] w-[723px]">
            <p className="font-['Arvo:Regular',sans-serif] h-[32px] leading-[20px] relative shrink-0 text-[48px] w-full" data-section-heading="design-build-grow">Design, Build And Grow</p>
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[45px] leading-[22px] relative shrink-0 text-[18px] w-[569px]">We help you navigate the full journey—from initial discovery to launch and beyond.</p>
          </div>
          <div className="absolute h-[1154px] left-[calc(50%+0.1px)] top-[3378px] translate-x-[-50%] w-[858.202px]">
            <div className="absolute inset-[23.18%_10.57%_62.87%_15.85%]">
              <div className="absolute inset-[-0.17%_-0.08%_-0.09%_-0.07%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 633 162">
                  <path d={svgPaths.p3a8f1d00} id="Vector 291" stroke="var(--stroke-0, #212121)" strokeDasharray="9 9" />
                </svg>
              </div>
            </div>
            <div className="absolute flex inset-[54.79%_5.51%_22.01%_20.32%] items-center justify-center">
              <div className="flex-none h-[123.395px] rotate-[346.514deg] scale-y-[-100%] skew-x-[1.983deg] w-[629.267px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-0.25%_-0.08%_-0.4%_-0.06%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 631 125">
                      <path d={svgPaths.p207b72c0} id="Vector 292" stroke="var(--stroke-0, #212121)" strokeDasharray="9 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[4px] top-[386px]">
              <div className="absolute bg-white h-[252px] left-[4px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[433px] w-[660px]" data-name="Background+Border+Shadow">
                <p className="absolute font-['Arvo:Regular',sans-serif] leading-[20px] left-[25.06px] not-italic text-[#212121] text-[32px] text-nowrap top-[97.07px] whitespace-pre">Build</p>
                <div className="absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[25px] text-[#a1a1a1] text-[16px] top-[183px] translate-y-[-50%] w-[450px]">
                  <p className="leading-[26px]">Our team brings strategy to life with design, development, and product thinking. We iterate fast, validate early, and make sure every detail aligns with your business goals</p>
                </div>
                <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex flex-col items-start left-[25px] pb-0 pt-[12px] px-[12px] rounded-[12px] size-[48px] top-[34px]" data-name="Overlay1">
                  <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Svg1">
                    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[37.5%_37.5%_8.36%_8.35%]" data-name="Vector">
                        <div className="absolute inset-[-7.7%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                            <path d={svgPaths.p120eba40} id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[37.5%] left-3/4 right-[8.33%] top-[45.83%]" data-name="Vector">
                        <div className="absolute inset-[-25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                            <path d="M1 5L5 1" id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[12.5%_10.42%_39.58%_37.5%]" data-name="Vector">
                        <div className="absolute inset-[-8.7%_-8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                            <path d={svgPaths.p300eae00} id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[326px] left-[516px] top-[386px] w-[338.535px] illustration-animate">
                <div className="absolute bottom-0 left-[-1.18%] right-[-1.18%] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 326">
                    <g id="Group 13">
                      <g filter="url(#filter0_d_3_870)" id="Vector 300">
                        <path d={svgPaths.pf462980} fill="var(--fill-0, white)" />
                      </g>
                      <g id="Coding-3--Streamline-Brooklyn">
                        <path d={svgPaths.p2fccf200} fill="var(--fill-0, #1B1B1B)" id="Vector" />
                        <path d={svgPaths.p38ccdd00} fill="var(--fill-0, #5A47FB)" id="Vector_2" />
                        <path d={svgPaths.p385c9e00} fill="var(--fill-0, #5A47FB)" id="Vector_3" />
                        <path d={svgPaths.pbe07a00} fill="var(--fill-0, #1B1B1B)" id="Vector_4" />
                        <path d={svgPaths.p1f34e100} fill="var(--fill-0, #1B1B1B)" id="Vector_5" />
                        <path d={svgPaths.p29fac200} fill="var(--fill-0, #1B1B1B)" id="Vector_6" />
                        <path d={svgPaths.p189cc400} fill="var(--fill-0, #1B1B1B)" id="Vector_7" />
                        <path d={svgPaths.p21983380} fill="var(--fill-0, #1B1B1B)" id="Vector_8" />
                        <path d={svgPaths.p2fe72e80} fill="var(--fill-0, #1B1B1B)" id="Vector_9" />
                        <path d={svgPaths.p3fefac00} fill="var(--fill-0, #1B1B1B)" id="Vector_10" />
                        <path d={svgPaths.p383cbcf0} fill="var(--fill-0, #1B1B1B)" id="Vector_11" />
                        <path d={svgPaths.pd5e6900} fill="var(--fill-0, #1B1B1B)" id="Vector_12" />
                        <path d={svgPaths.p22268500} fill="var(--fill-0, #1B1B1B)" id="Vector_13" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="279.653" id="filter0_d_3_870" width="346.535" x="-4.45003e-09" y="27.2622">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_870" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_870" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[22px] top-[-1px]">
              <div className="absolute bg-white h-[252px] left-[176.68px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[12px] w-[660px]" data-name="Background+Border+Shadow">
                <p className="absolute font-['Arvo:Regular',sans-serif] leading-[20px] left-[171.06px] not-italic text-[#212121] text-[32px] text-nowrap top-[97.07px] whitespace-pre">Discover</p>
                <div className="absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[171px] text-[#a1a1a1] text-[16px] top-[183px] translate-y-[-50%] w-[450px]">
                  <p className="leading-[26px]">We start by understanding you — your goals, challenges, and vision. Through research and discovery sessions, we uncover the insights that shape the right solution from day one.</p>
                </div>
                <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex flex-col items-start left-[171px] pb-0 pt-[12px] px-[12px] rounded-[12px] size-[48px] top-[29px]" data-name="Overlay">
                  <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Svg">
                    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[32.33%]" data-name="Vector">
                        <div className="absolute inset-[-11.79%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                            <path d={svgPaths.p14325800} id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                            <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[312px] left-[22px] top-[-1px] w-[314.302px] illustration-animate">
                <div className="absolute bottom-0 left-[-1.27%] right-[-1.27%] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 312">
                    <g id="Group 15">
                      <g filter="url(#filter0_d_3_752)" id="Vector 301">
                        <path d={svgPaths.p33b7f080} fill="var(--fill-0, white)" />
                      </g>
                      <g id="Searching-4--Streamline-Brooklyn">
                        <path d={svgPaths.p391bcd40} fill="var(--fill-0, #1B1B1B)" id="Vector" />
                        <path d={svgPaths.p85c2880} fill="var(--fill-0, #5A47FB)" id="Vector_2" />
                        <path d={svgPaths.p30a7c2f1} fill="var(--fill-0, #5A47FB)" id="Vector_3" />
                        <path d={svgPaths.p3f4fc780} fill="var(--fill-0, #1B1B1B)" id="Vector_4" />
                        <path d={svgPaths.p13778700} fill="var(--fill-0, #1B1B1B)" id="Vector_5" />
                        <path d={svgPaths.p3d31b200} fill="var(--fill-0, #1B1B1B)" id="Vector_6" />
                        <path d={svgPaths.p1e3b6500} fill="var(--fill-0, #1B1B1B)" id="Vector_7" />
                        <path d={svgPaths.p387b3000} fill="var(--fill-0, #5A47FB)" id="Vector_8" />
                        <path d={svgPaths.p13806b00} fill="var(--fill-0, #1B1B1B)" id="Vector_9" />
                        <path d={svgPaths.p2a148400} fill="var(--fill-0, #5A47FB)" id="Vector_10" />
                        <path d={svgPaths.p17547100} fill="var(--fill-0, #5A47FB)" id="Vector_11" />
                        <path d={svgPaths.p155d7c80} fill="var(--fill-0, #1B1B1B)" id="Vector_12" />
                        <path d={svgPaths.p303b4100} fill="var(--fill-0, #1B1B1B)" id="Vector_13" />
                        <path d={svgPaths.p11c9d880} fill="var(--fill-0, #1B1B1B)" id="Vector_14" />
                        <path d={svgPaths.p365dd000} fill="var(--fill-0, #1B1B1B)" id="Vector_15" />
                        <path d={svgPaths.p2ebb4400} fill="var(--fill-0, #1B1B1B)" id="Vector_16" />
                        <path d={svgPaths.p27f1fc80} fill="var(--fill-0, #1B1B1B)" id="Vector_17" />
                        <path d={svgPaths.p37e59000} fill="var(--fill-0, #1B1B1B)" id="Vector_18" />
                        <path d={svgPaths.p14c54300} fill="var(--fill-0, #5A47FB)" id="Vector_19" />
                        <path d={svgPaths.p2d413300} fill="var(--fill-0, #1B1B1B)" id="Vector_20" />
                        <path d={svgPaths.p22819300} fill="var(--fill-0, #1B1B1B)" id="Vector_21" />
                        <path d={svgPaths.p1068ce00} fill="var(--fill-0, #1B1B1B)" id="Vector_22" />
                        <path d={svgPaths.p1ee65f40} fill="var(--fill-0, #1B1B1B)" id="Vector_23" />
                        <path d={svgPaths.p1a6ef00} fill="var(--fill-0, #1B1B1B)" id="Vector_24" />
                        <path d={svgPaths.p376b9d00} fill="var(--fill-0, #1B1B1B)" id="Vector_25" />
                        <path d={svgPaths.p46c2c80} fill="var(--fill-0, #1B1B1B)" id="Vector_26" />
                        <path d={svgPaths.p3001af00} fill="var(--fill-0, #1B1B1B)" id="Vector_27" />
                        <path d={svgPaths.p243316f0} fill="var(--fill-0, #1B1B1B)" id="Vector_28" />
                        <path d={svgPaths.p2b63ec80} fill="var(--fill-0, #5A47FB)" id="Vector_29" />
                        <path d={svgPaths.p174d6c00} fill="var(--fill-0, #1B1B1B)" id="Vector_30" />
                        <path d={svgPaths.pbf18600} fill="var(--fill-0, #1B1B1B)" id="Vector_31" />
                        <path d={svgPaths.p224ce900} fill="var(--fill-0, #1B1B1B)" id="Vector_32" />
                        <path d={svgPaths.p2cbf6800} fill="var(--fill-0, #1B1B1B)" id="Vector_33" />
                        <path d={svgPaths.pa2e5a80} fill="var(--fill-0, #1B1B1B)" id="Vector_34" />
                        <path d={svgPaths.p34996d00} fill="var(--fill-0, #1B1B1B)" id="Vector_35" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="281.977" id="filter0_d_3_752" width="322.302" x="-5.95076e-09" y="19.041">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_752" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_752" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute contents left-0 top-[857.23px]">
              <div className="absolute contents left-[168.2px] top-[889px]">
                <div className="absolute bg-white h-[252px] left-[168.2px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[889px] w-[660px]" data-name="Background+Border+Shadow">
                  <p className="absolute font-['Arvo:Regular',sans-serif] leading-[20px] left-[189.06px] not-italic text-[#212121] text-[32px] text-nowrap top-[97.07px] whitespace-pre">Grow</p>
                  <div className="absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] left-[189px] text-[#a1a1a1] text-[16px] top-[183px] translate-y-[-50%] w-[450px]">
                    <p className="leading-[26px]">Once launched, we help you grow — analyzing performance, improving continuously, and finding new opportunities to engage, retain, and scale. Growth doesn’t stop at delivery. It starts there.</p>
                  </div>
                  <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex flex-col items-start left-[189px] pb-0 pt-[12px] px-[12px] rounded-[12px] size-[48px] top-[30px]" data-name="Overlay2">
                    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Svg2">
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                        <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
                          <div className="absolute inset-[-16.67%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                              <path d="M1 1H7V7" id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
                          <div className="absolute inset-[-10%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
                              <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, #5A47FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[296.775px] left-0 top-[857.23px] w-[288.811px] illustration-animate">
                <div className="absolute bottom-[-2.7%] left-0 right-0 top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289 305">
                    <g id="Group 22">
                      <g filter="url(#filter0_d_3_697)" id="Vector 302">
                        <path d={svgPaths.p1af72a40} fill="var(--fill-0, white)" />
                      </g>
                      <g id="Analyze-Data-1--Streamline-Brooklyn">
                        <path d={svgPaths.p18444870} fill="var(--fill-0, #5A47FB)" id="Vector" />
                        <path d={svgPaths.pfb09d00} fill="var(--fill-0, #5A47FB)" id="Vector_2" />
                        <path d={svgPaths.p33045000} fill="var(--fill-0, #5A47FB)" id="Vector_3" />
                        <path d={svgPaths.p32b85800} fill="var(--fill-0, #5A47FB)" id="Vector_4" />
                        <path d={svgPaths.p49a1100} fill="var(--fill-0, #5A47FB)" id="Vector_5" />
                        <path d={svgPaths.pf665b80} fill="var(--fill-0, #5A47FB)" id="Vector_6" />
                        <path d={svgPaths.p2f47da80} fill="var(--fill-0, #1B1B1B)" id="Vector_7" />
                        <path d={svgPaths.p397de100} fill="var(--fill-0, #1B1B1B)" id="Vector_8" />
                        <path d={svgPaths.p2fb52d00} fill="var(--fill-0, #1B1B1B)" id="Vector_9" />
                        <path d={svgPaths.p3af9f680} fill="var(--fill-0, #1B1B1B)" id="Vector_10" />
                        <path d={svgPaths.p17da7680} fill="var(--fill-0, #1B1B1B)" id="Vector_11" />
                        <path d={svgPaths.p2c385a80} fill="var(--fill-0, #1B1B1B)" id="Vector_12" />
                        <path d={svgPaths.p26374900} fill="var(--fill-0, #1B1B1B)" id="Vector_13" />
                        <path d={svgPaths.p14bb980} fill="var(--fill-0, #1B1B1B)" id="Vector_14" />
                        <path d={svgPaths.p3a0dad00} fill="var(--fill-0, #1B1B1B)" id="Vector_15" />
                        <path d={svgPaths.p263c6a00} fill="var(--fill-0, #1B1B1B)" id="Vector_16" />
                        <path d={svgPaths.p123e9e00} fill="var(--fill-0, #1B1B1B)" id="Vector_17" />
                        <path d={svgPaths.p20c73e00} fill="var(--fill-0, #1B1B1B)" id="Vector_18" />
                        <path d={svgPaths.p378518f0} fill="var(--fill-0, #1B1B1B)" id="Vector_19" />
                        <path d={svgPaths.pf517100} fill="var(--fill-0, #1B1B1B)" id="Vector_20" />
                        <path d={svgPaths.p45ae2f0} fill="var(--fill-0, #5A47FB)" id="Vector_21" />
                        <path d={svgPaths.p27192480} fill="var(--fill-0, #5A47FB)" id="Vector_22" />
                        <path d={svgPaths.pf4ef900} fill="var(--fill-0, #5A47FB)" id="Vector_23" />
                        <path d={svgPaths.p259e9880} fill="var(--fill-0, #5A47FB)" id="Vector_24" />
                        <path d={svgPaths.p903bd00} fill="var(--fill-0, #1B1B1B)" id="Vector_25" />
                        <path d={svgPaths.pe9f0d00} fill="var(--fill-0, #1B1B1B)" id="Vector_26" />
                        <path d={svgPaths.p1e7e9500} fill="var(--fill-0, #5A47FB)" id="Vector_27" />
                        <path d={svgPaths.p39f3b100} fill="var(--fill-0, #5A47FB)" id="Vector_28" />
                        <path d={svgPaths.p1bc42780} fill="var(--fill-0, #5A47FB)" id="Vector_29" />
                        <path d={svgPaths.p26f55900} fill="var(--fill-0, #5A47FB)" id="Vector_30" />
                        <path d={svgPaths.p1b3a0400} fill="var(--fill-0, #5A47FB)" id="Vector_31" />
                        <path d={svgPaths.p2de92700} fill="var(--fill-0, #1B1B1B)" id="Vector_32" />
                        <path d={svgPaths.p37827d80} fill="var(--fill-0, #1B1B1B)" id="Vector_33" />
                        <path d={svgPaths.p2d87bc00} fill="var(--fill-0, #1B1B1B)" id="Vector_34" />
                        <path d={svgPaths.p919ad80} fill="var(--fill-0, #1B1B1B)" id="Vector_35" />
                        <path d={svgPaths.p24ec0f00} fill="var(--fill-0, #1B1B1B)" id="Vector_36" />
                        <path d={svgPaths.p4827630} fill="var(--fill-0, #5A47FB)" id="Vector_37" />
                        <path d={svgPaths.p32bee900} fill="var(--fill-0, #5A47FB)" id="Vector_38" />
                        <path d={svgPaths.p61c5100} fill="var(--fill-0, #1B1B1B)" id="Vector_39" />
                        <path d={svgPaths.pe5c100} fill="var(--fill-0, #1B1B1B)" id="Vector_40" />
                        <path d={svgPaths.pa51200} fill="var(--fill-0, #1B1B1B)" id="Vector_41" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="298.927" id="filter0_d_3_697" width="281.554" x="1.56273" y="5.84752">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_697" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_697" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="absolute h-[547px] left-1/2 top-[700px] translate-x-[-50%] w-[918px]">
        <div className="absolute h-[302px] left-[calc(50%+1px)] top-[103px] translate-x-[-50%] w-0">
          <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 302">
              <path d="M0.5 0V302" id="Vector 8" stroke="url(#paint0_linear_3_856)" strokeDasharray="9 9" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_856" x1="1" x2="1" y1="0" y2="302">
                  <stop stopColor="#272727" />
                  <stop offset="1" stopColor="#646092" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[489px] not-italic top-[151px] w-[429px]">
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#1b1b1b] text-[32px] w-[min-content]">{`Collaboration & Growth`}</p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[64px] leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-[388px]">Our team brings together engineers, designers, and product thinkers who care about solving problems that matter.</p>
        </div>
        <div className="absolute left-[345px] size-[224px] top-[323px]" data-name="Team-Coding-2--Streamline-Brooklyn (1) 1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 224">
            <g id="Team-Coding-2--Streamline-Brooklyn (1) 1">
              <path d={svgPaths.p55ac6c0} fill="var(--fill-0, #5A47FB)" id="Vector" />
              <path d={svgPaths.p28440110} fill="var(--fill-0, #5A47FB)" id="Vector_2" />
              <path d={svgPaths.p2037e570} fill="var(--fill-0, #5A47FB)" id="Vector_3" />
              <path d={svgPaths.pe4fa500} fill="var(--fill-0, #5A47FB)" id="Vector_4" />
              <path d={svgPaths.p1b69fe70} fill="var(--fill-0, #5A47FB)" id="Vector_5" />
              <path d={svgPaths.p1a88fb00} fill="var(--fill-0, #5A47FB)" id="Vector_6" />
              <path d={svgPaths.p33a3fe80} fill="var(--fill-0, #5A47FB)" id="Vector_7" />
              <path d={svgPaths.p2a88c9e0} fill="var(--fill-0, #5A47FB)" id="Vector_8" />
              <path d={svgPaths.p1a0b1900} fill="var(--fill-0, #5A47FB)" id="Vector_9" />
              <path d={svgPaths.p1d2ffd40} fill="var(--fill-0, #5A47FB)" id="Vector_10" />
              <path d={svgPaths.p22d8a500} fill="var(--fill-0, #5A47FB)" id="Vector_11" />
              <path d={svgPaths.p13071080} fill="var(--fill-0, #5A47FB)" id="Vector_12" />
              <path d={svgPaths.p185ae591} fill="var(--fill-0, #5A47FB)" id="Vector_13" />
              <path d={svgPaths.p1d6c7580} fill="var(--fill-0, #5A47FB)" id="Vector_14" />
              <path d={svgPaths.p1ccc2780} fill="var(--fill-0, #5A47FB)" id="Vector_15" />
              <path d={svgPaths.p25aa7000} fill="var(--fill-0, #5A47FB)" id="Vector_16" />
              <path d={svgPaths.p30a67e00} fill="var(--fill-0, #5A47FB)" id="Vector_17" />
              <path d={svgPaths.p5233700} fill="var(--fill-0, #5A47FB)" id="Vector_18" />
              <path d={svgPaths.p1ee48d00} fill="var(--fill-0, #5A47FB)" id="Vector_19" />
              <path d={svgPaths.pb574480} fill="var(--fill-0, #363636)" id="Vector_20" />
              <path d={svgPaths.p3bc26d00} fill="var(--fill-0, #363636)" id="Vector_21" />
              <path d={svgPaths.p24268a80} fill="var(--fill-0, #363636)" id="Vector_22" />
              <path d={svgPaths.pc045900} fill="var(--fill-0, #363636)" id="Vector_23" />
              <path d={svgPaths.p344f8a00} fill="var(--fill-0, #363636)" id="Vector_24" />
              <path d={svgPaths.p3c738f80} fill="var(--fill-0, #363636)" id="Vector_25" />
              <path d={svgPaths.p1b6bb540} fill="var(--fill-0, #363636)" id="Vector_26" />
              <path d={svgPaths.p14a22a80} fill="var(--fill-0, #363636)" id="Vector_27" />
              <path d={svgPaths.p2aed9280} fill="var(--fill-0, #363636)" id="Vector_28" />
              <path d={svgPaths.p96d6b00} fill="var(--fill-0, #363636)" id="Vector_29" />
              <path d={svgPaths.p23c9ab00} fill="var(--fill-0, #363636)" id="Vector_30" />
              <path d={svgPaths.p34a1080} fill="var(--fill-0, #363636)" id="Vector_31" />
              <path d={svgPaths.p1a7d80} fill="var(--fill-0, #363636)" id="Vector_32" />
              <path d={svgPaths.p36b3a00} fill="var(--fill-0, #363636)" id="Vector_33" />
              <path d={svgPaths.p31e0980} fill="var(--fill-0, #363636)" id="Vector_34" />
              <path d={svgPaths.p2e3ac200} fill="var(--fill-0, #363636)" id="Vector_35" />
              <path d={svgPaths.p2b0edf00} fill="var(--fill-0, #363636)" id="Vector_36" />
              <path d={svgPaths.pdfe0100} fill="var(--fill-0, #363636)" id="Vector_37" />
              <path d={svgPaths.pd9f15e0} fill="var(--fill-0, #363636)" id="Vector_38" />
              <path d={svgPaths.p30dadf00} fill="var(--fill-0, #363636)" id="Vector_39" />
              <path d={svgPaths.p6dcb380} fill="var(--fill-0, #363636)" id="Vector_40" />
              <path d={svgPaths.p3284eb80} fill="var(--fill-0, #363636)" id="Vector_41" />
              <path d={svgPaths.pd24d880} fill="var(--fill-0, #363636)" id="Vector_42" />
              <path d={svgPaths.p1b2f3900} fill="var(--fill-0, #363636)" id="Vector_43" />
              <path d={svgPaths.p2151cd52} fill="var(--fill-0, #363636)" id="Vector_44" />
              <path d={svgPaths.p2f0c0800} fill="var(--fill-0, #363636)" id="Vector_45" />
              <path d={svgPaths.p32ceeb00} fill="var(--fill-0, #363636)" id="Vector_46" />
              <path d={svgPaths.p24b86af2} fill="var(--fill-0, #363636)" id="Vector_47" />
              <path d={svgPaths.p2234780} fill="var(--fill-0, #363636)" id="Vector_48" />
              <path d={svgPaths.pcfdc6c0} fill="var(--fill-0, #363636)" id="Vector_49" />
              <path d={svgPaths.p3dad1380} fill="var(--fill-0, #363636)" id="Vector_50" />
              <path d={svgPaths.pa224900} fill="var(--fill-0, #363636)" id="Vector_51" />
              <path d={svgPaths.p1dc18980} fill="var(--fill-0, #363636)" id="Vector_52" />
              <path d={svgPaths.p7467c80} fill="var(--fill-0, #363636)" id="Vector_53" />
              <path d={svgPaths.p18a9c900} fill="var(--fill-0, #363636)" id="Vector_54" />
              <path d={svgPaths.p165c2500} fill="var(--fill-0, #363636)" id="Vector_55" />
              <path d={svgPaths.p3cd87500} fill="var(--fill-0, #363636)" id="Vector_56" />
              <path d={svgPaths.p381a47c0} fill="var(--fill-0, #363636)" id="Vector_57" />
              <path d={svgPaths.p17f74000} fill="var(--fill-0, #FFD300)" id="Vector_58" />
              <path d={svgPaths.p1b54ef80} fill="var(--fill-0, #363636)" id="Vector_59" />
              <path d={svgPaths.p14588f00} fill="var(--fill-0, #FFD300)" id="Vector_60" />
              <path d={svgPaths.p1d889e40} fill="var(--fill-0, #363636)" id="Vector_61" />
              <path d={svgPaths.p1a8e6980} fill="var(--fill-0, #FFD300)" id="Vector_62" />
              <path d={svgPaths.p1f8f0600} fill="var(--fill-0, #FFD300)" id="Vector_63" />
              <path d={svgPaths.p47c6310} fill="var(--fill-0, #FFD300)" id="Vector_64" />
              <path d={svgPaths.p30c77f80} fill="var(--fill-0, #FFD300)" id="Vector_65" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-[73.85%] flex items-center justify-center left-0 right-[87.46%] top-[4.94%]">
          <div className="flex-none h-[116.029px] rotate-[180deg] scale-y-[-100%] w-[115.083px]">
            <div className="relative size-full illustration-animate">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 117">
                <g id="Group 32">
                  <g>
                    <path d={svgPaths.p2c048680} fill="var(--fill-0, #5A47FB)" id="vector" />
                    <path d={svgPaths.p1d1bb4f2} fill="var(--fill-0, #5A47FB)" id="vector_2" />
                    <path d={svgPaths.p24230f80} fill="var(--fill-0, #5A47FB)" id="vector_3" />
                    <path d={svgPaths.p14968d00} fill="var(--fill-0, #5A47FB)" id="vector_4" />
                    <path d={svgPaths.p1fd09fc0} fill="var(--fill-0, #5A47FB)" id="vector_5" />
                    <path d={svgPaths.p500f700} fill="var(--fill-0, #5A47FB)" id="vector_6" />
                  </g>
                  <path d={svgPaths.p305ade00} fill="var(--fill-0, #363636)" id="vector_25" />
                  <path d={svgPaths.p34802280} fill="var(--fill-0, #5A47FB)" id="vector_26" />
                  <path d={svgPaths.p368a9580} fill="var(--fill-0, #363636)" id="vector_27" />
                  <path d={svgPaths.pc8a6f00} fill="var(--fill-0, #5A47FB)" id="vector_28" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[51px] not-italic top-[147px] w-[409px]">
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#1b1b1b] text-[32px] w-[min-content]">Our approach to growth</p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[120px] leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-[394px]">At Nestware, we believe growth starts with the right foundation. We’re a technology house built to help startups and individuals turn ideas into impact — through smart software, thoughtful design, and real human mentorship.dation.</p>
        </div>
        <div className="absolute contents left-[251px] top-0">
          <p className="absolute font-['Arvo:Regular',sans-serif] h-[32px] leading-[20px] left-[460.5px] not-italic text-[#1b1b1b] text-[48px] text-center top-0 translate-x-[-50%] w-[419px]" data-section-heading="about-nestware">About Nestware</p>
        </div>
        <div className="absolute flex inset-[5.12%_0.86%_72.31%_85.95%] items-center justify-center illustration-animate">
          <div className="flex-none h-[102px] rotate-[14.478deg] w-[98.747px]">
            <div className="relative size-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 102">
                <g id="Group 20">
                  <path d={svgPaths.p15a22b00} id="Vector" stroke="var(--stroke-0, #212121)" />
                  <path d={svgPaths.p3d58c080} fill="var(--fill-0, #5A47FB)" id="Vector_2" stroke="var(--stroke-0, #212121)" />
                  <path d={svgPaths.p16f38b00} fill="var(--fill-0, #212121)" id="Vector_3" />
                  <path d={svgPaths.p28a53ac0} fill="var(--fill-0, #FFD300)" id="Vector_4" />
                  <path d={svgPaths.p3b1ba380} fill="var(--fill-0, #FFD300)" id="Vector_5" />
                  <path d={svgPaths.p11ded900} fill="var(--fill-0, #FFD300)" id="Vector_6" />
                  <path d={svgPaths.pf973700} fill="var(--fill-0, #FFD300)" id="Vector_7" />
                  <path d={svgPaths.p7e1f800} fill="var(--fill-0, #FFD300)" id="Vector_8" />
                  <path d={svgPaths.p24600380} fill="var(--fill-0, #FFD300)" id="Vector_9" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div id="vision" className="absolute bg-[#5a47fb] h-[649px] left-1/2 overflow-clip rounded-tl-[100px] rounded-tr-[100px] top-[2419px] translate-x-[-50%] w-[1440px]" data-section="vision-mission">
        <p className="absolute font-['Arvo:Regular',sans-serif] leading-[20px] left-[calc(50%-343px)] not-italic text-[48px] text-neutral-200 text-nowrap top-[89px] whitespace-pre" data-section-heading="vision-mission">Building Tomorrow, Together</p>
        <Helper text="Our Vision" text1="To be the go-to technology house that inspires growth and innovation across the MENA region." additionalClassNames="top-[228px]" />
        <Helper text="Our Mission" text1="We help businesses and people grow through smart software, branding, mentorship, product consulting, and talent connection — all under one roof." additionalClassNames="top-[425px]" />
        <div className="absolute h-[321px] left-[757px] top-[190px] w-0">
          <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 321">
              <path d="M0.5 0V321" id="Vector 8" stroke="url(#paint0_linear_3_654)" strokeDasharray="9 9" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_654" x1="1" x2="1" y1="0" y2="321">
                  <stop stopColor="#272727" />
                  <stop offset="1" stopColor="#646092" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute left-[835px] size-[400px] top-[182px] illustration-animate" data-name="Strategy-1--Streamline-Brooklyn">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
            <g id="Strategy-1--Streamline-Brooklyn">
              <path d={svgPaths.p366e500} fill="var(--fill-0, #FFD300)" id="Vector" />
              <path d={svgPaths.p25698400} fill="var(--fill-0, #302E3F)" id="Vector_2" />
              <path d={svgPaths.p153f8980} fill="var(--fill-0, #302E3F)" id="Vector_3" />
              <path d={svgPaths.p2276d000} fill="var(--fill-0, #FFD300)" id="Vector_4" />
              <path d={svgPaths.p167b080} fill="var(--fill-0, #FFD300)" id="Vector_5" />
              <path d={svgPaths.pb6627f0} fill="var(--fill-0, #302E3F)" id="Vector_6" />
              <path d={svgPaths.p627ff80} fill="var(--fill-0, #302E3F)" id="Vector_7" />
              <path d={svgPaths.p705ce80} fill="var(--fill-0, #302E3F)" id="Vector_8" />
              <path d={svgPaths.p8d67000} fill="var(--fill-0, #302E3F)" id="Vector_9" />
              <path d={svgPaths.p33b3c900} fill="var(--fill-0, #302E3F)" id="Vector_10" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}