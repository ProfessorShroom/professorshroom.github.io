// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "All of my past, future and present projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "post-bypass-windows-11-microsoft-account-requirement",
        
          title: "Bypass Windows 11 Microsoft Account Requirement",
        
        description: "Bypass the need for a Microsoft account during Windows 11 installation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Windows-11-Local/";
          
        },
      },{id: "projects-bmw-rear-view-mirror-lin-decoder-wip",
          title: 'BMW Rear View Mirror LIN Decoder (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LIN_Decoder/";
            },},{id: "projects-merecedes-w211-shifter-repair-wip",
          title: 'Merecedes W211 Shifter Repair (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Mercedes_W211_Shifter_Repair/";
            },},{id: "projects-northpoint-automatic-software-installer-deprecated-by-plutopoint",
          title: 'NorthPoint Automatic Software Installer (Deprecated by PlutoPoint)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NorthPoint_Installer/";
            },},{id: "projects-plutopoint-automatic-software-installer",
          title: 'PlutoPoint Automatic Software Installer',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PlutoPoint_Installer/";
            },},{id: "projects-plutospantry-co-uk",
          title: 'PlutosPantry.co.uk',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Plutos_Pantry/";
            },},{id: "projects-renault-megane-rs-250-rs-400",
          title: 'Renault Megane RS 250 (RS 400)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Renault_Megane/";
            },},{id: "projects-wuphf-co-uk",
          title: 'WUPHF.co.uk',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/WUPHF/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%6E%66%6F@%70%72%6F%66%65%73%73%6F%72%73%68%72%6F%6F%6D.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/professorshroom", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@professorshroom", "_blank");
        },
      },{
        id: 'social-beer',
        title: 'Beer',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-thingiverse',
        title: 'Thingiverse',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
