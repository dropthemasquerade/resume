import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Frank AK's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Frank AK.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 5,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Vue',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '/',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '/',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '/',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '/',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '/',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '/',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2012 – Jun 2016',
    location: 'Inner Mongolia University of Technology',
    title: 'Bachelor of Engineering in Printing Engineering (Focus on Computer Science & Systems Programming)',
    content: (
        <div>
          <p>
            Although my major was Printing Engineering—a traditional and non-computer field—I developed a strong
            passion for computer science starting from my freshman year. I spent countless hours in the university
            library studying algorithms, data structures, databases, and operating systems.
          </p>

          <p>
            During this time, I became deeply immersed in low-level programming using GCC, GDB, and Vim on Linux.
            Later, as I studied operating systems in more depth, I gained a solid understanding of file systems and
            I/O mechanisms, which laid the foundation for my later work in network programming, including concepts
            such as the <code>epoll</code> model.
          </p>

          <p>
            I also participated in ACM/ICPC competitions and won awards in university contests. In addition, I helped
            deploy and maintain the university’s internal ACM online judge system, gaining firsthand experience with
            databases, caching systems, HTTP services, and Nginx in a real-world environment.
          </p>

          <p>
            Toward graduation, I joined the Computer Science department’s graduate internship program, where I worked
            on a production project using C and Python to parse the JT/T 808 protocol and design the architecture for
            GPS/Beidou telemetry data ingestion, cleansing, and forwarding.
          </p>

          <p>
            Source code:
            <a
                className="text-blue-600 underline"
                href="https://github.com/land-pack/jtt808"
                rel="noopener noreferrer"
                target="_blank"
            >
              https://github.com/land-pack/jtt808
            </a>
          </p>
        </div>
    )
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 – Present ',
    location: 'Shenzhen, China',
    title: 'Tencent Technology (Shenzhen) Co., Ltd. — Senior Backend (Golang) Engineer',
    content: (
        <div className="experience">
          <h3>Tencent – Lead Backend Engineer</h3>
          <i>
            Lead backend engineer responsible for building core payment infrastructure, distributed billing pipelines,
            and internal developer productivity tools across Tencent’s payment and merchant service systems.
          </i>

          <div className="subsection">
            <p><strong>1. Core Infrastructure Development (Golang)</strong></p>
            <ul>
              <li>Designed and implemented foundational backend components including:</li>
              <li>File service framework for high-volume asynchronous file processing</li>
              <li>Distributed task scheduler supporting delayed tasks, cron workflows, and retry semantics</li>
              <li>Internal code generator and service scaffolding to accelerate microservice development</li>
              <li>Improved average developer onboarding efficiency by 40% through automated service templates and code
                generation tools
              </li>
            </ul>
          </div>

          <div className="subsection">
            <p><strong>2. Distributed Billing & Payment Infrastructure</strong></p>
            <ul>
              <li>Designed multi-region merchant billing pipelines that process tens of millions of transactions daily
              </li>
              <li>Built reconciliation workflows and automated validation rules to reduce settlement inconsistencies
              </li>
              <li>Optimized distributed transaction throughput and reduced billing latency by 35%</li>
              <li>Implemented retry, compensation, and fault-tolerant logic for cross-service financial operations</li>
            </ul>
          </div>

          <div className="subsection">
            <p><strong>3. Redis & High-Performance Caching</strong></p>
            <ul>
              <li>Designed Redis-based distributed caching for hot payment and merchant data</li>
              <li>Reduced MySQL pressure by 60% through caching and write-behind patterns</li>
              <li>Implemented Redis streams for real-time log/event aggregation</li>
            </ul>
          </div>

          <div className="subsection">
            <p><strong>4. API Gateway & APISIX Automation</strong></p>
            <ul>
              <li>Maintained APISIX routing, upstream management, and tenant-level domain strategies</li>
              <li>Built automation tools for domain binding, route generation, and health check configuration</li>
              <li>Reduced manual APISIX configuration time by 60%</li>
            </ul>
          </div>
        </div>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'dropthemasquerade@gmail.me',
      href: 'mailto:dropthemasquerade@gmail.me',
    },
    {
      type: ContactType.Location,
      text: 'ShenZhen NanShan, China',
      href: 'https://www.google.com/maps/place/Nanshan,+Shenzhen,+Guangdong+Province,+China/@22.5323471,113.8959922,3a,75y,260h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgID4tPnjoQE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c-lhd2P9bDlh_7id9uWbN1PH-HqwhfvzoEZTvqip50uBCcqecrD5hzlnfY_Ba2cguJ_S6fVgqpVusoisqbRInnnb7a7Gua74yEWdzlS-2Li7lldcGAhJHWpgMa6L7b56_RGCrZ8ww%3Dw900-h600-k-no-pi0-ya350-ro0-fo100!7i5376!8i2688!4m15!1m8!3m7!1s0x3403eef5f69e972f:0xd78ee0e90eff3922!2sNanshan,+Shenzhen,+Guangdong+Province,+China!3b1!8m2!3d22.5333199!4d113.93041!16s%2Fm%2F0267_n0!3m5!1s0x3403eef5f69e972f:0xd78ee0e90eff3922!8m2!3d22.5333199!4d113.93041!16s%2Fm%2F0267_n0?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Github,
      text: 'dropthemasquerade',
      href: 'https://github.com/dropthemasquerade',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dropthemasquerade'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/frank-ak-850737181/'}
];
