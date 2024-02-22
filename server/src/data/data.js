const PRODUCTS = [
  {
    productName: "iPhone 14",
    category: "phone",
    price: 999.0,
    productImage: "https://gadget-device.ru/pictures/product/big/77465_big.jpg",
    releaseDate: new Date(2022, 8, 7),

    colors: [
      {
        colorName: "Yellow",
        caruselImages: [
          "https://gadget-device.ru/pictures/product/big/77465_big.jpg",
          "https://assets.bueroshop24.de/ugsshoppictures/img/22/14/Zoom_m2359703.jpg/z/apple-iphone-14-gelb-128-gb-952147_1",
          "https://world-devices.ru/image/cache/catalog/pashino2/alisa/55574.970-500x400.jpg",
          "https://world-devices.ru/image/cache/catalog/pashino2/alisa/55575.970-500x400.jpg",
        ],
      },
      {
        colorName: "Blue",
        caruselImages: [
          "https://gadget-device.ru/pictures/product/big/77291_big.jpg",
          "https://assets.bueroshop24.de/ugsshoppictures/img/4/10/Zoom_m2283821.jpg/z/apple-iphone-14-blau-128-gb-798704_1",
          "https://assets.bueroshop24.de/ugsshoppictures/img/4/12/Zoom_m2283822.jpg/z/apple-iphone-14-blau-128-gb-798704_2",
          "https://assets.bueroshop24.de/ugsshoppictures/img/4/14/Zoom_m2281985.jpg/z/apple-iphone-14-blau-128-gb-798704_3",

        ],
      },
      {
        colorName: "Black",
        caruselImages: [
          "https://gadget-device.ru/pictures/product/big/77412_big.jpg",
          "https://assets.bueroshop24.de/ugsshoppictures/img/3/26/Zoom_m2283824.jpg/z/apple-iphone-14-mitternacht-128-gb-798563_1",
          "https://assets.bueroshop24.de/ugsshoppictures/img/3/27/Zoom_m2283825.jpg/z/apple-iphone-14-mitternacht-128-gb-798563_2",
          "https://assets.bueroshop24.de/ugsshoppictures/img/3/28/Zoom_m2281986.jpg/z/apple-iphone-14-mitternacht-128-gb-798563_3",
        ],
      },
    ],

    characteristics: [
      {
        group: "Connectivity",
        items: [
          { title: "Number of SIM Cards", values: ["2 SIM"] },
          { title: "SIM Card Format", values: ["Nano-SIM", "e-SIM"] },
          { title: "Network Standards", values: ["GSM", "3G", "4G (LTE)", "5G"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['6.7"'] },
          { title: "Screen Resolution", values: ["2778x1284"] },
          { title: "Pixel Density", values: ["458 ppi"] },
          { title: "Screen Type", values: ["OLED"] },
          { title: "Additional Features", values: ["HDR display", "True Tone", "Wide color (P3)"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["A15 Bionic"] },
          { title: "Number of Cores", values: [6] },
        ],
      },
      {
        group: "Memory",
        items: [
          { title: "Internal Memory", values: ["256GB"] },
          { title: "Number of Cores", values: [6] },
        ],
      },
      {
        group: "Camera",
        items: [
          { title: "Camera", values: ["12MP + 12MP"] },
          { title: "Aperture", values: ["f/1.5 + f/2.4"] },
          { title: "Video Recording", values: ["4K UHD (3840x2160)"] },
          { title: "Optical Stabilization", values: ["Available"] },
          { title: "Focus", values: ["Phase Detection Autofocus (PDAF)"] },
          { title: "Main Camera Flash", values: ["Available"] },
          { title: "Front Camera", values: ["12 MP", "f/1.9"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["iOS 16"] },
        ],
      },
    ],
  },
  {
    category: "phone",
    productName: "iPhone 12",
    price: 799.0,
    productImage: "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/56/50/5056/images/12684/12684.0x500.png",
    releaseDate: new Date(2020, 10, 13),

    colors: [
      {
        colorName: "#ce96ff",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/56/50/5056/images/12684/12684.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/56/50/5056/images/12691/12691.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/56/50/5056/images/12686/12686.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/56/50/5056/images/12687/12687.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/56/50/5056/images/12688/12688.0x500.png",
        ],
      },
      {
        colorName: "#96ff9a",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/55/50/5055/images/12678/12678.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/55/50/5055/images/12683/12683.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/55/50/5055/images/12679/12679.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/55/50/5055/images/12680/12680.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/55/50/5055/images/12681/12681.0x500.jpg",
        ],
      },
      {
        colorName: "#fa3e34",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/57/50/5057/images/12692/12692.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/57/50/5057/images/12697/12697.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/57/50/5057/images/12693/12693.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/57/50/5057/images/12694/12694.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/57/50/5057/images/12695/12695.0x500.jpg",
        ],
      },
    ],

    characteristics: [
      {
        group: "Connectivity",
        items: [
          { title: "Number of SIM Cards", values: ["2 SIM"] },
          { title: "SIM Card Format", values: ["Nano-SIM", "e-SIM"] },
          { title: "Network Standards", values: ["GSM", "3G", "4G (LTE)", "5G"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['6.1"'] },
          { title: "Screen Resolution", values: ["2532x1170"] },
          { title: "Pixel Density", values: ["460 ppi"] },
          { title: "Screen Type", values: ["OLED"] },
          { title: "Additional Features", values: ["HDR display", "True Tone", "Wide color (P3)", "Haptic Touch"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["A14 Bionic"] },
          { title: "Number of Cores", values: [6] },
        ],
      },
      {
        group: "Memory",
        items: [
          { title: "Internal Memory", values: ["128GB"] },
        ],
      },
      {
        group: "Camera",
        items: [
          { title: "Camera", values: ["12MP + 12MP"] },
          { title: "Aperture", values: ["f/2.4 + f/1.6"] },
          { title: "Video Recording", values: ["4K UHD (3840x2160)"] },
          { title: "Optical Stabilization", values: ["Eat"] },
          { title: "Focus", values: ["Automatic"] },
          { title: "Main Camera Flash", values: ["Eat"] },
          { title: "Front Camera", values: ["12MP", "f/2.2"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["iOS 14"] },
        ],
      },
    ],
  },
  {
    category: "phone",
    productName: "iPhone 15 Pro Max",
    price: 1199.0,
    productImage: "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/79/71/7179/images/21851/21851.0x500.jpg",
    releaseDate: new Date(2023, 9, 22),

    colors: [
      {
        colorName: "#5B798E",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/79/71/7179/images/21851/21851.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/79/71/7179/images/21852/21852.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/79/71/7179/images/21853/21853.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/79/71/7179/images/21855/21855.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/79/71/7179/images/21857/21857.0x500.jpg",
        ],
      },
      {
        colorName: "#aba6a3",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/78/71/7178/images/21860/21860.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/78/71/7178/images/21861/21861.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/78/71/7178/images/21862/21862.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/78/71/7178/images/21864/21864.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/78/71/7178/images/21866/21866.0x500.jpg",
        ],
      },
      {
        colorName: "#dcdcdc",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/80/71/7180/images/21869/21869.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/80/71/7180/images/21870/21870.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/80/71/7180/images/21871/21871.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/80/71/7180/images/21873/21873.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/80/71/7180/images/21875/21875.0x500.jpg",
        ],
      },
      {
        colorName: "#282828",
        caruselImages: [
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/81/71/7181/images/21842/21842.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/81/71/7181/images/21843/21843.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/81/71/7181/images/21844/21844.0x500.jpg",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/81/71/7181/images/21846/21846.0x500.png",
          "https://1145267922.rsc.cdn77.org/wa-data/public/shop/products/81/71/7181/images/21848/21848.0x500.jpg",
        ],
      },
    ],

    characteristics: [
      {
        group: "Connectivity",
        items: [
          { title: "Number of SIM Cards", values: ["2 SIM"] },
          { title: "SIM Card Format", values: ["Nano-SIM", "e-SIM"] },
          { title: "Network Standards", values: ["GSM", "3G", "4G (LTE)", "5G"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['6.7"'] },
          { title: "Screen Resolution", values: ["2796x1290"] },
          { title: "Pixel Density", values: ["460 ppi"] },
          { title: "Screen Type", values: ["OLED"] },
          { title: "Additional Features", values: ["Dynamic Island", "Always-On display", "HDR display", " True Tone", " Wide color (P3)"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["A17 Pro"] },
          { title: "Number of Cores", values: [6] },
        ],
      },
      {
        group: "Memory",
        items: [
          { title: "Internal Memory", values: ["256GB"] },
        ],
      },
      {
        group: "Camera",
        items: [
          { title: "Camera", values: ["48 MP + 12 MP + 12 MP + 12 MP"] },
          { title: "Aperture", values: ["f/1.78 + f/2.2 + f/1.78 + f/2.8"] },
          { title: "Video Recording", values: ["4K UHD (3840x2160)"] },
          { title: "Optical Stabilization", values: ["Eat"] },
          { title: "Focus", values: ["Automatic"] },
          { title: "Main Camera Flash", values: ["Available"] },
          { title: "Front Camera", values: ["12MP", "f/1.9"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["iOS 17"] },
        ],
      },
    ],
  },
  {
    category: "phone",
    productName: "iPhone 14 Pro Max",
    price: 1350,
    productImage: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699433959-709450-1.webp",
    releaseDate: new Date(2022, 9, 7),

    colors: [
      {
        colorName: "#8f59bf",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699433959-709450-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699433964-709450-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699433970-709450-3.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699433975-709450-4.webp",
        ],
      },
      {
        colorName: "#fff1ba",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699432612-709396-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699432617-709396-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699432622-709396-3.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699432628-709396-4.webp",
        ],
      },
    ],

    characteristics: [
      {
        group: "Connectivity",
        items: [
          { title: "Number of SIM Cards", values: ["2 SIM"] },
          { title: "SIM Card Format", values: ["Nano-SIM", "e-SIM"] },
          { title: "Network Standards", values: ["GSM", "3G", "4G (LTE)", "5G"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['6.1"'] },
          { title: "Screen Resolution", values: ["2532x1170"] },
          { title: "Pixel Density", values: ["460 ppi"] },
          { title: "Screen Type", values: ["OLED"] },
          { title: "Additional Features", values: ["HDR display", "True Tone", "Wide color (P3)", "Haptic Touch"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["Apple A16 Bionic"] },
          { title: "Number of Cores", values: [6] },
        ],
      },
      {
        group: "Memory",
        items: [
          { title: "Internal Memory", values: ["128GB"] },
        ],
      },
      {
        group: "Camera",
        items: [
          { title: "Camera", values: ["12MP + 12MP"] },
          { title: "Aperture", values: ["f/1,6 + f/2,4"] },
          { title: "Video Recording", values: ["4K UHD (3840x2160)"] },
          { title: "Front Camera", values: ["12MP"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["iOS 15"] },
        ],
      },
    ],
  },

  {
    category: "phone",
    productName: "iPhone 13",
    price: 980,
    productImage: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699353899-opt.webp",
    releaseDate: new Date(2021, 9, 24),

    colors: [
      {
        colorName: "#076a6c",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699353899-opt.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699353905-opt.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699353908-opt.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699353911-opt.webp",
        ],
      },
      {
        colorName: "#f2f3f4",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/0/b/0b8e07074e23a8f2b012015fb120a6c0.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/7/a/7afe4f578a708eab08a861571e877680.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/4/9/49b69a56dfc88e2a52619f2c51be31f7.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/e/6/e6b92759689156e56dc1945a09427288.webp",
        ],
      },
      {
        colorName: "",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699354361-opt.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699354363-opt.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699354367-opt.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699354371-opt.webp",
        ],
      },
    ],

    characteristics: [
      {
        group: "Connectivity",
        items: [
          { title: "Number of SIM Cards", values: ["2 SIM"] },
          { title: "SIM Card Format", values: ["Nano-SIM", "e-SIM"] },
          { title: "Network Standards", values: ["GSM", "3G", "4G (LTE)", "5G"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['6.1"'] },
          { title: "Screen Resolution", values: ["2532x1170"] },
          { title: "Pixel Density", values: ["460 ppi"] },
          { title: "Screen Type", values: ["OLED"] },
          { title: "Additional Features", values: ["HDR display", "True Tone", "Wide color (P3)", "Haptic Touch"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["Apple A15 Bionic"] },
          { title: "Number of Cores", values: [6] },
        ],
      },
      {
        group: "Memory",
        items: [
          { title: "Internal Memory", values: ["256GB"] },
        ],
      },
      {
        group: "Camera",
        items: [
          { title: "Camera", values: ["12MP + 12MP"] },
          { title: "Aperture", values: ["f/1,6 + f/2,4"] },
          { title: "Video Recording", values: ["4K UHD (3840x2160)"] },
          { title: "Front Camera", values: ["12MP"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["iOS 15"] },
        ],
      },
    ],
  },
  {
    category: "laptop",
    productName: "MacBook Air 13",
    price: 1199.0,
    productImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509647_sd.jpg;maxHeight=2000;maxWidth=2000",
    releaseDate: new Date(2020, 12, 17),

    colors: [
      {
        colorName: "",
        caruselImages: [
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509647_sd.jpg;maxHeight=2000;maxWidth=2000",
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509647cv12d.jpg;maxHeight=2000;maxWidth=2000",
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509647cv11d.jpg;maxHeight=2000;maxWidth=2000",
        ],
      },
    ],

    characteristics: [
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['13.3"'] },
          { title: "Screen Resolution", values: ["2560x1600"] },
          { title: "Matrix type", values: ["IPS"] },
          { title: "Display", values: ["Glossy screen"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["Apple M1"] },
          { title: "Number of Cores", values: ["8"] },
        ],
      },
      {
        group: "RAM",
        items: [
          { title: "RAM", values: ["8 GB"] },
        ],
      },
      {
        group: "Disk subsystem",
        items: [
          { title: "Drive Type", values: ["SSD"] },
          { title: "SSD storage", values: ["256 GB"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["macOS"] },
        ],
      },
    ],
  },
  {
    category: "laptop",
    productName: "MacBook Pro 16",
    price: 1399.0,
    productImage: "https://i.citrus.world/imgcache/size_800/uploads/shop/f/6/f6be370b1b84c8452eef674bd32c4249.webp",
    releaseDate: new Date(2023, 11, 1),

    colors: [
      {
        colorName: "",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/f/6/f6be370b1b84c8452eef674bd32c4249.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/7/3/73c8284e40827a92b6f5c2de6c8ef6a0.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/2/7/27549673be70528b16a0bd29bf56d5ce.webp",
        ],
      },
    ],

    characteristics: [
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['16.2"'] },
          { title: "Screen Resolution", values: ["3456x2234"] },
          { title: "Matrix type", values: ["Liquid Retina XDR"] },
          { title: "Display", values: ["Glossy screen"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["Apple M3 Max"] },
          { title: "Number of Cores", values: [14] },
        ],
      },
      {
        group: "RAM",
        items: [
          { title: "RAM", values: ["36 GB"] },
        ],
      },
      {
        group: "Disk subsystem",
        items: [
          { title: "Drive Type", values: ["SSD"] },
          { title: "SSD storage", values: ["1 TB"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["MacOS"] },
        ],
      },
    ],
  },
  {
    category: "laptop",
    productName: "MacBook Air 15",
    price: 1199.0,
    productImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534602_sd.jpg;maxHeight=640;maxWidth=550",
    releaseDate: new Date(2022, 9, 5),

    colors: [
      {
        colorName: "",
        caruselImages: [
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534602_sd.jpg;maxHeight=640;maxWidth=550",
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534602_rd.jpg;maxHeight=640;maxWidth=550",
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534602ld.jpg;maxHeight=640;maxWidth=550",
        ],
      },
    ],

    characteristics: [
      {
        group: "Display",
        items: [
          { title: "Screen Diagonal", values: ['15.3"'] },
          { title: "Screen Resolution", values: ["880x1864"] },
          { title: "Matrix type", values: ["Retina"] },
          { title: "Display", values: ["Glossy screen"] },
        ],
      },
      {
        group: "Processor",
        items: [
          { title: "Processor", values: ["Apple M2"] },
          { title: "Number of Cores", values: [8] },
        ],
      },
      {
        group: "RAM",
        items: [
          { title: "RAM", values: ["8 GB"] },
        ],
      },
      {
        group: "Disk subsystem",
        items: [
          { title: "Drive Type", values: ["SSD"] },
          { title: "SSD storage", values: ["256 GB"] },
        ],
      },
      {
        group: "Operating System",
        items: [
          { title: "Operating System", values: ["MacOS"] },
        ],
      },
    ],
  },
  {
    category: "watches",
    productName: "Apple Watch SE",
    price: 275,
    productImage: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701093933-729161-1.webp",

    colors: [
      {
        colorName: "#000",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701093933-729161-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701093941-729161-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701093950-729161-3.webp",
        ],
      },
      {
        colorName: "#ffefd5",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701078294-729141-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701078303-729141-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701078311-729141-3.webp",
        ],
      },
      {
        colorName: "#395f92",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701079954-729168-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701079962-729168-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1701079969-729168-3.webp",
        ],
      },
    ],

    characteristics: [
      {
        group: " ",
        items: [
          { title: "Model", values: ["Watch ser"] },
        ],
      },
      {
        group: " ",
        items: [
          { title: "Processor", values: ["Apple s5"] },
        ],
      },
      {
        group: " ",
        items: [
          { title: "Type of strap", values: ["Sport"] },
        ],
      },
      {
        group: " ",
        items: [
          { title: "Case material", values: ["Aluminum"] },
        ],
      },
      {
        group: " ",
        items: [
          { title: "Connection", values: ["GPS"] },
        ],
      },
      {
        group: " ",
        items: [
          { title: "Remesh size", values: ["40 mm"] },
        ],
      },
    ],
  },
  {
    category: "watches",
    productName: "Apple Watch Series 9",
    price: 549,
    productImage: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700232590-729004-1.webp",

    colors: [
      {
        colorName: "#5353ec",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700232590-729004-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700232595-729004-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700232601-729004-3.webp",
        ],
      },
      {
        colorName: "#fdf5e6",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700233218-729002-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700233224-729002-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700233230-729002-3.webp",
        ],
      },
      {
        colorName: "#ffd1dc",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700231319-728993-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700231326-728993-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/7/1700231331-728993-3.webp",
        ],
      },
    ],

    characteristics: [
      {
        group: " ",
        items: [
          { title: "Operating system", values: ["Watch OS"] },
          { title: "OS Compatibility", values: ["Apple iOS"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Display Type", values: ["OLED"] },
          { title: "Display Diagonal", values: ['1.69"'] },
          { title: "Display Resolution", values: ["352 × 430"] },
        ],
      },
      {
        group: "Specifications",
        items: [
          { title: "Processor", values: ["Apple S9"] },
          { title: "Built-in memory size", values: ["64 GB"] },
        ],
      },
      {
        group: "Autonomy",
        items: [
          { title: "Battery Type", values: ["Li-Ion"] },
          { title: "Battery capacity", values: ["282 mA * h"] },
          { title: "Opening hours", values: ["Up to 18 hours"] },
        ],
      },
    ],
  },
  {
    category: "watches",
    productName: "Apple Watch ULTRA",
    price: 895,
    productImage: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699888387-709389-1.webp",

    colors: [
      {
        colorName: "#848482",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699888387-709389-1.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699888392-709389-2.webp",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699888398-709389-3.webp",
        ],
      },
      {
        colorName: "#ff6625",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/3/c/3c7c42caa71009d2a91d365e44bb5642.jpg",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/d/3/d3bcd61b79a2d9fa299f985229330583.jpg",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/5/2/529648fe157ef877d4b0477f2b44ba5e.jpg",
        ],
      },
      {
        colorName: "#f2f3f4",
        caruselImages: [
          "https://i.citrus.world/imgcache/size_800/uploads/shop/0/d/0d0b4d3b04977b8bafeb64c9482246b9.jpg",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/1/0/10858d8f712bf95d4a4a0381a853073d.jpg",
          "https://i.citrus.world/imgcache/size_800/uploads/shop/4/1/414511dd3d5d26ec1b16bb274eccef58.jpg",
        ],
      },
    ],

    characteristics: [
      {
        group: " ",
        items: [
          { title: "Operating system", values: ["Watch OS"] },
          { title: "OS Compatibility", values: ["Apple iOS"] },
        ],
      },
      {
        group: "Display",
        items: [
          { title: "Display Type", values: ["Color"] },
          { title: "Display Resolution", values: ["410 × 502"] },
        ],
      },
      {
        group: "Specifications",
        items: [
          { title: "Processor", values: ["Apple s8"] },
          { title: "Built-in memory size", values: ["32 GB"] },
        ],
      },
      {
        group: "Autonomy",
        items: [
          { title: "Battery Type", values: ["Li-Ion"] },
          { title: "Opening hours", values: ["Up to 36 hours"] },
        ],
      },
    ],
  },


];

module.exports = { PRODUCTS };