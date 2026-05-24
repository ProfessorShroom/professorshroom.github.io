// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "All of my past, future and present projects!",
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
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "post-retrofit-sunvisor-lights-to-renault-megane-mk3",
        
          title: "Retrofit Sunvisor Lights to Renault Megane MK3",
        
        description: "Guide on retrofitting sunvisor lights to a Renault Megane MK3",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2026/Megane-3-Sunvisor-Lights/";
          
        },
      },{id: "post-windows-system-reserved-partition-update-error",
        
          title: "Windows System Reserved Partition Update Error",
        
        description: "Fix the Windows 10/11 system reserved partition update error, causing Windows to not update",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2026/Windows-System-Reserved-Partition-Update-Error/";
          
        },
      },{id: "post-docker-29-api-changes",
        
          title: "Docker 29 API Changes",
        
        description: "Docker 29 recently upgraded the minimum API version, which broke a lot of stuff",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Docker-29/";
          
        },
      },{id: "post-bypass-windows-11-microsoft-account-requirement",
        
          title: "Bypass Windows 11 Microsoft Account Requirement",
        
        description: "Bypass the need for a Microsoft account during Windows 11 installation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/Windows-11-Local/";
          
        },
      },{id: "post-retrofit-electric-folding-mirrors-renault-megane-mk3",
        
          title: "Retrofit Electric Folding Mirrors Renault Megane MK3",
        
        description: "Guide on retrofitting electric folding mirrors to Renault Megane MK3",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2019/Megane-3-Folding-Mirrors/";
          
        },
      },{id: "post-update-renault-megane-mk3-radio-to-2-42-latest-update",
        
          title: "Update Renault Megane MK3 Radio to 2.42 (Latest Update)",
        
        description: "Update the Renault Megane MK3 radio/headunit to 2.42 which is the latest update",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2018/Update-Megane-3-Radio/";
          
        },
      },{id: "projects-cardmarket-price-updater",
          title: 'Cardmarket Price Updater',
          description: "Automatically get prices for MTG, Pokemon and Yu-Gi-Oh! cards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Cardmarket_Price_Updater/";
            },},{id: "projects-bmw-rear-view-mirror-lin-decoder",
          title: 'BMW Rear View Mirror LIN Decoder',
          description: "A board to decode a LIN BMW rear view mirror",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LIN_Decoder/";
            },},{id: "projects-merecedes-w211-shifter-repair",
          title: 'Merecedes W211 Shifter Repair',
          description: "Repair no gear dispaly in Mercedes W211",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Mercedes_W211_Shifter_Repair/";
            },},{id: "projects-northpoint-installer",
          title: 'NorthPoint Installer',
          description: "Computer Repair Centre Automatic Software Installer depreciated by PlutoPoint Installer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NorthPoint_Installer/";
            },},{id: "projects-plutopoint-installer",
          title: 'PlutoPoint Installer',
          description: "Computer Repair Centre Automatic Software Installer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PlutoPoint_Installer/";
            },},{id: "projects-plutospantry-co-uk",
          title: 'PlutosPantry.co.uk',
          description: "Natural pet treats and enrichment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Plutos_Pantry/";
            },},{id: "projects-renault-megane-rs-250-r-s-400",
          title: 'Renault Megane RS 250 (R.S.400)',
          description: "Modfied Renault Megane RS 250 build",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Renault_Megane/";
            },},{id: "projects-useful-scripts",
          title: 'Useful Scripts',
          description: "Collection of useful scripts for Windows and Linux",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Useful_Scripts/";
            },},{id: "projects-wuphf-co-uk",
          title: 'WUPHF.co.uk',
          description: "The Office fan site",
          section: "Projects",handler: () => {
              window.location.href = "/projects/WUPHF/";
            },},{id: "projects-custom-yu-gi-oh-binders",
          title: 'Custom Yu-Gi-Oh! Binders',
          description: "My custom Yu-Gi-Oh! binders that I&#39;ve made for myself and others",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Yu-Gi-Oh_Binders/";
            },},{id: "projects-imac-studio-display",
          title: 'iMac Studio Display',
          description: "Convert a 27&quot; iMac into a monitor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iMac_Studio_Display/";
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
        id: 'social-beer',
        title: 'Beer',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-makerverse',
        title: 'Makerverse',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },];
