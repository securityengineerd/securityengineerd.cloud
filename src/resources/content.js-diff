import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Joshua",
  lastName: "Marcum",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Security Operations Engineer",
  avatar: "/images/avatar.jpg",
  email: "joshua.a.marcum@securityengineerd.com",
  location: "America/Phoenix", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Get a monthly newsletter with my latest posts, you will find everything from devops, cloud security, virtualization, and rants about technology. ;) 
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
    link: "https://www.linkedin.com/in/insecurity/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/voidscape?s=21",
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
  title: `securityengineerd.com - Portfolio, resume, and blog of ${person.name}`,
  description: `Portfolio, resume, and blog of a seasoned ${person.role}`,
  headline: <>securityengineerd.com</>,
  featured: {
    display: true,
    title: <><strong className="ml-4">Schedule a call.</strong></>,
    href: "https://cal.com/securityengineerd",
  },
  subline: (
      <>
        Joshua Marcum is a self-educated server technology enthusiest with expertise in cyber-defense and enterprise applications.
        Josh is actively seeking new opportunities!
    </>
  ),
};

const about = {
  path: "/about",
  label: "Employment",
  title: `Online Resume`,
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
    title: "Overview",
    description: (
      <>
        Passionate and results driven Security Operations Engineer, computers and server technology have been a life-long passion. 
        Specialized in the support and implementation of high-availability enterprise applications, vulnerability management, and Linux based applications and infrastructure.
        I seek opportunities that will allow me to leverage my diverse skillset within a proactive organization.
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
            src: "/images/projects/project-01/cover-01.jpg",
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
        images: [],
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
        images: [],                                                                                  
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
        images: [],                                                                                      
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
        images: [],                                                                                              
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
