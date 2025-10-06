// datasets.js
const datasets = [
    {
        id: 'concrete-factory',
        src: 'https://demo.nira.app/a/e0UBPCOHQXSGlOtvXLDTpQ/2',
        headline: 'Concrete Factory',
        type: 'p3',
        info: {
            partnerInfo: 'NIRA',
            flightHeight: '10m',
            gsd: '0.04 cm',
            camera: 'IXM-100',
            speed: '3 m/s'
        },
        text: "This concrete inspection was flow with the Phase One P3 combined with the IXM-100 and the DJI M300. We executed an automated flight mission with Drone Harmony which took around 30 minutes to Capture. This data was then processed in RealityCapture to give a final model which you can see hosted here in NIRA",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/7W5u4cmnpCk?si=WlNB_d3nhJbK14aP",
        iframeMarginTop: '60px'
    },

    {
        id: 'Faxe-Mining-80mm',
        src: 'https://app.surveytransfer.net/file/7b5c865e-1341-4daf-9dba-1b5b4330511b?shareKey=w1UJ5ZjvXoZD9ANHTh7nuhjDlu4FvQO6E1ixpFJSbq4',
        headline: 'Faxe Mining Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'PIX4D',
            flightHeight: '60m',
            gsd: '0.25 cm',
            camera: 'P5 80mm',
            speed: '15 m/s'
        },
        text: "This data was captured with the Phase One P5 80mm on the Quantum Systems Trinity Pro in partnership with Spectrofly. We flew 60m above our take off altitude. The mine depth was a maximum of 50m giving varied GSD across this model. All of this data was captured in a single flight of around 45 minutes and combined in Pix4D to give this result. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/vtYsx0iuOpY"
    }

    ,

    {
        id: 'Picterra-Plowman-Craven',
        src: 'https://cloud.picterra.ch/internal/7e6b9a3e-11ae-4ca4-9608-5c2339361b34/plowman/v2/index.html',
        headline: 'Rail AI Detection',
        type: 'p3',
        info: {
            partnerInfo: 'Plowman Craven & Picterra',
            flightHeight: '25m',
            gsd: '0.1 cm',
            camera: 'GS100 80mm',
            speed: '6 m/s'
        },
        text: "Network Rail, a key partner in the In2Track3 project, showcases advanced technology integrated into the initiative to enhance railway infrastructure inspection. Utilizing drones equipped with a high-resolution Phase One camera, the project leverages cutting-edge photogrammetry software to enable autonomous inspections of switches and crossings. The exceptional image quality captured by the Phase One camera significantly improves AI-driven analysis, ensuring more precise and reliable inspection results.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/inspiration/pc-rail-inspection-2/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/MinEni6xmmg"
    }

    ,

    {
        id: 'Airport-Ortho',
        src: 'https://app.surveytransfer.net/file/444ab3ae-a82f-4d33-99c9-d195150763d4?shareKey=Y4Te9HYhBGSgVE9XneCmx8cdBfIn9la42R6c4IGXDqI',
        headline: 'Airport Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'PIX4D',
            flightHeight: '60m',
            gsd: '0.25 cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "This data was captured with the Phase One P5 80mm on the Quantum Systems Trinity Pro. We flew 60m above the UAS test centre in Odense, Denmark. The purpose of this dataset was to show the extreme accuracy of the P5 system when paired with the Trinity Pro. In this example we managed to achieve an absolute accuracy of 0.5cm. All of this data was captured in a single flight of around 45 minutes and combined in Pix4D to give this result. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "https://www.phaseone.com/2024/09/19/bringing-fixed-wing-vtol-uavs-to-a-new-accuracy-frontier-from-cm-to-mm/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/R5hf-4IKiUw?si=nSW5tQOzbi6G2YIk"
    },
    {
        id: 'Railway-BE',
        src: 'https://app.surveytransfer.net/file/63496f53-3c27-4bee-ba82-b23f3020a02e?shareKey=7Q3xbQrmbqMnPGWMkxKjOSpEA48QKizmTkjc1VnfBog',
        headline: 'Railway Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'PIX4D',
            flightHeight: '60m',
            gsd: '0.25 cm',
            camera: 'P5 80mm',
            speed: '15 m/s'
        },
        text: "This data was captured with the Phase One P5 80mm on the Quantum Systems Trinity Pro in partnership with Infrabel. We flew 60m above the rail, covering 2km in 6 minutes showing a very high efficiency of the P5. This was then processed in Pix4D to give this result. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/0Jg3VgNvVMI"
    },
    {
        id: 'Danish-Rail',
        src: 'https://app.gnextlabs.com/embedded/viewer/6c07d6547c6005c2a6e5837ece57661a',
        headline: 'Rail Mesh',
        type: 'p3',
        info: {
            partnerInfo: 'GNEXT',
            flightHeight: '25m',
            gsd: '0.11 cm',
            camera: 'P3 80mm',
            speed: '3 m/s'
        },
        text: "This rail inspection was flow with the Phase One P3 combined with the IXMGS120 and the DJI M350. We flew a manual mission using automated distance triggering on the P3 capturing 2 different angles of the rail. (Note only one side of the rail was captured) which took around 10 minutes to capture. The IIQs were then uploaded directly to Gnext which processed this model in their cloudbased software. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/pkahJenv7CU?si=KQtRXWQg0QVvoj3l"
    }

    ,
    {
        id: 'Moving-Wind',
        src: 'https://3d7e2f09aef4e6e5e8bf-2e6cbc6a292bb4fa6468eb77c1a16f2d.ssl.cf5.rackcdn.com/index.html',
        headline: 'Moving Turbine',
        type: 'p3',
        info: {
            partnerInfo: 'PhaseOne',
            flightHeight: '20-40m',
            gsd: 'About 0.1 cm',
            camera: 'P3 80mm',
            speed: '3 m/s'
        },
        text: "",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "https://www.phaseone.com/inspiration/inspecting-wind-turbine-blades-while-they-are-rotating/",
        youtubeUrl: "https://www.youtube.com/embed/8YeUBc9NEkA"
    }






    ,
    {
        id: 'Cell-Tower',
        src: 'https://demo.nira.app/a/qwPQTi3uRwqNDZi_tPuzFA/1',
        headline: 'Cell Tower',
        type: 'p3',
        info: {
            partnerInfo: 'NIRA',
            flightHeight: '7m',
            gsd: '0.03 cm',
            camera: 'P3 80mm',
            speed: '3 m/s'
        },
        text: "This cell tower inspection was flow with the Phase One P3 combined with the IXMGS120 and the DJI M350. We executed an automated flight mission with Drone Harmony which took around 30 minutes to Capture and combined this with some manual flying to complete this. For this example we took many more images than would be traditionally needed to ensure we could make the best possible model. This data was then processed by NIRA and hosted on their platform.",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/e-TOY9UdtMs?si=jy44oUJLJpEWZm8v",
        iframeMarginTop: '60px'
    },
    {
        id: 'Town-Roof',
        src: 'https://app.surveytransfer.net/file/c839b3f4-7b01-49b3-b7a3-9d2220a84d99?shareKey=O_e4duaB9cvPEVvF-lvBLC_PZG-q_lvtLSkTpkGORGw',
        headline: 'Town inspection Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'Drone Institute',
            flightHeight: '90m',
            gsd: '0.38 cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "Dronestitute’s hail damage detection system was put to the test in Aurora, Colorado, where the Trinity Pro and P5 camera flew over 110 acres of urban terrain. Led by team members Nick, Andrew, and Byron, the mission demonstrated how effectively the Trinity Pro and P5 could handle real-world conditions while delivering actionable results.",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "https://www.phaseone.com/2024/12/17/revolutionizing-hail-damage-detection-how-dronestitute-leverages-trinity-pro-and-phase-one-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/HkCy7SDwwBI"
    }

    ,
    {
        id: 'Dickson-Airfield',
        src: 'https://app.surveytransfer.net/view/02a6aa2b-743c-4c44-8440-73c90a4768ce?shareKey=EEksdo1Dhe8lc-KYS8kFlwAuv3O0E3MTrO3vVJG5Zuo',
        headline: 'P5 Dickson Airfield',
        type: 'hidden',
        info: {
            partnerInfo: 'DOT',
            flightHeight: '70m',
            gsd: '0.3 cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P3-Infrabel',
        src: 'https://app.surveytransfer.net/file/ab42958b-aea5-4dfc-ba01-9292babcdbf8?shareKey=liEYEIzLrI6g3l8aMSTXz5tdkie-vfRLUUxQustXWLg',
        headline: 'P3 Infrabel',
        type: 'hidden',
        info: {
            partnerInfo: 'Infrabel',
            flightHeight: '25m',
            gsd: '0.1 cm',
            camera: 'P3 80mm',
            speed: '5 m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P3-Easteregg-Hunt',
        src: 'https://app.surveytransfer.net/file/5d1c9468-1584-47be-b29b-a66fb9045fd4?shareKey=hPrbRaZihAOKNxOsngU95QUEBaboQw77nMY3biUBqxw',
        headline: 'P3 Easteregg Hunt',
        type: 'hidden',
        info: {
            partnerInfo: 'Fyns Sommerland',
            flightHeight: '60m',
            gsd: '0.26 cm',
            camera: 'P3 80mm',
            speed: '5m m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P3-Faxe',
        src: 'https://app.surveytransfer.net/view/a5f72c5b-6c42-4865-abd6-165edf61e718?shareKey=w1UJ5ZjvXoZD9ANHTh7nuhjDlu4FvQO6E1ixpFJSbq4',
        headline: 'P5 Faxe 80 + 35',
        type: 'hidden',
        info: {
            partnerInfo: 'Spektrofly',
            flightHeight: '120m',
            gsd: '1.18 cm',
            camera: 'P5 35mm',
            speed: '18m m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'Power-Line-snow',
        src: 'https://eb8b473fc414f223cd7c-60db0e4f5bd76230b6bb418631a18948.ssl.cf5.rackcdn.com',
        headline: 'Powerline inspection',
        type: 'p5',
        info: {
            partnerInfo: 'PhaseOne',
            flightHeight: '120m (60m to the asset)',
            gsd: '~3mm',
            camera: 'P5',
            speed: '18 m/s'
        },
        text: "P5 (mounted on fixed wing VTOL UAV)",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'dynamic-house',
        src: 'Tools/BAF/DynamicRange/house.html',
        headline: 'Dynamic Range',
        type: 'toolbox',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '60',
            gsd: '0.25 cm',
            camera: 'GS120',
            speed: '0 m/s'
        },
        text: "The Phase One camera, combined with IIQ files, is the perfect solution for drone photography in demanding lighting conditions. Its exceptional dynamic range ensures critical details are preserved in both shadows and highlights, even when capturing images against the sun or in high-contrast environments. This capability is vital for professionals who rely on accurate and usable data for analysis, mapping, and inspection. With Phase One, you get unmatched image quality and post-processing flexibility, making it the ideal choice for aerial photography where precision matters most.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/solutions/geospatial-solutions/uav-payloads/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/s5b5PBt1Z_A?si=CnDybQi9mSdKHjMd"
    }
    ,
    {
        id: 'dynamic-house_p5',
        src: 'Tools/BAF/DynamicRange/house.html',
        headline: 'Dynamic Range',
        type: 'p3',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '60',
            gsd: '0.25 cm',
            camera: 'GS120',
            speed: '0 m/s'
        },
        text: "The Phase One camera, combined with IIQ files, is the perfect solution for drone photography in demanding lighting conditions. Its exceptional dynamic range ensures critical details are preserved in both shadows and highlights, even when capturing images against the sun or in high-contrast environments. This capability is vital for professionals who rely on accurate and usable data for analysis, mapping, and inspection. With Phase One, you get unmatched image quality and post-processing flexibility, making it the ideal choice for aerial photography where precision matters most.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/solutions/geospatial-solutions/uav-payloads/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/afKahiF7mL4"
    }
    ,
    {
        id: 'Pas880-Ljubljana',
        src: 'https://www.arcgis.com/home/webscene/viewer.html?disableFeatures=im-shading&webscene=68fe59a173784eabb94752f237684259',
        headline: 'Ljubljana',
        type: 'PAS',
        info: {
            partnerInfo: 'Flycom Technologies',
            flightHeight: '1400 Meter',
            gsd: '5 cm',
            camera: 'PAS 880',
            speed: '60 m/s'
        },
        text: "Slovenia’s Surveying and Mapping Authority (GURS) partnered with Flycom Technologies and Phase One in 2023 to create 3D city models of Ljubljana, Bled, and Murska Sobota. Using the PAS 880i Oblique Camera System, high-resolution oblique and nadir images were captured efficiently, covering 176 km² in total. These images enabled the generation of orthophotos, 3D meshes, and digital surface models, essential for urban planning, disaster response, and infrastructure inspection. The detailed imagery also captured vertical surfaces, such as buildings and cliffs, enhancing analysis capabilities. This project demonstrates the potential of advanced 3D data in streamlining government operations and decision-making processes.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/inspiration/revolutionizing-slovenian-urban-planning/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/SVBfK1TS9Go"
    },
    {
        id: 'Pas-Damage-Tornado',
        src: 'https://surdex.maps.arcgis.com/apps/instant/media/index.html?appid=5f075c8ba75d4e6bb14b8111f7e6ed51',
        headline: 'Tornado Damage',
        type: 'PAS',
        info: {
            partnerInfo: 'Surdex',
            flightHeight: '',
            gsd: '',
            camera: 'PAS',
            speed: ''
        },
        text: "On the morning of Saturday, May 17, just hours after a destructive tornado swept through parts of the St. Louis region, Surdex Corporation launched a rapid aerial data collection mission. Using the Phase One PAS Pana large-format aerial system, the team successfully captured high-resolution imagery of the affected areas to support emergency response, damage assessment, and recovery operations. This swift deployment highlights the power of integrated geospatial technology—combining aerial expertise and cutting-edge imaging systems to deliver mission-critical insights when timing matters most. ",
        downloadUrl: "",
        caseStoryUrl: "https://storymaps.arcgis.com/stories/786f2e531eb14d4b8298f51a0ca62a56",
        youtubeUrl: "",
        iframeMarginTop: '60px'

    }









    ,
    {
        id: 'MIO',
        src: 'Tools/Gallery/Tuscan/tuscan.html',
        headline: 'MIO',
        type: 'hidden',
        info: {
            partnerInfo: '',
            flightHeight: '',
            gsd: '',
            camera: '',
            speed: ''
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    },
    {
        id: 'MIO2',
        src: 'Tools/BAF/DynamicRange/manned.html',
        headline: 'MIO2',
        type: 'hidden',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '60',
            gsd: '0.25 cm',
            camera: 'GS120',
            speed: '0 m/s'
        },
        text: "The Phase One camera, combined with IIQ files, is the perfect solution for drone photography in demanding lighting conditions. Its exceptional dynamic range ensures critical details are preserved in both shadows and highlights, even when capturing images against the sun or in high-contrast environments. This capability is vital for professionals who rely on accurate and usable data for analysis, mapping, and inspection. With Phase One, you get unmatched image quality and post-processing flexibility, making it the ideal choice for aerial photography where precision matters most.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/solutions/geospatial-solutions/uav-payloads/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/afKahiF7mL4"
    },
    {
        id: 'TinCup',
        src: 'https://proxyembed.replit.app/',
        headline: 'TinCup',
        type: 'her',
        info: {
            partnerInfo: 'verus.digital',
            flightHeight: 'xxxx',
            gsd: 'xxxx',
            camera: 'IXH-150',
            speed: '0 m/s'
        },
        text: "CultArm3D is the first mobile all-in-one solution for 3D digitization. Its modular design offers maximum versatility. Available in two versions, desktop and floorstanding, CultArm3D can be customized with various add-on modules to serve different purposes. We also offer digitization services as well as consulting, helping customers to find project-based solutions tailored to their needs.",
        downloadUrl: "",
        caseStoryUrl: "https://verus.digital",
        youtubeUrl: "https://player.vimeo.com/video/768085316"
    },
    {
        id: 'Elephant',
        src: 'https://proxyembed.replit.app/index2.html',
        headline: 'Elephant',
        type: 'her',
        info: {
            partnerInfo: 'verus.digital',
            flightHeight: 'xxxx',
            gsd: 'xxxx',
            camera: 'IXH-150',
            speed: ''
        },
        text: "CultArm3D is the first mobile all-in-one solution for 3D digitization. Its modular design offers maximum versatility. Available in two versions, desktop and floorstanding, CultArm3D can be customized with various add-on modules to serve different purposes. We also offer digitization services as well as consulting, helping customers to find project-based solutions tailored to their needs.",
        downloadUrl: "",
        caseStoryUrl: "https://verus.digital",
        youtubeUrl: "https://player.vimeo.com/video/768085316"
    }

    ,
    {
        id: 'High-Altitude',
        src: 'https://app.surveytransfer.net/project/b9cbfe58-25de-4a3e-afd7-08dabbc0c479/compare?shareKey=f0pn3BqoMcsfVvBg6jCO7YnabUBVWXyrZwmo5LYEjnk#3encl6c/1omvd2a',
        headline: 'High Altitude',
        type: 'p5',
        info: {
            partnerInfo: 'PhaseOne',
            flightHeight: '',
            gsd: '',
            camera: 'P5 80mm & , P5 35mm',
            speed: '18 m/s',
        },
        text: `
        
        <p> The table below allows you to compare different lens choices and their results at various altitudes on the Phase One P5. The same 33.5ha area was flown at three different altitudes to showcase the differences. Use the dropdowns in the corners to select and compare your preferred options.
  </p>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Open Sans', sans-serif; font-size: 15px; margin-top: 20px;">
  <thead>
    <tr style="background-color: #1c2333; color: white;">
      <th style="border: 1px solid #ccc; padding: 10px;">Lens / Altitude</th>
      <th style="border: 1px solid #ccc; padding: 10px;">GSD</th>
      <th style="border: 1px solid #ccc; padding: 10px;">Single Image Swath</th>
      <th style="border: 1px solid #ccc; padding: 10px;"># of Images</th>
    </tr>
  </thead>
  <tbody>
    <!-- 35mm Header -->
    <tr style="background-color: #e0e0e0; font-weight: bold;">
      <td colspan="4" style="border: 1px solid #ccc; padding: 10px;">35mm</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 10px;">35mm - 200m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">19.7mm</td>
      <td style="border: 1px solid #ccc; padding: 10px;">265m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">139</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 10px;">35mm - 400m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">39.4mm</td>
      <td style="border: 1px solid #ccc; padding: 10px;">531m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">54</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 10px;">35mm - 800m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">78.8mm</td>
      <td style="border: 1px solid #ccc; padding: 10px;">1062m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">22</td>
    </tr>

    <!-- 80mm Header -->
    <tr style="background-color: #e0e0e0; font-weight: bold;">
      <td colspan="4" style="border: 1px solid #ccc; padding: 10px;">80mm</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 10px;">80mm - 200m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">8.6mm</td>
      <td style="border: 1px solid #ccc; padding: 10px;">116m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">589</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 10px;">80mm - 400m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">17.2mm</td>
      <td style="border: 1px solid #ccc; padding: 10px;">232m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">172</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 10px;">80mm - 800m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">34.5mm</td>
      <td style="border: 1px solid #ccc; padding: 10px;">465m</td>
      <td style="border: 1px solid #ccc; padding: 10px;">59</td>
    </tr>
  </tbody>
</table>
`,
        downloadUrl: "https://app.surveytransfer.net/project/b9cbfe58-25de-4a3e-afd7-08dabbc0c479?shareKey=f0pn3BqoMcsfVvBg6jCO7YnabUBVWXyrZwmo5LYEjnk",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/1r52IgQAcIc?si=Dt1XF5iPrIBOEUdj",

    }


    ,
    {
        id: 'P5_VS_LR1',
        src: 'https://app.surveytransfer.net/project/b3371599-7ff6-4161-a589-00b450e9c4f1/compare?shareKey=dTwIQ_oT6U-NKbQIU671z2MINsSrcFDXbSh6QiWGQKM#3uhhgb4/0809e2f',
        headline: 'P5 vs LR1',
        type: 'hidden',
        info: {
            partnerInfo: 'PhaseOne',
            flightHeight: '100',
            gsd: '0.5cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: "",
        iframeMarginTop: '4px'
    }
    ,
    {
        id: '123',
        src: 'Tools/COOR/littlerock.html',
        headline: '123',
        type: 'hidden',
        info: {
            partnerInfo: '123',
            flightHeight: 'xxxx',
            gsd: 'xxxx',
            camera: '123',
            speed: ''
        },
        text: "CultArm3D is the first mobile all-in-one solution for 3D digitization. Its modular design offers maximum versatility. Available in two versions, desktop and floorstanding, CultArm3D can be customized with various add-on modules to serve different purposes. We also offer digitization services as well as consulting, helping customers to find project-based solutions tailored to their needs.",
        downloadUrl: "",
        caseStoryUrl: "https://verus.digital",
        youtubeUrl: "https://player.vimeo.com/video/768085316"
    }


    ,
    {
        id: 'P5_ABRIS_Lake',
        src: 'https://app.surveytransfer.net/file/5c8dbb1d-a4e0-4c41-a8b0-e120d9c230c5?shareKey=pBkrSRhqrVdigYDKAjiWUmpGZyVcRq911FNK93eubcI',
        headline: 'TerX Lake shore',
        type: 'p5',
        info: {
            partnerInfo: 'TerX Aero',
            flightHeight: '100m',
            gsd: '0.9mm',
            camera: 'P5',
            speed: '20m/s'
        },
        text: "This data was captured during the survey of 2 km of a lake shore with Phase One 35mm on the TerX-F fixed-wing with forward overlap of 70%, and side overlap of 55%. The survey was carried out in two passes with a flight time of 7 minutes. The Phase One P5 camera was equipped with SV Geo GNSS/INS system, which is used to determine the projection center of the images. The determination of exact positions was performed in PPK using Inertial Explorer",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }

    ,
    {
        id: 'P5_ABRIS_Solar',
        src: 'https://app.surveytransfer.net/file/b7328acf-3861-4a86-b836-feb3e8899064?shareKey=pBkrSRhqrVdigYDKAjiWUmpGZyVcRq911FNK93eubcI',
        headline: 'TerX Solar Station',
        type: 'p5',
        info: {
            partnerInfo: 'TerX Aero',
            flightHeight: '100m',
            gsd: '4.3mm',
            camera: 'P5 80mm lens',
            speed: '20m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P5_ABRIS_Rail',
        src: 'https://app.surveytransfer.net/file/f181f39a-606d-49a4-83f4-f4b1b14f17c7?shareKey=pBkrSRhqrVdigYDKAjiWUmpGZyVcRq911FNK93eubcI',
        headline: 'TerX Rail',
        type: 'p5',
        info: {
            partnerInfo: 'TerX Aero',
            flightHeight: '100m',
            gsd: '4.1 mm',
            camera: 'P5 80mm lens',
            speed: '20m/s'
        },
        text: "0,7 km of railway was captured with Phase One 80mm on the TerX-F fixed-wing with forward overlap of 80%, and side overlap of 65%. The survey was carried out in two passes with a flight time of 3 minutes. The Phase One P5 camera was equipped with SV Geo GNSS/INS system, which is used to determine the projection center of the images. The determination of exact positions is performed in PPK using Inertial Explorer. Accuracy X/Y/Z RMSE 6mm/8mm/19mm obtained without using GCPs in data processing",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }

    ,
    {
        id: 'PAS_280_Kastellet',
        src: 'https://app.surveytransfer.net/file/39fa81ec-e9d3-4510-b3f3-a91fc0e1d838?shareKey=mlUXfmVqFSqvu-1MUGPTwhA9LMhLUyck8NJPrzmfLdM',
        headline: 'PAS280 Kastellet',
        type: 'PAS',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '5170 ft',
            gsd: '5 cm',
            camera: 'PAS280',
            speed: '120 Knots'
        },
        text: "This dataset captures the beautiful star-shaped fortress of Kastellet in the heart of Copenhagen. It’s a calm and detailed view of one of Copenhagen’s most recognizable landmarks, showing both its geometry and the life around it from above.",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'PAS_280_Kastellet_NIR',
        src: 'https://app.surveytransfer.net/file/0a04f198-968d-443a-a310-30b2966f25b0?shareKey=mlUXfmVqFSqvu-1MUGPTwhA9LMhLUyck8NJPrzmfLdM',
        headline: 'PAS280 Kastellet NIR',
        type: 'PAS',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '5170 ft',
            gsd: '5 cm',
            camera: 'PAS280',
            speed: '120 Knots'
        },
        text: "This dataset captures the beautiful star-shaped fortress of Kastellet in the heart of Copenhagen. It’s a calm and detailed view of one of Copenhagen’s most recognizable landmarks, showing both its geometry and the life around it from above.",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }



];




