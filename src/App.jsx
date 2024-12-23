

import Navbar from "./components/Nav/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import WishList from "./pages/Wishlist/WishList.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
const App = () => {
    const [items,setItems]=useState(
        [
        {
            "id": 1,
            "title": "Motorola Edge 50 Fusion (Forest Green, 256 GB)  (12 GB RAM)",
            "description": "Motorola Edge 50 Fusion (Forest Green, 256 GB)  (12 GB RAM)",
            "price":27999,
            "discountPercentage": 10,
            "rating": 3,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/motorola-brand.webp",
            "category": "mobile electronics phone smartphone ",
            "thumbnail": "/assets/images/product-image/id1/thumb-img.webp",
            "images": [
                "/assets/images/product-image/id1/id1-img-1.webp",
                "/assets/images/product-image/id1/id1-img-2.webp",
                "/assets/images/product-image/id1/id1-img-3.webp",
                "/assets/images/product-image/id1/id1-img-4.webp"
                
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, 68W Charger, USB Cable, Sim Tool, Protective Cover, Guides",
                    "Model Number": "PB300007IN|PB300015IN",
                    "Model Name": "Edge 50 Fusion",
                    "Color": "Forest Green",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "SAR Value":"Head: 1.04 W/Kg (at 1 g), Body: 1.05 W/Kg (at 1 g)"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "12 GB"
                },
                "Display Features":{
                    "Display Size":"17.02 cm (6.7 inch)",
                    "Resolution":"2400 x 1080 Pixels",
                    "Display Type":"Full HD+ pOLED Endless Edge Display",
                    "Other Display Features":"144Hz Refresh Rate, 10 Bit, 100% DCI P3, 1600 Peak Nits, 1200 HBM Nits, 360Hz Game Mode, Aqua Touch, 720Hz PWM/DC Dimming, Corning Glass 5, SGS Low Blue Light, SGS Low Motion Blur, Aspect Ratio: 20:9, Screen-to-Body Ratio: 92%"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 14",
                    "Processor Brand":"Snapdragon",
                    "Processor Type":"7s Gen 2"
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
            "price":52999,
            "discountPercentage": 10,
            "rating": 4.69,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/samsung.webp",
            "category": "mobile electronics phone smartphone ",
            "thumbnail": "/assets/images/product-image/id2/thumb.webp",
            "images": [
                "/assets/images/product-image/id2/thumb.webp",
                "/assets/images/product-image/id2/id2-img-2.webp",
                "/assets/images/product-image/id2/id2-img-3.webp",
                "/assets/images/product-image/id2/id2-img-4.webp",
                "/assets/images/product-image/id2/id2-img-5.webp"
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, Sim Ejection Pin, USB Cable, Manual",
                    "Model Number": "SM-S911BZECINS",
                    "Model Name": "Galaxy S23 5G",
                    "Color": "Cream",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "Hybrid Sim Slot":"Yes"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "8 GB"
                },
                "Display Features":{
                    "Display Size":"15.49 cm (6.1 inch)",
                    "Resolution":"2340 x 1080 Pixels",
                    "Display Type":"Full HD+ Dynamic AMOLED 2X",
                    "Other Display Features":"Adaptive Refresh Rate: 48 Hz - 120Hz"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 13",
                    "Processor Brand":"Snapdragon",
                    "Processor Type":"Qualcomm Snapdragon 8 Gen 2",
                    "Processor Core":"Octa Core"
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
            "price":12999,
            "discountPercentage": 28,
            "rating": 4.1,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/poco.webp",
            "category": "mobile electronics phone smartphone poco",
            "thumbnail": "/assets/images/product-image/id3/thumb.webp",
            "images": [
                "/assets/images/product-image/id3/thumb.webp",
                "/assets/images/product-image/id3/id3-img-2.webp",
                "/assets/images/product-image/id3/id3-img-3.webp",
                "/assets/images/product-image/id3/id3-img-4.webp"
                
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, 10W Charger, USB Type-C Cable, Sim Eject Tool, Quick Start Guide, Warranty Card",
                    "Model Number": "MZB0G4DIN",
                    "Model Name": "M6 5G",
                    "Color": "Polaris Green",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "SAR Value":"SAR Limit: 1.6 W/kg, Head SAR: 0.858 W/kg, Body SAR: 0.863 W/kg"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "128 GB",
                    "RAM": "6 GB"
                },
                "Display Features":{
                    "Display Size":"17.12 cm (6.74 inch)",
                    "Resolution":"1650 x 720 Pixels",
                    "Display Type":"HD+ 90Hz Display with Corning Gorilla Glass 3 Protection",
                    "GPU":"Arm Mali-G57 MC2"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 13",
                    "Processor Brand":"Mediatek",
                    "Processor Type":"Mediatek Dimensity 6100+",
                    "Processor Core":"Octa Core"
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
            "price":79999,
            "discountPercentage": 8,
            "rating": 4.1,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/google.webp",
            "category": "mobile electronics phone smartphone google pixel",
            "thumbnail": "/assets/images/product-image/id4/thumb.webp",
            "images": [
                "/assets/images/product-image/id4/thumb.webp",
                "/assets/images/product-image/id4/id4-img-2.webp",
                "/assets/images/product-image/id4/id4-img-3.webp",
                "/assets/images/product-image/id4/id4-img-4.webp"
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, 1 m USB-C to USB-C Cable (USB 2.0), Sim Tool",
                    "Model Number": "GA05844-IN",
                    "Model Name": "Pixel 9",
                    "Color": "Wintergreen",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim(Nano + eSIM)",
                    "Hybrid Sim Slot":"No"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "12 GB"
                },
                "Display Features":{
                    "Display Size":"16.0 cm (6.3 inch)",
                    "Resolution":"2424 x 1080 Pixels",
                    "Display Type":"Full 24-bit Depth for 16 Million Colours",
                    "Other Display Features":"Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 14",
                    "Processor Brand":"Google",
                    "Processor Type":"Google Tensor G4"
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
            "price":24999,
            "discountPercentage": 18,
            "rating": 4.1,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/vivo.webp",
            "category": "mobile electronics phone smartphone vivo t3",
            "thumbnail": "/assets/images/product-image/id5/thumb.webp",
            "images": [
                "/assets/images/product-image/id5/thumb.webp",
                "/assets/images/product-image/id5/id5-img-2.webp",
                "/assets/images/product-image/id5/id5-img-3.webp",
                "/assets/images/product-image/id5/id5-img-4.webp",
                "/assets/images/product-image/id5/id5-img-5.webp"
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, Type C to USB Cable, USB Power Adapter, Eject Tool, Phone Case, Protective Film, Documentation",
                    "Model Number": "V2334",
                    "Model Name": "T3 5G",
                    "Color": "Crystal Flake",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "Hybrid Sim Slot":"Yes"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "8 GB"
                },
                "Display Features":{
                    "Display Size":"16.0 cm (6.3 inch)",
                    "Resolution":"2424 x 1080 Pixels",
                    "Display Type":"Full 24-bit Depth for 16 Million Colours",
                    "Other Display Features":"Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 14",
                    "Processor Brand":"Mediatek",
                    "Processor Type":"Dimensity 7200"
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
            "price":27999,
            "discountPercentage": 10,
            "rating": 4.69,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/motorola-brand.webp",
            "category": "mobile electronics phone smartphone ",
            "thumbnail": "/assets/images/product-image/id1/thumb-img.webp",
            "images": [
                "/assets/images/product-image/id1/id1-img-1.webp",
                "/assets/images/product-image/id1/id1-img-2.webp",
                "/assets/images/product-image/id1/id1-img-3.webp",
                "/assets/images/product-image/id1/id1-img-4.webp"
                
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, 68W Charger, USB Cable, Sim Tool, Protective Cover, Guides",
                    "Model Number": "PB300007IN|PB300015IN",
                    "Model Name": "Edge 50 Fusion",
                    "Color": "Forest Green",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "SAR Value":"Head: 1.04 W/Kg (at 1 g), Body: 1.05 W/Kg (at 1 g)"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "12 GB"
                },
                "Display Features":{
                    "Display Size":"17.02 cm (6.7 inch)",
                    "Resolution":"2400 x 1080 Pixels",
                    "Display Type":"Full HD+ pOLED Endless Edge Display",
                    "Other Display Features":"144Hz Refresh Rate, 10 Bit, 100% DCI P3, 1600 Peak Nits, 1200 HBM Nits, 360Hz Game Mode, Aqua Touch, 720Hz PWM/DC Dimming, Corning Glass 5, SGS Low Blue Light, SGS Low Motion Blur, Aspect Ratio: 20:9, Screen-to-Body Ratio: 92%"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 14",
                    "Processor Brand":"Snapdragon",
                    "Processor Type":"7s Gen 2"
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
            "price":52999,
            "discountPercentage": 10,
            "rating": 4.69,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/samsung.webp",
            "category": "mobile electronics phone smartphone ",
            "thumbnail": "/assets/images/product-image/id2/thumb.webp",
            "images": [
                "/assets/images/product-image/id2/thumb.webp",
                "/assets/images/product-image/id2/id2-img-2.webp",
                "/assets/images/product-image/id2/id2-img-3.webp",
                "/assets/images/product-image/id2/id2-img-4.webp",
                "/assets/images/product-image/id2/id2-img-5.webp"
                
                
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, Sim Ejection Pin, USB Cable, Manual",
                    "Model Number": "SM-S911BZECINS",
                    "Model Name": "Galaxy S23 5G",
                    "Color": "Cream",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "Hybrid Sim Slot":"Yes"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "8 GB"
                },
                "Display Features":{
                    "Display Size":"15.49 cm (6.1 inch)",
                    "Resolution":"2340 x 1080 Pixels",
                    "Display Type":"Full HD+ Dynamic AMOLED 2X",
                    "Other Display Features":"Adaptive Refresh Rate: 48 Hz - 120Hz"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 13",
                    "Processor Brand":"Snapdragon",
                    "Processor Type":"Qualcomm Snapdragon 8 Gen 2",
                    "Processor Core":"Octa Core"
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
            "price":12999,
            "discountPercentage": 28,
            "rating": 4.1,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/poco.webp",
            "category": "mobile electronics phone smartphone poco",
            "thumbnail": "/assets/images/product-image/id3/thumb.webp",
            "images": [
                "/assets/images/product-image/id3/thumb.webp",
                "/assets/images/product-image/id3/id3-img-2.webp",
                "/assets/images/product-image/id3/id3-img-3.webp",
                "/assets/images/product-image/id3/id3-img-4.webp"
                
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, 10W Charger, USB Type-C Cable, Sim Eject Tool, Quick Start Guide, Warranty Card",
                    "Model Number": "MZB0G4DIN",
                    "Model Name": "M6 5G",
                    "Color": "Polaris Green",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "SAR Value":"SAR Limit: 1.6 W/kg, Head SAR: 0.858 W/kg, Body SAR: 0.863 W/kg"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "128 GB",
                    "RAM": "6 GB"
                },
                "Display Features":{
                    "Display Size":"17.12 cm (6.74 inch)",
                    "Resolution":"1650 x 720 Pixels",
                    "Display Type":"HD+ 90Hz Display with Corning Gorilla Glass 3 Protection",
                    "GPU":"Arm Mali-G57 MC2"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 13",
                    "Processor Brand":"Mediatek",
                    "Processor Type":"Mediatek Dimensity 6100+",
                    "Processor Core":"Octa Core"
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
            "price":79999,
            "discountPercentage": 8,
            "rating": 4.1,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/google.webp",
            "category": "mobile electronics phone smartphone google pixel",
            "thumbnail": "/assets/images/product-image/id4/thumb.webp",
            "images": [
                "/assets/images/product-image/id4/thumb.webp",
                "/assets/images/product-image/id4/id4-img-2.webp",
                "/assets/images/product-image/id4/id4-img-3.webp",
                "/assets/images/product-image/id4/id4-img-4.webp"
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, 1 m USB-C to USB-C Cable (USB 2.0), Sim Tool",
                    "Model Number": "GA05844-IN",
                    "Model Name": "Pixel 9",
                    "Color": "Wintergreen",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim(Nano + eSIM)",
                    "Hybrid Sim Slot":"No"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "12 GB"
                },
                "Display Features":{
                    "Display Size":"16.0 cm (6.3 inch)",
                    "Resolution":"2424 x 1080 Pixels",
                    "Display Type":"Full 24-bit Depth for 16 Million Colours",
                    "Other Display Features":"Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 14",
                    "Processor Brand":"Google",
                    "Processor Type":"Google Tensor G4"
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
            "price":24999,
            "discountPercentage": 18,
            "rating": 4.1,
            "stock": 94,
            "brandimg":"/assets/images/prod-img/vivo.webp",
            "category": "mobile electronics phone smartphone vivo t3",
            "thumbnail": "/assets/images/product-image/id5/thumb.webp",
            "images": [
                "/assets/images/product-image/id5/thumb.webp",
                "/assets/images/product-image/id5/id5-img-2.webp",
                "/assets/images/product-image/id5/id5-img-3.webp",
                "/assets/images/product-image/id5/id5-img-4.webp",
                "/assets/images/product-image/id5/id5-img-5.webp"
            ],
            "spec":{
                "General": {
                    "In The Box": "Handset, Type C to USB Cable, USB Power Adapter, Eject Tool, Phone Case, Protective Film, Documentation",
                    "Model Number": "V2334",
                    "Model Name": "T3 5G",
                    "Color": "Crystal Flake",
                    "Browse Type":"Smartphones",
                    "SIM Type":"Dual Sim",
                    "Hybrid Sim Slot":"Yes"
                },
                "Memory & Storage Features":{
                    "Internal Storage": "256 GB",
                    "RAM": "8 GB"
                },
                "Display Features":{
                    "Display Size":"16.0 cm (6.3 inch)",
                    "Resolution":"2424 x 1080 Pixels",
                    "Display Type":"Full 24-bit Depth for 16 Million Colours",
                    "Other Display Features":"Smooth Display (60 Hz - 120 Hz Refresh Rate), Corning Gorilla Glass Victus 2 Cover Glass, Upto 1800 Nits (HDR) and Upto 2700 Nits (Peak Brightness), >2,000,000:1 Contrast Ratio, HDR Support"
                },
                "Os & Processor Features":{
                    "Operating System":"Android 14",
                    "Processor Brand":"Mediatek",
                    "Processor Type":"Dimensity 7200"
                }
            },
            "highlights": [
                "8 GB RAM | 256 GB ROM",
                "16.94 cm (6.67 inch) Full HD+ Display",
                "50MP + 2MP | 16MP Front Camera",
                "5000 mAh Battery",
                "Dimensity 7200 Processor"
            ]
        }
    ]
    )
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home items={items}/>} />
            <Route path="/Product/:id" element={<Product items={items} /> } />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail/>} />
        </Routes>
        </>
        
    );
};

export default App;