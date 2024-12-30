

import Navbar from "./components/Nav/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import WishList from "./pages/Wishlist/WishList.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css"
const App = () => {
    const [items, setItems] = useState(
        [
            {
                "id": 1,
                "title": "Motorola Edge 50 Fusion (Forest Green, 256 GB)  (12 GB RAM)",
                "description": "Motorola Edge 50 Fusion (Forest Green, 256 GB)  (12 GB RAM)",
                "price": 27999,
                "discountPercentage": 10,
                "rating": 3,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/motorola-brand.webp",
                "category": "mobile electronics phone smartphone ",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, 68W Charger, USB Cable, Sim Tool, Protective Cover, Guides",
                        "Model Number": "PB300007IN|PB300015IN",
                        "Model Name": "Edge 50 Fusion",
                        "Color": "Forest Green",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "SAR Value": "Head: 1.04 W/Kg (at 1 g), Body: 1.05 W/Kg (at 1 g)"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "12 GB"
                    },
                    "Display Features": {
                        "Display Size": "17.02 cm (6.7 inch)",
                        "Resolution": "2400 x 1080 Pixels",
                        "Display Type": "Full HD+ pOLED Endless Edge Display",
                        "Other Display Features": "144Hz Refresh Rate, 10 Bit, 100% DCI P3, 1600 Peak Nits, 1200 HBM Nits, 360Hz Game Mode, Aqua Touch, 720Hz PWM/DC Dimming, Corning Glass 5, SGS Low Blue Light, SGS Low Motion Blur, Aspect Ratio: 20:9, Screen-to-Body Ratio: 92%"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 14",
                        "Processor Brand": "Snapdragon",
                        "Processor Type": "7s Gen 2"
                    }
                },
                "highlights": [
                    "12 GB RAM | 256 GB ROM",
                    "7.02 cm (6.7 inch) Full HD+ Display",
                    "50MP + 13MP | 32MP Front Camera",
                    "5000 mAh Battery",
                    "7s Gen 2 Processor"
                ]
            },
            {
                "id": 2,
                "title": "SAMSUNG Galaxy S23 5G (Cream, 256 GB)  (8 GB RAM)",
                "description": "Give yourself a smartphone that recognises your emotions and responds appropriately. The Samsung Galaxy S23 5G's enhanced AI and Nightography feature produces low-light photos and videos that are vivid and colourful from dusk to dawn and back again. The Snapdragon processor in this phone also offers quick video streaming and gaming. Additionally, adaptive 120 Hz makes scrolling fluid, and Eye Comfort Shield guards against eye fatigue even while looking in low light.",
                "price": 52999,
                "discountPercentage": 10,
                "rating": 4.69,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/samsung.webp",
                "category": "mobile electronics phone smartphone ",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, Sim Ejection Pin, USB Cable, Manual",
                        "Model Number": "SM-S911BZECINS",
                        "Model Name": "Galaxy S23 5G",
                        "Color": "Cream",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "Hybrid Sim Slot": "Yes"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "8 GB"
                    },
                    "Display Features": {
                        "Display Size": "15.49 cm (6.1 inch)",
                        "Resolution": "2340 x 1080 Pixels",
                        "Display Type": "Full HD+ Dynamic AMOLED 2X",
                        "Other Display Features": "Adaptive Refresh Rate: 48 Hz - 120Hz"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 13",
                        "Processor Brand": "Snapdragon",
                        "Processor Type": "Qualcomm Snapdragon 8 Gen 2",
                        "Processor Core": "Octa Core"
                    }
                },
                "highlights": [
                    "8 GB RAM | 256 GB ROM",
                    "15.49 cm (6.1 inch) Full HD+ Display",
                    "50MP + 10MP + 12MP | 12MP Front Camera",
                    "3900 mAh Lithium Ion Battery",
                    "Qualcomm Snapdragon 8 Gen 2 Processor"
                ]
            },
            {
                "id": 3,
                "title": "POCO M6 5G (Polaris Green, 128 GB)  (4 GB RAM)",
                "description": "Welcome to the future of smartphones – the POCO M6 5G, where innovation meets elegance, power, and speed. The POCO M6 5G is a statement of technological prowess, design excellence, and user-centric innovation. Embrace the future with a device that combines speed, storage, stunning visuals, and top-notch security. Elevate your mobile experience with the POCO M6 – where every feature is a testament to a new era in smartphone excellence.",
                "price": 12999,
                "discountPercentage": 28,
                "rating": 4.1,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/poco.webp",
                "category": "mobile electronics phone smartphone poco",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"

                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, 10W Charger, USB Type-C Cable, Sim Eject Tool, Quick Start Guide, Warranty Card",
                        "Model Number": "MZB0G4DIN",
                        "Model Name": "M6 5G",
                        "Color": "Polaris Green",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "SAR Value": "SAR Limit: 1.6 W/kg, Head SAR: 0.858 W/kg, Body SAR: 0.863 W/kg"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "128 GB",
                        "RAM": "6 GB"
                    },
                    "Display Features": {
                        "Display Size": "17.12 cm (6.74 inch)",
                        "Resolution": "1650 x 720 Pixels",
                        "Display Type": "HD+ 90Hz Display with Corning Gorilla Glass 3 Protection",
                        "GPU": "Arm Mali-G57 MC2"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 13",
                        "Processor Brand": "Mediatek",
                        "Processor Type": "Mediatek Dimensity 6100+",
                        "Processor Core": "Octa Core"
                    }
                },
                "highlights": [
                    "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "17.12 cm (6.74 inch) HD+ Display",
                    "50MP Rear Camera | 5MP Front Camera",
                    "5000 mAh Lithium Ion Battery",
                    "Mediatek Dimensity 6100+ Processor"
                ]
            },
            {
                "id": 4,
                "title": "Google Pixel 9 (Wintergreen, 256 GB)  (12 GB RAM)",
                "description": "Meet the Pixel 9 with Gemini. Engineered by Google, Pixel gets the best of Google’s AI first. So that you can take amazing photos, make edits like magic, and get things done even easier. Furthermore, Google Tensor G4 is Pixel's most powerful chip yet. It's built for advanced AI like Gemini, cutting-edge photos and videos, and smarter ways to help all day. Moreover, Pixel can handle everyday drops, spills, and dust. The display is scratch and damage-resistant, made with Corning Gorilla Glass Victus 2.",
                "price": 79999,
                "discountPercentage": 8,
                "rating": 4.1,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/google.webp",
                "category": "mobile electronics phone smartphone google pixel",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, 1 m USB-C to USB-C Cable (USB 2.0), Sim Tool",
                        "Model Number": "GA05844-IN",
                        "Model Name": "Pixel 9",
                        "Color": "Wintergreen",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim(Nano + eSIM)",
                        "Hybrid Sim Slot": "No"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "12 GB"
                    },
                    "Display Features": {
                        "Display Size": "16.0 cm (6.3 inch)",
                        "Resolution": "2424 x 1080 Pixels",
                        "Display Type": "Full 24-bit Depth for 16 Million Colours",
                        "Other Display Features": "Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 14",
                        "Processor Brand": "Google",
                        "Processor Type": "Google Tensor G4"
                    }
                },
                "highlights": [
                    "12 GB RAM | 256 GB ROM",
                    "16.0 cm (6.3 inch) Display",
                    "50MP + 48MP | 10.5MP Front Camera",
                    "4700 mAh Battery",
                    "Google Tensor G4 Processor"
                ]
            },
            {
                "id": 5,
                "title": "vivo T3 5G (Crystal Flake, 256 GB)  (8 GB RAM)",
                "description": "The Vivo T3 5G: the pinnacle of speed, innovation, and creativity. Powered by the MediaTek Dimensity 7200 chip, it's a fast smartphone, scoring 734+ on AnTuTu. With the segment's first Sony IMX882 OIS sensor, clear shots are guaranteed, even in low light. Immerse yourself in the 16.94 cm (6.67) 120 Hz Ultra Vision AMOLED display, unlocking a cinematic experience. Dual stereo speakers and a 5000 mAh battery with 44 W FlashCharge ensure an immersive audiovisual journey that lasts. Capture every moment with ultra-stable 4K video and super night portrait mode. Plus, enjoy seamless multitasking with 8 GB RAM and memory booster features. Elevate your mobile experience with the Vivo T3 5G, where speed meets innovation.",
                "price": 24999,
                "discountPercentage": 18,
                "rating": 4.1,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/vivo.webp",
                "category": "mobile electronics phone smartphone vivo t3",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, Type C to USB Cable, USB Power Adapter, Eject Tool, Phone Case, Protective Film, Documentation",
                        "Model Number": "V2334",
                        "Model Name": "T3 5G",
                        "Color": "Crystal Flake",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "Hybrid Sim Slot": "Yes"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "8 GB"
                    },
                    "Display Features": {
                        "Display Size": "16.0 cm (6.3 inch)",
                        "Resolution": "2424 x 1080 Pixels",
                        "Display Type": "Full 24-bit Depth for 16 Million Colours",
                        "Other Display Features": "Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 14",
                        "Processor Brand": "Mediatek",
                        "Processor Type": "Dimensity 7200"
                    }
                },
                "highlights": [
                    "8 GB RAM | 256 GB ROM",
                    "16.94 cm (6.67 inch) Full HD+ Display",
                    "50MP + 2MP | 16MP Front Camera",
                    "5000 mAh Battery",
                    "Dimensity 7200 Processor"
                ]
            },
            {
                "id": 6,
                "title": "Motorola Edge 50 Fusion (Forest Green, 256 GB)  (12 GB RAM)",
                "description": "Motorola Edge 50 Fusion (Forest Green, 256 GB)  (12 GB RAM)",
                "price": 27999,
                "discountPercentage": 10,
                "rating": 4.69,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/motorola-brand.webp",
                "category": "mobile electronics phone smartphone ",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, 68W Charger, USB Cable, Sim Tool, Protective Cover, Guides",
                        "Model Number": "PB300007IN|PB300015IN",
                        "Model Name": "Edge 50 Fusion",
                        "Color": "Forest Green",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "SAR Value": "Head: 1.04 W/Kg (at 1 g), Body: 1.05 W/Kg (at 1 g)"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "12 GB"
                    },
                    "Display Features": {
                        "Display Size": "17.02 cm (6.7 inch)",
                        "Resolution": "2400 x 1080 Pixels",
                        "Display Type": "Full HD+ pOLED Endless Edge Display",
                        "Other Display Features": "144Hz Refresh Rate, 10 Bit, 100% DCI P3, 1600 Peak Nits, 1200 HBM Nits, 360Hz Game Mode, Aqua Touch, 720Hz PWM/DC Dimming, Corning Glass 5, SGS Low Blue Light, SGS Low Motion Blur, Aspect Ratio: 20:9, Screen-to-Body Ratio: 92%"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 14",
                        "Processor Brand": "Snapdragon",
                        "Processor Type": "7s Gen 2"
                    }
                },
                "highlights": [
                    "12 GB RAM | 256 GB ROM",
                    "7.02 cm (6.7 inch) Full HD+ Display",
                    "50MP + 13MP | 32MP Front Camera",
                    "5000 mAh Battery",
                    "7s Gen 2 Processor"
                ]
            },
            {
                "id": 7,
                "title": "SAMSUNG Galaxy S23 5G (Cream, 256 GB)  (8 GB RAM)",
                "description": "Give yourself a smartphone that recognises your emotions and responds appropriately. The Samsung Galaxy S23 5G's enhanced AI and Nightography feature produces low-light photos and videos that are vivid and colourful from dusk to dawn and back again. The Snapdragon processor in this phone also offers quick video streaming and gaming. Additionally, adaptive 120 Hz makes scrolling fluid, and Eye Comfort Shield guards against eye fatigue even while looking in low light.",
                "price": 52999,
                "discountPercentage": 10,
                "rating": 4.69,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/samsung.webp",
                "category": "mobile electronics phone smartphone ",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, Sim Ejection Pin, USB Cable, Manual",
                        "Model Number": "SM-S911BZECINS",
                        "Model Name": "Galaxy S23 5G",
                        "Color": "Cream",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "Hybrid Sim Slot": "Yes"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "8 GB"
                    },
                    "Display Features": {
                        "Display Size": "15.49 cm (6.1 inch)",
                        "Resolution": "2340 x 1080 Pixels",
                        "Display Type": "Full HD+ Dynamic AMOLED 2X",
                        "Other Display Features": "Adaptive Refresh Rate: 48 Hz - 120Hz"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 13",
                        "Processor Brand": "Snapdragon",
                        "Processor Type": "Qualcomm Snapdragon 8 Gen 2",
                        "Processor Core": "Octa Core"
                    }
                },
                "highlights": [
                    "8 GB RAM | 256 GB ROM",
                    "15.49 cm (6.1 inch) Full HD+ Display",
                    "50MP + 10MP + 12MP | 12MP Front Camera",
                    "3900 mAh Lithium Ion Battery",
                    "Qualcomm Snapdragon 8 Gen 2 Processor"
                ]
            },
            {
                "id": 8,
                "title": "POCO M6 5G (Polaris Green, 128 GB)  (4 GB RAM)",
                "description": "Welcome to the future of smartphones – the POCO M6 5G, where innovation meets elegance, power, and speed. The POCO M6 5G is a statement of technological prowess, design excellence, and user-centric innovation. Embrace the future with a device that combines speed, storage, stunning visuals, and top-notch security. Elevate your mobile experience with the POCO M6 – where every feature is a testament to a new era in smartphone excellence.",
                "price": 12999,
                "discountPercentage": 28,
                "rating": 4.1,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/poco.webp",
                "category": "mobile electronics phone smartphone poco",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, 10W Charger, USB Type-C Cable, Sim Eject Tool, Quick Start Guide, Warranty Card",
                        "Model Number": "MZB0G4DIN",
                        "Model Name": "M6 5G",
                        "Color": "Polaris Green",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "SAR Value": "SAR Limit: 1.6 W/kg, Head SAR: 0.858 W/kg, Body SAR: 0.863 W/kg"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "128 GB",
                        "RAM": "6 GB"
                    },
                    "Display Features": {
                        "Display Size": "17.12 cm (6.74 inch)",
                        "Resolution": "1650 x 720 Pixels",
                        "Display Type": "HD+ 90Hz Display with Corning Gorilla Glass 3 Protection",
                        "GPU": "Arm Mali-G57 MC2"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 13",
                        "Processor Brand": "Mediatek",
                        "Processor Type": "Mediatek Dimensity 6100+",
                        "Processor Core": "Octa Core"
                    }
                },
                "highlights": [
                    "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "17.12 cm (6.74 inch) HD+ Display",
                    "50MP Rear Camera | 5MP Front Camera",
                    "5000 mAh Lithium Ion Battery",
                    "Mediatek Dimensity 6100+ Processor"
                ]
            },
            {
                "id": 9,
                "title": "Google Pixel 9 (Wintergreen, 256 GB)  (12 GB RAM)",
                "description": "Meet the Pixel 9 with Gemini. Engineered by Google, Pixel gets the best of Google’s AI first. So that you can take amazing photos, make edits like magic, and get things done even easier. Furthermore, Google Tensor G4 is Pixel's most powerful chip yet. It's built for advanced AI like Gemini, cutting-edge photos and videos, and smarter ways to help all day. Moreover, Pixel can handle everyday drops, spills, and dust. The display is scratch and damage-resistant, made with Corning Gorilla Glass Victus 2.",
                "price": 79999,
                "discountPercentage": 8,
                "rating": 4.1,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/google.webp",
                "category": "mobile electronics phone smartphone google pixel",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, 1 m USB-C to USB-C Cable (USB 2.0), Sim Tool",
                        "Model Number": "GA05844-IN",
                        "Model Name": "Pixel 9",
                        "Color": "Wintergreen",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim(Nano + eSIM)",
                        "Hybrid Sim Slot": "No"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "12 GB"
                    },
                    "Display Features": {
                        "Display Size": "16.0 cm (6.3 inch)",
                        "Resolution": "2424 x 1080 Pixels",
                        "Display Type": "Full 24-bit Depth for 16 Million Colours",
                        "Other Display Features": "Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 14",
                        "Processor Brand": "Google",
                        "Processor Type": "Google Tensor G4"
                    }
                },
                "highlights": [
                    "12 GB RAM | 256 GB ROM",
                    "16.0 cm (6.3 inch) Display",
                    "50MP + 48MP | 10.5MP Front Camera",
                    "4700 mAh Battery",
                    "Google Tensor G4 Processor"
                ]
            },
            {
                "id": 10,
                "title": "vivo T3 5G (Crystal Flake, 256 GB)  (8 GB RAM)",
                "description": "The Vivo T3 5G: the pinnacle of speed, innovation, and creativity. Powered by the MediaTek Dimensity 7200 chip, it's a fast smartphone, scoring 734+ on AnTuTu. With the segment's first Sony IMX882 OIS sensor, clear shots are guaranteed, even in low light. Immerse yourself in the 16.94 cm (6.67) 120 Hz Ultra Vision AMOLED display, unlocking a cinematic experience. Dual stereo speakers and a 5000 mAh battery with 44 W FlashCharge ensure an immersive audiovisual journey that lasts. Capture every moment with ultra-stable 4K video and super night portrait mode. Plus, enjoy seamless multitasking with 8 GB RAM and memory booster features. Elevate your mobile experience with the Vivo T3 5G, where speed meets innovation.",
                "price": 24999,
                "discountPercentage": 18,
                "rating": 4.1,
                "stock": 94,
                "brandimg": "/assets/images/prod-img/vivo.webp",
                "category": "mobile electronics phone smartphone vivo t3",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, Type C to USB Cable, USB Power Adapter, Eject Tool, Phone Case, Protective Film, Documentation",
                        "Model Number": "V2334",
                        "Model Name": "T3 5G",
                        "Color": "Crystal Flake",
                        "Browse Type": "Smartphones",
                        "SIM Type": "Dual Sim",
                        "Hybrid Sim Slot": "Yes"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "8 GB"
                    },
                    "Display Features": {
                        "Display Size": "16.0 cm (6.3 inch)",
                        "Resolution": "2424 x 1080 Pixels",
                        "Display Type": "Full 24-bit Depth for 16 Million Colours",
                        "Other Display Features": "Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                    },
                    "Os & Processor Features": {
                        "Operating System": "Android 14",
                        "Processor Brand": "Mediatek",
                        "Processor Type": "Dimensity 7200"
                    }
                },
                "highlights": [
                    "8 GB RAM | 256 GB ROM",
                    "16.94 cm (6.67 inch) Full HD+ Display",
                    "50MP + 2MP | 16MP Front Camera",
                    "5000 mAh Battery",
                    "Dimensity 7200 Processor"
                ]
            },
            {
                "id": 11,
                "title": "Men's Slim Fit Cotton Shirt",
                "description": "Elevate your casual wardrobe with this slim-fit cotton shirt for men. Crafted from premium breathable fabric, this shirt ensures comfort and style for all-day wear. With a modern design, button-down collar, and full sleeves, it's perfect for work or casual outings.",
                "price": 1499,
                "discountPercentage": 25,
                "rating": 4.5,
                "stock": 120,
                "brandimg": "/assets/images/brand-img/cottonworld.webp",
                "category": "fashion clothing men shirts casual slim-fit",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Slim Fit Shirt",
                        "Type": "Slim Fit Shirt",
                        "Ideal For": "Men",
                        "Occasion": "Casual, Office Wear",
                        "Color": "Sky Blue",
                        "Fabric": "100% Cotton"
                    },
                    "Dimensions": {
                        "Length": "Regular Length",
                        "Sleeves": "Full Sleeves",
                        "Collar": "Button-Down Collar",
                        "Fit": "Slim Fit"
                    },
                    "Wash Care": {
                        "Care Instructions": "Machine wash cold with similar colors. Use non-chlorine bleach if needed. Tumble dry low. Warm iron if required."
                    }
                },
                "highlights": [
                    "Premium 100% Cotton Fabric",
                    "Modern Slim Fit Design",
                    "Versatile Casual and Office Wear",
                    "Available in Multiple Sizes",
                    "Comfortable and Breathable Material"
                ]
            },
            {
                "id": 12,
                "title": "Women's Floral Print Maxi Dress",
                "description": "Step out in style with this elegant floral print maxi dress for women. Designed for comfort and flair, it features a flared hemline, a soft rayon blend, and a flattering fit.",
                "price": 1899,
                "discountPercentage": 20,
                "rating": 4.3,
                "stock": 85,
                "brandimg": "/assets/images/brand-img/prettyflora.webp",
                "category": "fashion clothing women dresses casual floral",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Maxi Dress",
                        "Type": "Maxi Dress",
                        "Ideal For": "Women",
                        "Occasion": "Casual, Party",
                        "Color": "Floral Print",
                        "Fabric": "Rayon Blend"
                    },
                    "Dimensions": {
                        "Length": "Ankle Length",
                        "Fit": "Flared Fit",
                        "Neckline": "Round Neck",
                        "Sleeves": "Sleeveless"
                    },
                    "Wash Care": {
                        "Care Instructions": "Hand wash with cold water. Do not bleach. Dry in shade."
                    }
                },
                "highlights": [
                    "Soft Rayon Blend Fabric",
                    "Flattering Fit and Flared Design",
                    "Bright Floral Print for Any Occasion",
                    "Lightweight and Comfortable"
                ]
            },
            {
                "id": 13,
                "title": "Unisex Sports Sneakers",
                "description": "Designed for active lifestyles, these unisex sports sneakers provide superior comfort and durability. With lightweight construction, a cushioned sole, and a breathable mesh upper, they are perfect for workouts or casual wear.",
                "price": 2999,
                "discountPercentage": 30,
                "rating": 4.6,
                "stock": 150,
                "brandimg": "/assets/images/brand-img/sportshoe.webp",
                "category": "fashion footwear sports casual sneakers",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 Pair of Sneakers",
                        "Type": "Sports Sneakers",
                        "Ideal For": "Men and Women",
                        "Occasion": "Sports, Casual",
                        "Color": "Black with White Accents",
                        "Material": "Mesh Upper, Rubber Sole"
                    },
                    "Dimensions": {
                        "Weight": "500 g",
                        "Closure": "Lace-Up",
                        "Fit": "Regular"
                    }
                },
                "highlights": [
                    "Lightweight and Comfortable Design",
                    "Breathable Mesh Upper Material",
                    "Durable Rubber Sole",
                    "Perfect for Workouts and Everyday Wear"
                ]
            },
            {
                "id": 14,
                "title": "Men's Slim Fit Denim Jeans",
                "description": "Upgrade your wardrobe with these slim-fit denim jeans for men. Featuring stretchable fabric and a classic design, these jeans are perfect for casual or semi-formal occasions.",
                "price": 2199,
                "discountPercentage": 22,
                "rating": 4.4,
                "stock": 100,
                "brandimg": "/assets/images/brand-img/denim.webp",
                "category": "fashion clothing men denim jeans",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Pair of Jeans",
                        "Type": "Slim Fit Jeans",
                        "Ideal For": "Men",
                        "Occasion": "Casual, Semi-Formal",
                        "Color": "Dark Blue",
                        "Material": "Stretchable Denim"
                    },
                    "Dimensions": {
                        "Fit": "Slim Fit",
                        "Length": "Regular Length",
                        "Closure": "Button and Zipper"
                    }
                },
                "highlights": [
                    "Stretchable and Durable Denim",
                    "Slim Fit for a Modern Look",
                    "Classic 5-Pocket Design",
                    "Perfect for Any Occasion"
                ]
            },
            {
                "id": 15,
                "title": "Women's Handcrafted Leather Tote Bag",
                "description": "A stylish and spacious tote bag made from premium leather. Perfect for work, shopping, or casual outings, this bag combines functionality with elegance.",
                "price": 3299,
                "discountPercentage": 15,
                "rating": 4.7,
                "stock": 60,
                "brandimg": "/assets/images/brand-img/leathervibes.webp",
                "category": "fashion accessories women bags leather tote",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Leather Tote Bag",
                        "Type": "Tote Bag",
                        "Ideal For": "Women",
                        "Color": "Brown",
                        "Material": "Genuine Leather"
                    },
                    "Dimensions": {
                        "Height": "12 inches",
                        "Width": "15 inches",
                        "Depth": "5 inches",
                        "Capacity": "20 Liters"
                    }
                },
                "highlights": [
                    "Premium Handcrafted Leather",
                    "Spacious and Durable Design",
                    "Stylish and Versatile for Any Occasion"
                ]
            },
            {
                "id": 16,
                "title": "Men's Classic Leather Belt",
                "description": "A classic leather belt that adds a touch of sophistication to your outfit. Made from high-quality leather with a sturdy buckle, it is both durable and stylish.",
                "price": 999,
                "discountPercentage": 20,
                "rating": 4.5,
                "stock": 200,
                "brandimg": "/assets/images/brand-img/leatherlux.webp",
                "category": "fashion accessories men belts leather classic",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Leather Belt",
                        "Type": "Belt",
                        "Ideal For": "Men",
                        "Color": "Black",
                        "Material": "Genuine Leather"
                    },
                    "Dimensions": {
                        "Length": "38 inches",
                        "Width": "1.5 inches"
                    }
                },
                "highlights": [
                    "High-Quality Leather Material",
                    "Durable Metal Buckle",
                    "Classic Design for Formal and Casual Wear"
                ]
            },
            {
                "id": 17,
                "title": "Unisex Polarized Sunglasses",
                "description": "Protect your eyes in style with these unisex polarized sunglasses. Designed for UV protection and glare reduction, they are perfect for outdoor activities.",
                "price": 2499,
                "discountPercentage": 30,
                "rating": 4.6,
                "stock": 80,
                "brandimg": "/assets/images/brand-img/shadez.webp",
                "category": "fashion accessories unisex sunglasses polarized outdoor",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Sunglasses, 1 x Case, 1 x Cleaning Cloth",
                        "Type": "Sunglasses",
                        "Ideal For": "Men and Women",
                        "Lens Material": "Polarized Glass",
                        "Frame Material": "Metal",
                        "Color": "Black"
                    },
                    "Dimensions": {
                        "Lens Width": "55 mm",
                        "Bridge Width": "18 mm",
                        "Temple Length": "145 mm"
                    }
                },
                "highlights": [
                    "Polarized Lenses for Glare Reduction",
                    "UV400 Protection for Maximum Eye Safety",
                    "Durable and Lightweight Frame"
                ]
            },
            {
                "id": 18,
                "title": "Women's Ethnic Embroidered Kurta",
                "description": "Embrace elegance with this ethnic embroidered kurta for women. Made from soft cotton, it features intricate designs perfect for festive occasions or casual wear.",
                "price": 1599,
                "discountPercentage": 25,
                "rating": 4.4,
                "stock": 90,
                "brandimg": "/assets/images/brand-img/ethnicstyle.webp",
                "category": "fashion clothing women ethnic kurta casual festive",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Kurta",
                        "Type": "Ethnic Kurta",
                        "Ideal For": "Women",
                        "Occasion": "Festive, Casual",
                        "Color": "Peach",
                        "Fabric": "Cotton"
                    },
                    "Dimensions": {
                        "Length": "Knee Length",
                        "Fit": "Regular Fit",
                        "Sleeves": "3/4th Sleeves"
                    },
                    "Wash Care": {
                        "Care Instructions": "Gentle machine wash. Do not bleach. Dry in shade."
                    }
                },
                "highlights": [
                    "Soft and Comfortable Cotton Fabric",
                    "Elegant Embroidered Design",
                    "Perfect for Festive and Casual Wear"
                ]
            },
            {
                "id": 19,
                "title": "Men's Wool Blend Winter Jacket",
                "description": "Stay warm and stylish with this wool blend winter jacket. Featuring a high-neck design and multiple pockets, it's perfect for cold weather.",
                "price": 3999,
                "discountPercentage": 35,
                "rating": 4.7,
                "stock": 50,
                "brandimg": "/assets/images/brand-img/winterwear.webp",
                "category": "fashion clothing men jackets winter wool",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Winter Jacket",
                        "Type": "Winter Jacket",
                        "Ideal For": "Men",
                        "Occasion": "Casual, Outdoor",
                        "Color": "Grey",
                        "Fabric": "Wool Blend"
                    },
                    "Dimensions": {
                        "Fit": "Regular Fit",
                        "Length": "Hip Length",
                        "Sleeves": "Full Sleeves"
                    }
                },
                "highlights": [
                    "Warm Wool Blend Fabric",
                    "High-Neck Design for Added Warmth",
                    "Multiple Pockets for Convenience"
                ]
            },
            {
                "id": 20,
                "title": "Women's Elegant Pearl Necklace",
                "description": "Add a touch of sophistication to your outfit with this elegant pearl necklace. Designed with high-quality pearls and a sturdy clasp, it is perfect for formal and casual occasions.",
                "price": 2299,
                "discountPercentage": 18,
                "rating": 4.8,
                "stock": 70,
                "brandimg": "/assets/images/brand-img/jeweluxe.webp",
                "category": "fashion accessories women jewelry pearl necklace",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Pearl Necklace",
                        "Type": "Necklace",
                        "Ideal For": "Women",
                        "Material": "Freshwater Pearls",
                        "Color": "White"
                    },
                    "Dimensions": {
                        "Length": "18 inches",
                        "Clasp Type": "Lobster Clasp"
                    }
                },
                "highlights": [
                    "High-Quality Freshwater Pearls",
                    "Elegant and Timeless Design",
                    "Perfect for Any Occasion"
                ]
            }, {
                "id": 21,
                "title": "Samsung Galaxy S23 Ultra (256 GB, Phantom Black)",
                "description": "Experience the next level of mobile innovation with the Samsung Galaxy S23 Ultra. Featuring a 200 MP quad-camera setup, Snapdragon 8 Gen 2 processor, and a stunning Dynamic AMOLED 2X display, this flagship device is built to excel in every way.",
                "price": 124999,
                "discountPercentage": 10,
                "rating": 4.8,
                "stock": 50,
                "brandimg": "/assets/images/brand-img/samsung.webp",
                "category": "electronics smartphone samsung mobile phone",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Handset, USB Cable, Ejector Pin, Documentation",
                        "Model Name": "Galaxy S23 Ultra",
                        "Color": "Phantom Black",
                        "SIM Type": "Dual SIM",
                        "Hybrid Sim Slot": "No"
                    },
                    "Memory & Storage Features": {
                        "Internal Storage": "256 GB",
                        "RAM": "12 GB"
                    },
                    "Display Features": {
                        "Display Size": "17.27 cm (6.8 inch)",
                        "Resolution": "3088 x 1440 pixels",
                        "Display Type": "Dynamic AMOLED 2X"
                    }
                },
                "highlights": [
                    "12 GB RAM | 256 GB ROM",
                    "17.27 cm (6.8 inch) Quad HD+ Display",
                    "200 MP + 12 MP + 10 MP + 10 MP Rear Camera | 12 MP Front Camera",
                    "5000 mAh Battery",
                    "Snapdragon 8 Gen 2 Processor"
                ]
            },
            {
                "id": 22,
                "title": "Apple MacBook Air M2 (13-inch, 512 GB, Midnight)",
                "description": "Apple MacBook Air M2 is a powerful and efficient device with an advanced M2 chip, Retina display, and an all-day battery. It’s ultra-slim, making it the perfect device for professionals on the go.",
                "price": 134999,
                "discountPercentage": 8,
                "rating": 4.9,
                "stock": 25,
                "brandimg": "/assets/images/brand-img/apple.webp",
                "category": "electronics laptop apple macbook air",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "MacBook Air, USB-C Power Adapter, USB-C Charge Cable",
                        "Model Name": "MacBook Air M2",
                        "Color": "Midnight",
                        "Processor": "M2 Chip",
                        "RAM": "16 GB",
                        "Storage": "512 GB SSD"
                    },
                    "Display Features": {
                        "Display Size": "13.6 inch",
                        "Resolution": "2560 x 1664 pixels",
                        "Display Type": "Retina Display"
                    }
                },
                "highlights": [
                    "Apple M2 Chip",
                    "16 GB RAM | 512 GB SSD",
                    "13.6 inch Retina Display",
                    "Up to 18 Hours of Battery Life"
                ]
            },
            {
                "id": 23,
                "title": "Sony WH-1000XM5 Noise Cancelling Headphones",
                "description": "Immerse yourself in crystal-clear audio with Sony WH-1000XM5 noise-cancelling headphones. Featuring industry-leading ANC technology, exceptional sound quality, and up to 30 hours of battery life.",
                "price": 29999,
                "discountPercentage": 15,
                "rating": 4.7,
                "stock": 70,
                "brandimg": "/assets/images/brand-img/sony.webp",
                "category": "electronics headphones sony wireless noise-cancelling",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "1 x Headphones, USB-C Cable, Carrying Case",
                        "Type": "Over-Ear",
                        "Connectivity": "Wireless",
                        "Color": "Black"
                    },
                    "Battery Features": {
                        "Battery Life": "30 Hours",
                        "Charging Time": "1.5 Hours"
                    }
                },
                "highlights": [
                    "Industry-Leading Noise Cancellation",
                    "Exceptional Sound Quality",
                    "30 Hours of Battery Life",
                    "Quick Charging (5 min = 5 hours playback)"
                ]
            },
            {
                "id": 24,
                "title": "LG 4K Ultra HD Smart OLED TV (55-inch)",
                "description": "Experience cinematic visuals with the LG 4K Ultra HD OLED Smart TV. Boasting a 55-inch display with self-lit pixels, Dolby Atmos, and AI ThinQ technology, it’s the perfect addition to your entertainment setup.",
                "price": 129999,
                "discountPercentage": 10,
                "rating": 4.8,
                "stock": 30,
                "brandimg": "/assets/images/brand-img/lg.webp",
                "category": "electronics tv lg oled smart 4k",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "TV Unit, Magic Remote, Power Cable, Documentation",
                        "Screen Size": "55 inches",
                        "Resolution": "3840 x 2160",
                        "Smart TV Features": "Yes",
                        "Display Type": "OLED"
                    }
                },
                "highlights": [
                    "55-inch OLED 4K Display",
                    "Dolby Vision & Dolby Atmos",
                    "WebOS with AI ThinQ",
                    "Self-Lit Pixels for Perfect Blacks"
                ]
            },
            {
                "id": 25,
                "title": "Dyson V15 Detect Cordless Vacuum Cleaner",
                "description": "Clean smarter with the Dyson V15 Detect cordless vacuum cleaner. Equipped with laser detection and advanced filtration, it ensures your home is spotless.",
                "price": 59999,
                "discountPercentage": 5,
                "rating": 4.6,
                "stock": 40,
                "brandimg": "/assets/images/brand-img/dyson.webp",
                "category": "electronics appliances vacuum dyson cleaning",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Vacuum Cleaner, Accessories, Charger, Manual",
                        "Type": "Cordless Vacuum Cleaner",
                        "Color": "Gold and Blue"
                    },
                    "Features": {
                        "Run Time": "60 Minutes",
                        "Suction Power": "230 AW",
                        "Filtration": "Advanced Whole-Machine Filtration"
                    }
                },
                "highlights": [
                    "Laser Detect Technology",
                    "Powerful 230 AW Suction",
                    "Advanced Filtration for Cleaner Air"
                ]
            }, {
                "id": 26,
                "title": "Canon EOS R8 Mirrorless Camera (24.2 MP, Black)",
                "description": "Capture stunning imagery with the Canon EOS R8, featuring a 24.2 MP full-frame sensor, advanced autofocus, and 4K video recording capabilities. Perfect for professionals and enthusiasts alike.",
                "price": 179999,
                "discountPercentage": 12,
                "rating": 4.7,
                "stock": 15,
                "brandimg": "/assets/images/brand-img/canon.webp",
                "category": "electronics camera canon mirrorless photography",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Camera Body, Lens Kit, Battery, Charger, Strap, Manual",
                        "Model Name": "EOS R8",
                        "Sensor Type": "Full Frame CMOS",
                        "Lens Mount": "RF Mount"
                    },
                    "Camera Features": {
                        "Resolution": "24.2 MP",
                        "Video Recording": "4K UHD",
                        "ISO Range": "100-102400",
                        "Autofocus Points": "1053 Points"
                    }
                },
                "highlights": [
                    "24.2 MP Full Frame Sensor",
                    "4K UHD Video Recording",
                    "Advanced Autofocus System",
                    "Compact and Lightweight Design"
                ]
            },
            {
                "id": 27,
                "title": "Bose SoundLink Revolve+ II Bluetooth Speaker",
                "description": "Bose SoundLink Revolve+ II delivers deep, loud, and immersive sound in every direction. With a durable, water-resistant design and up to 17 hours of playtime, it’s perfect for any adventure.",
                "price": 24999,
                "discountPercentage": 10,
                "rating": 4.6,
                "stock": 60,
                "brandimg": "/assets/images/brand-img/bose.webp",
                "category": "electronics audio bose bluetooth speaker",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Speaker, USB Cable, Manual",
                        "Connectivity": "Bluetooth, AUX",
                        "Water Resistance": "IP55"
                    },
                    "Battery Features": {
                        "Battery Life": "17 Hours",
                        "Charging Time": "4 Hours"
                    }
                },
                "highlights": [
                    "360° Sound Coverage",
                    "Water-Resistant Design",
                    "Up to 17 Hours of Battery Life",
                    "Built-in Voice Assistant Support"
                ]
            },
            {
                "id": 28,
                "title": "Apple iPad Pro M2 (12.9-inch, 128 GB, Silver)",
                "description": "The Apple iPad Pro with the M2 chip is a powerhouse device for productivity and creativity. Boasting a 12.9-inch Liquid Retina XDR display and support for Apple Pencil 2, it’s ideal for professionals on the go.",
                "price": 109999,
                "discountPercentage": 8,
                "rating": 4.8,
                "stock": 40,
                "brandimg": "/assets/images/brand-img/apple.webp",
                "category": "electronics tablet apple ipad pro",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "iPad Pro, USB-C Cable, Charger",
                        "Display Size": "12.9 inch",
                        "Processor": "Apple M2 Chip",
                        "Storage": "128 GB",
                        "Connectivity": "Wi-Fi"
                    },
                    "Display Features": {
                        "Resolution": "2732 x 2048 pixels",
                        "Display Type": "Liquid Retina XDR"
                    }
                },
                "highlights": [
                    "Apple M2 Chip",
                    "12.9-inch Liquid Retina XDR Display",
                    "Supports Apple Pencil 2",
                    "All-day Battery Life"
                ]
            },
            {
                "id": 29,
                "title": "Fitbit Charge 5 Fitness Tracker (Graphite/Black)",
                "description": "Stay on top of your health with Fitbit Charge 5. Packed with features like heart rate monitoring, SpO2 tracking, and stress management, it’s your perfect fitness companion.",
                "price": 14999,
                "discountPercentage": 20,
                "rating": 4.5,
                "stock": 90,
                "brandimg": "/assets/images/brand-img/fitbit.webp",
                "category": "electronics fitness tracker fitbit smartwatch",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Tracker, Charging Cable, Manual",
                        "Display Type": "AMOLED",
                        "Battery Life": "7 Days",
                        "Water Resistance": "50m"
                    },
                    "Features": {
                        "Heart Rate Monitoring": "Yes",
                        "SpO2 Tracking": "Yes",
                        "Stress Management": "Yes"
                    }
                },
                "highlights": [
                    "AMOLED Display",
                    "7 Days Battery Life",
                    "24/7 Heart Rate Monitoring",
                    "Sleep and Stress Tracking"
                ]
            },
            {
                "id": 30,
                "title": "Logitech MX Master 3S Wireless Mouse",
                "description": "The Logitech MX Master 3S is the ultimate precision mouse for professionals, featuring customizable buttons, ergonomic design, and advanced tracking technology for seamless workflows.",
                "price": 8999,
                "discountPercentage": 15,
                "rating": 4.8,
                "stock": 80,
                "brandimg": "/assets/images/brand-img/logitech.webp",
                "category": "electronics accessories logitech mouse wireless",
                "thumbnail": "/src/assets/iphone/1.jpg",
                "images": [
                    "/src/assets/iphone/1.jpg",
                    "/src/assets/iphone/2.jpg",
                    "/src/assets/iphone/3.jpg",
                    "/src/assets/iphone/4.jpg",
                    "/src/assets/iphone/5.jpg"
                ],
                "spec": {
                    "General": {
                        "In The Box": "Mouse, USB Receiver, USB-C Cable, Manual",
                        "Connectivity": "Wireless",
                        "Color": "Black",
                        "DPI": "Up to 8000"
                    },
                    "Battery Features": {
                        "Battery Life": "Up to 70 Days",
                        "Charging Type": "USB-C"
                    }
                },
                "highlights": [
                    "Customizable Buttons",
                    "Up to 8000 DPI",
                    "Ergonomic Design",
                    "70 Days Battery Life"
                ]
            }
        ]
    )
    const [cartitem,setCartitem]=useState(JSON.parse(localStorage.getItem("cartitem"))||[])
    const [wishlist,setWishList]=useState(JSON.parse(localStorage.getItem("wishlist"))||[])
    const localStorages=(name,data)=>{
        localStorage.setItem(name,JSON.stringify(data))
    }
    
    const handelcart=(id,category)=>{
        const existingItem = cartitem.find(item => item.id === id);
        if (existingItem) {
            const updatedCart = cartitem.map(item =>
                item.id === id
                    ? { ...item, cartquantity: item.cartquantity + 1 }
                    : item
            );
            localStorages("cartitem",updatedCart);
            setCartitem(updatedCart)
        } else {
            const newCart = {
                id: id,
                category: category,
                cartquantity: 1,
            };
            const productdata=[...cartitem, newCart]
            localStorages("cartitem",productdata)
            setCartitem(productdata)
        }
    }

    const handelWishlist =(id,category) =>{
        const existingItem = wishlist.findIndex(item => item.id === id);
        
        if (existingItem!=-1) {
            const filterwishlist=wishlist.filter(item => item.id != id);
            localStorages("wishlist",filterwishlist);
            setWishList(filterwishlist)
        } else {
            const wishitemnew = {
                id: id,
                category: category,
                cartquantity: 1,
            };
            const productdata=[...wishlist, wishitemnew]
            localStorages("wishlist",productdata)
            setWishList(productdata)
        }
    }
    const wishlistbtncolor=(id)=>{
        const existingColor=wishlist.findIndex(item=>item.id==id)
        return existingColor
    }
    return (
        <>
            <Navbar cartitem={cartitem} wishlist={wishlist}/>
            <main >
                <Routes>
                    <Route path="/" element={<Home items={items} setItems={setItems} />} />
                    <Route path="/Product/:id" element={<Product items={items} handelWishlist={handelWishlist} wishlistbtncolor={wishlistbtncolor} />}/>
                    <Route path="/Cart" element={<Cart items={items} handelcart={handelcart} setCartitem={setCartitem} cartitem={cartitem} localStorages={localStorages}/>}  />
                    <Route path="/WishList" element={<WishList wishlist={wishlist} setWishList={setWishList}  items={items} localStorages={localStorages}  handelcart={handelcart} />} />
                    <Route path="/ProductDetail/:id/:cat" element={<ProductDetail items={items} handelcart={handelcart} handelWishlist={handelWishlist} wishlistbtncolor={wishlistbtncolor} />} />
                </Routes>
            </main>
            <Footer/>
        </>

    );
};

export default App;
