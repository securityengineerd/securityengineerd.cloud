import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Joshua",
  lastName: "Marcum",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Security Operations Engineer",
  avatar: "/images/avatar.jpg",
  email: "joshua.a.marcum@icloud.com",
  location: "America/Phoenix", // IANA TZ: 'Europe/Vienna'
  languages: [], // No Display if Empty
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Get monthly updates with the latest posts regarding artificial intelligence, automation, cloud providers, containers, cybersecurity, hardware, infrastructure, n8n, serverless, server technology, software, virtualisation, zero trust. 
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/securityengineerd",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/insecurity",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio, resume, and blog of ${person.role}`,
  headline: <>Joshua Marcum</>,
  featured: {
    display: true,
    title: <><strong className="ml-4">Schedule a call</strong> / (602) 661-1115</>,
    href: "https://cal.com/securityengineerd",
  },
  subline: (
    <>
I’ve always been passionate about computers and internet technologies. My background in cyber defense has helped secure several well-known organizations and their clients. I offer expert insight and experience in navigating complex operational challenges, driving modernization, automation, and security. I’m open to work, lets chat! Click “Schedule a call.”
    </>
  ),
};
const about = {
  path: "/about",
  label: "View Resume",
  title: `View Resume`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/securityengineerd",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
	 Security Operations Engineer ready to address your most complex operational challenges. Proven expertise in coordinating large-scale modernization projects, cloud & data migrations, detection capability enhancement, and vulnerability management. With a strong commitment to excellence, collaboration, and punctuality. Through our team's work we will produce high-quality deliverables and establish a reputation for being efficent and proactive. 
      </>
    ),
  },
	  work: {
    display: true, // set to false to hide this section
    title: "Employment",
    experiences: [
      {
        company: "Blue Cross Blue Shield (Contract)",
        timeframe: "03/2024 - 04/2025",
        role: "Security Operations Engineer",
        achievements: [
          <>
            Led modernization of cyber defense infrastructure by upgrading legacy systems from unsupported RHEL versions, enhancing system security and compliance.
          </>,
          <>
	    Maintained and upgraded critical cyber defense platforms—including RSA NetWitness, Imperva SecureSphere, Cofense Triage, Proofpoint, and Splunk ensuring operational readiness and threat visibility.
          </>,
          <>
	    Migrated cyber defense certificates to AppViewX, automating renewal processes and reducing the risk of service disruption due to certificate expiration.
          </>,
          <>
	    Performed gap analysis on Imperva SecureSphere deployment; led remediation efforts to restore full visibility and monitoring of critical database assets for BCBSA.
          </>,
          <>
	    Adhered to strict change management protocols by submitting detailed production changes, including testing and validation plans, for board approval prior to deployment.
          </>,
          <>
	    Redesigned the UI of a Flask-based Python application for secure credential sharing, improving usability and user experience.
          </>,
          <>
            Containerized Flask, Redis, and Nginx using Docker Compose and authored AWS CloudFormation templates to automate EC2-based deployment workflows.
          </>,
        ],
        images: [
          {
            src: "/images/employment/bcbsa.jpg",
            alt: "Blue Cross Blue Shield",
            width: 16,
            height: 9,
          },
          {
            src: "/images/employment/bcbsa-building.jpg",
            alt: "Blue Cross Blue Shield Chicago Office",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CenturyLink",
        timeframe: "12/2019 - 11/2023",
        role: "Security Engineer II",
        achievements: [
          <>
	    Migrated 10+ years of team knowledge assets—including training videos and ticket reviews—from Confluence to SharePoint, increasing content discoverability and ensuring continuity of institutional knowledge.
          </>,
          <>
	    Developed custom automation and scripting tools in response to team requests, significantly reducing manual workloads and improving process accuracy.
          </>,
          <>
	    Investigated security alerts across Office 365, Azure, and AWS environments for three distinct business entities, identifying threats and leading remediation efforts.
          </>,
          <>
	    Utilized a broad suite of security tools—including Cortex XSOAR, CrowdStrike, FireEye, Wiz.io, Axonius, ExtraHop, GuardDuty, and Microsoft Defender—to monitor, analyze, and respond to threats across hybrid cloud environments.
          </>,
          <>
	    Performed forensic log analysis on compromised Linux assets to reconstruct attack timelines, identify initial access vectors, determine attacker actions, and assess impact.
          </>,
          <>
	    Managed vulnerability lifecycle using RiskSense, Qualys, and Nessus to prioritize and remediate risks across enterprise assets.
          </>,
          <>
	    Monitored and responded to anomalous Office 365 sign-in activity from atypical hosts and geolocations; performed account compromise investigations and executed timely remediation.
          </>,
        ],
        images: [
          {
            src: "/images/employment/ctl.jpg",
            alt: "CenturyLink",
            width: 10,
            height: 4,
          },
          {
            src: "/images/employment/ctl2.jpg",
            alt: "Lumen Technologies",
            width: 10,
            height: 4,
          },
          {
            src: "/images/employment/ctl1.jpg",
            alt: "Level 3 Communications",
            width: 10,
            height: 4,
          },
          {
            src: "/images/employment/ctl-building.jpg",
            alt: "Lumen Tempe Office",
            width: 10,
            height: 4,
          },
        ],
      },
  {
        company: "Wells Fargo (Contract)",
        timeframe: "03/2019 - 09/2019",
        role: "Security Engineer",
        achievements: [
          <>
	    Provided technical guidance on infrastructure design, technology selection, and service configuration to align with project goals and compliance standards.
          </>,
          <>
	    Authored detailed service implementation documentation to ensure repeatability and knowledge transfer for future projects.
          </>,
          <>
	    Contributed to the initial setup of CI/CD pipeline automation using UrbanCode Deploy and Jenkins, enhancing development velocity and deployment consistency.
          </>,
          <>
	    Led deployment of SiteMinder, Apache, Tomcat, MongoDB, and MongoDB BI Connector across development, staging, and production environments.
          </>,
          <>
	    Enforced compliance by implementing Tripwire for continuous file integrity monitoring of critical project assets.
          </>,
          <>
	    Coordinated infrastructure provisioning tailored to project-specific requirements, ensuring timely and scalable resource availability.
          </>,
        ],
        images: [
          {
            src: "/images/employment/wellsfargo.jpg",
            alt: "Wells Fargo",
            width: 16,
            height: 9,
          },
          {
            src: "/images/employment/wellsfargo-building.jpg",
            alt: "Wells Fargo Ocotillo Complex",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University of Phoenix",
        timeframe: "01/2014 - 10/2018",
        role: "Linux Systems Administrator",
        achievements: [
          <>
	    Provided operational support for high-availability production servers and applications in an Agile environment, ensuring consistent uptime and performance for students and educators.
          </>,
          <>
	    Led bridge calls during outage events, coordinating cross-functional teams and delivering timely updates to stakeholders and executive leadership.
          </>,
          <>
	    Monitored and investigated system alerts across dev, test, and prod environments to proactively identify and resolve issues related to performance, health, and availability.
          </>,
          <>
	    Performed Linux-specific change tasks in alignment with change management policies, executing during authorized maintenance windows to minimize disruption.
          </>,
          <>
	    Authored SOPs for undocumented alerts and processes using Knowledge-Centered Service (KCS) practices to promote knowledge reuse and reduce resolution times.
          </>,
          <>
	    Collaborated with datacenter operations to provision and decommission hosts, replace failed hardware components, and troubleshoot remote access issues via ILO, ALOM, DRAC, and UCS interfaces.
          </>,
	 <>
	    Administered VMware environments across development, testing, and production, managing vCenter clusters and vSphere-hosted virtual machines.
	</>,
        ],
         images: [                                                                    
           {
             src: "/images/employment/uopx.jpg",
             alt: "University of Phoenix",
             width: 12,
             height: 11,
           },
           {
             src: "/images/employment/uopx-building.jpg",
             alt: "University of Phoenix Office",
             width: 18,
             height: 11,
           },



         ],
      },
      {
        company: "Brinkster",
        timeframe: "07/2012 - 01/2014",
        role: "Help Desk Lead",
        achievements: [
          <>
	    Provided multi-channel technical support (chat, ticket, phone) for shared, cloud, and dedicated hosting environments, ensuring prompt issue resolution and high customer satisfaction.
          </>,
          <>
	    Troubleshot application-level issues for customer-hosted CMS platforms including WordPress, Joomla, and Drupal, ensuring minimal downtime and optimized performance.
          </>,
          <>
	    Support deployment and maintenance of VMware infrastructure during initial launch of Brinkster Communication’s cloud server offerings.
          </>,
          <>
	    Executed backup and restore operations for customer databases including MySQL and Microsoft SQL Server, ensuring data integrity and recovery readiness.
          </>,
          <>
	    Managed DNS configurations and troubleshooting for customers leveraging Brinkster DNS services.
          </>,
	  <>
	    Administered hybrid Windows/Linux web servers (IIS/Apache), virtual infrastructure (VMware), and core services including MySQL, Microsoft SQL Server, and Zimbra mail systems.
	 </>, 
	 <>
	    Maintained shared email environment health by monitoring Zimbra mail systems, identifying abusive activity, and enforcing corrective measures to preserve domain reputation.
	</>,
        ],
        images: [
          {
	    src: "/images/employment/brinkster.jpg",
            alt: "Brinkster Communications",
            width: 16,
            height: 9,
          },
	  {
            src: "/images/employment/brinkster1.jpg",
            alt: "Brinkster Communications Central Ave. Phoenix",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  studies: {
    display: false, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Freeport High School",
        description: <>Class of 2004 from FHS in Freeport, IL</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
    {
        title: "All Skills",
        description: <>Skills and professional experience, also available under Blog - Skills & Experience.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/other1.jpg",
            alt: "Part 1",
            width: 16,
            height: 20,
          },
          {
            src: "/images/skills/other2.jpg",
            alt: "Part 2",
            width: 16,
            height: 20,
          },
          {
            src: "/images/skills/other3.jpg",
            alt: "Part 3",
            width: 16,
            height: 20,
          },
          {
            src: "/images/skills/other4.jpg",
            alt: "Part 4",
            width: 16,
            height: 20,
          },
        ],
      },
	{
        title: "Cortex XSOAR",
        description: <>4 Years Experience - Incident response and investigation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/xsoar.jpg",
            alt: "Cortex XSOAR",
            width: 12,
            height: 10,
          },
        ],
      },

      {
        title: "CrowdStrike",
        description: <>4 Years Experience - Incident response and investigation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/crowdstrike.jpg",
            alt: "Crowdstrike",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "LAMP/LEMP Stack",
        description: <>12+ Years Administration Experience</>,
        images: [
          {
            src: "/images/skills/lamplemp.jpg",
            alt: "LAMP / LEMP Stack",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Splunk",
        description: <>8 Years Experience - Splunk Administration & Support.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/splunk.jpg",
            alt: "Enterprise Splunk",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "VMware",
        description: <>12+ Years VMware ESXi/vSphere/vCenter Administration Experience</>,
        images: [
          {
            src: "/images/skills/vmware.jpg",
            alt: "VMware",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog Posts",
  description: `Read new content by ${person.name} covering various engineering subject matter.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
