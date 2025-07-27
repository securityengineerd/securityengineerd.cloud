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
  display: true,
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
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
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
  description: `Portfolio, resume, and personal blog of ${person.role}`,
  headline: <>Joshua Marcum</>,
  featured: {
    display: true,
    title: <><strong className="ml-4">Schedule Call</strong>: Open to work!</>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Greetings! My name is Joshua Marcum and my life passion has and always will be computers. I am actively searching for an exciting new opportunity that will utilize my extensive knowledge of enterprise server technologies and cyber-defense. For more information, check the resume portion of this page. 
    </>
  ),
};

const about = {
  path: "/about",
  label: "View Resume",
  title: `Employment – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
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
    title: "Introduction",
    description: (
      <>
	Security Operations Engineer with extensive experience in support and design of high-availability enterprise applications and infrastructure. Adept at working across complex multi-cloud environments leading efforts to drive modernization, monitoring and detection capability enhancement, compliance, and vulnerability management. I am an expert in UNIX-based applications and infrastructure and I am looking to leverage my extensive knowledge within a proactive organization. 
      </>
    ),
  },
	  work: {
    display: true, // set to false to hide this section
    title: "Employment",
    experiences: [
      {
        company: "BCBSA (Contract)",
        timeframe: "2024-2025",
        role: "Security Operations Engineer",
        achievements: [
          <>
            Lead infrastructure modernization initiative for upgrading of end-of-life cyberdefense assets running
            unsupported versions of the RedHat Enterprise Linux operating system.
          </>,
          <>
            Identified and lead initiative to address monitoring gaps and improve visibility into high-dollar database
            assets monitored by Imperva Secure Sphere.
          </>,
          <>
            Follow change management policies testing all work on lower environments, create test and validation plans, request CMB approval,
            upon approval proceed with production changes.
          </>,
          <>
            Maintain and upgrade cyber defense tooling such as RSA NetWitness, Imperva SecureSphere, Cofense Triage, Proofpoint, Splunk,
            and Snappass.
          </>,
          <>
            Enroll all internally signed certificates into AppViewX to automate future certificate renewals.
          </>,
          <>
            Create and update documentation of cyberdefense tooling for members to easily understand topology
            and configuration of existing toolsets.
          </>,
          <>
             Lead containerization and migration of BCBSA’s secure credential sharing tool to Amazon Web Services.
          </>,
          <>
             Containerize Flask, Redis, and Nginx under Docker Compose, create Cloud Formation scripts for EC2 deployment.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/employment/bluecrossblueshield.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CenturyLink",
        timeframe: "2019-2024",
        role: "Security Engineer II",
        achievements: [
          <>
            Investigate alerts from end-points and servers within Office 365, Azure, and AWS environments.
          </>,
          <>
            Leverage security tooling such Demisto (Cortex XSOAR), CrowdStrike, FireEye, Wiz.io, Axonius, ExtraHop, GuardDuty, and Defender.
          </>,
          <>
            Improve opeational efficiency, create custom security automations requested by members of the Cybersecurity Incident Response Team.
          </>,
          <>
            Review logs of compromised Linux assets to establish event timeline, point-of-entry, method of entry, source of the attack, and identify what actions were performed by the attacker throughout the timeline.
          </>,
          <>
            Triage detection hosts to determine cause and presented risks.
          </>,
          <>
            Vulnerability management leveraging RiskSense, Qualsys, and Nessus tooling.
          </>,
          <>
            Intercept suspicious O365 sign-in attempts from unusual hosts and user locations. Remediate compromised accounts
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/employment/centurylink.jpeg",
            alt: "CenturyLink",
            width: 10,
            height: 4,
          },
          {
            src: "/images/employment/lumen.jpg",
            alt: "Lumen Technologies",
            width: 10,
            height: 4,
          },
          {
            src: "/images/employment/level3.jpeg",
            alt: "Level 3 Communications",
            width: 10,
            height: 4,
          },
        ],
      },
  {
        company: "Wells Fargo (Contract)",
        timeframe: "2019-2019",
        role: "Security Engineer",
        achievements: [
          <>
             Provide insight on project’s infrastructure requirements, technologies, middleware, configuration, and compliance.
          </>,
          <>
            Document processes of implementation for easy replication of efforts in future projects.
          </>,
          <>
            Aided initial efforts establishing build automation services for CI/CD pipeline. (Urban Code Deploy/Jenkins)
          </>,
          <>
            Lead implementation efforts for SiteMinder, Apache, Tomcat, MongoDB, and MongoBI Connector.
          </>,
          <>
            Replicate service implementations across multiple staged environments.
          </>,
          <>
            Coordinate provisioning of infrastructure to specification of project's needs.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/employment/wellsfargo.png",
            alt: "Wells Fargo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University of Phoenix",
        timeframe: "2014-2018",
        role: "Linux Systems Administrator",
        achievements: [
          <>
            Support high-availability production servers and applications.
          </>,
          <>
            Coordinate bridge calls for outage related events engaging required teams and providing consistent updates to stakeholders and management.
          </>,
          <>
            Investigate alerts indicating potential issues with system health, performance, or service availability in development, testing, and production environments.
          </>,
          <>
            Execute Linux specific change tasks in accordance with change management policies and during the scheduled window of time for change.
          </>,
          <>
            Create and document standard operating procedures for alerts and processes without a corresponding KB article following  KCS methodologies.
          </>,
          <>
            Coordinate with datacenter operations teams during  stand-up or decommissioning of hosts, replacement of failed components, or checking hosts inaccessible through their remote management interface. (ILO, ALOM, DRAC, UCS).
          </>,
        ],
         images: [                                                                    
           // optional: leave the array empty if you don't want to display images
           {
             src: "/images/employment/universityofphoenix.jpeg",
             alt: "University of Phoenix",
             width: 16,
             height: 9,
           },
         ],
      },
      {
        company: "Brinkster",
        timeframe: "2011-2014",
        role: "Help Desk Lead",
        achievements: [
          <>
            Customer support by chat, ticket, and phone for shared, cloud, and dedicated hosting services.
          </>,
          <>
            Perform backup and restore operations of customer databases for MySQL and Microsoft SQL Server.
          </>,
          <>
            DNS management services for customers using Brinkster DNS services.
          </>,
          <>
            Administration of Windows and Linux web servers (IIS/Apache), VMware virtual machines, MySQL, Microsoft SQL Server, and Zimbra mail environment.
          </>,
          <>
            Maintain reputation of shared mail environment, identify and address abuse occurring within Zimbra email environment.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/employment/brinkster.jpeg",
            alt: "Brinkster Communications",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

// Stopped Here
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Freeport High School",
        description: <>General Studies.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cortex XSOAR",
        description: <>4 Years Experience - Incident response and investigation.</>,
        // optional: leave the array empty if you don't want to display images
      },

      {
        title: "CrowdStrike",
        description: <>4 Years Experience - Incident response and investigation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Splunk",
        description: <>8 Years Experience - Splunk Administration and utilization..</>,
        // optional: leave the array empty if you don't want to display images
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
