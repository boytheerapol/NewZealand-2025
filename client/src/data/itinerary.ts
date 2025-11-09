export interface Location {
  name: string;
  description: string;
  images: string[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  locations: Location[];
  highlights: string[];
  accommodation?: string;
  mapRoute?: {
    origin: string;
    destination: string;
    waypoints?: string[];
  };
}

export const itineraryData: DayItinerary[] = [
  {
    day: 1,
    date: "1 ธันวาคม 2568",
    title: "กรุงเทพฯ – ซิดนีย์",
    locations: [
      {
        name: "ท่าอากาศยานสุวรรณภูมิ",
        description: "จุดเริ่มต้นการเดินทางสู่นิวซีแลนด์ เดินทางโดยสายการบิน QANTAS Airways",
        images: []
      }
    ],
    highlights: [
      "15.00 น. พบกันที่ท่าอากาศยานสุวรรณภูมิ ชั้น 4 เคาน์เตอร์สายการบิน QANTAS Airways (QF)",
      "น้ำหนักสัมภาระ: โหลด 30 กก. / ถือขึ้นเครื่อง 7 กก.",
      "18.00 น. ออกเดินทางสู่เมืองซิดนีย์ ประเทศออสเตรเลีย เที่ยวบิน QF296",
      "แวะเปลี่ยนเครื่องที่ซิดนีย์เพื่อเดินทางต่อไปยังนิวซีแลนด์",
      "มีบริการอาหารร้อนและเครื่องดื่มบนเครื่อง"
    ]
  },
  {
    day: 2,
    date: "2 ธันวาคม 2568",
    title: "ซิดนีย์ – ควีนส์ทาวน์",
    locations: [
      {
        name: "ควีนส์ทาวน์ (Queenstown)",
        description: "เมืองรีสอร์ทเล็กๆ ที่ซ่อนตัวอยู่ท่ามกลางขุนเขาและทะเลสาบวาคาติปู (Wakatipu) น้ำใสสีฟ้าคราม สวยงามจนได้รับฉายาว่า \"สวิตเซอร์แลนด์แห่งซีกโลกใต้\"",
        images: ["/images/AuZ3RG2y0woA.jpg", "/images/WuPAcpjPBUeK.jpg", "/images/drVTIzF3T4So.jpg"]
      },
      {
        name: "Skyline Gondola - Bob's Peak",
        description: "กระเช้านั่งได้ 4 ท่าน ขึ้นสู่ระดับความสูงกว่า 730 เมตร ชมวิวมุมสูงอันงดงามของเมืองควีนส์ทาวน์และทะเลสาบเบื้องล่าง",
        images: ["/images/K2CT1mxES4rd.png", "/images/9JeRbNiPcnic.jpg", "/images/Sv2KQ7r1g8rv.jpg"]
      }
    ],
    highlights: [
      "07.35 น. ถึงสนามบินซิดนีย์ ออสเตรเลีย (ห้ามนำอาหารจากเครื่องลง ระหว่างเปลี่ยนเครื่อง)",
      "09.35 น. เดินทางสู่ควีนส์ทาวน์ เที่ยวบิน QF121",
      "เดินทางถึงเมืองควีนส์ทาวน์ นิวซีแลนด์ เวลา 14:35 น.",
      "ปรับนาฬิกาเป็นเวลาท้องถิ่น เร็วกว่าประเทศไทย 6 ชั่วโมง",
      "ขึ้นกระเช้ากอนโดลาสู่ยอดเขา Bob's Peak",
      "รับประทานอาหารค่ำแบบบุฟเฟ่ต์นานาชาติบนยอดเขา"
    ],
    accommodation: "Holiday Inn Express And Suites Queenstown",
    mapRoute: {
      origin: "Queenstown Airport, New Zealand",
      destination: "Bob's Peak, Queenstown, New Zealand"
    }
  },
  {
    day: 3,
    date: "3 ธันวาคม 2568",
    title: "ควีนส์ทาวน์ – Time Tripper – ล่องเรือ TSS Earnslaw",
    locations: [
      {
        name: "Time Tripper 4D Experience",
        description: "โรงภาพยนตร์มัลติมีเดีย 4D ใต้น้ำ พาผู้ชม \"ย้อนเวลา\" ไปเรียนรู้เรื่องราวของทะเลสาบวาคาทีปู (Lake Wakatipu) ตั้งแต่ยุคน้ำแข็งจนถึงตำนานของชนเผ่าเมารี และวิวัฒนาการของเมืองควีนส์ทาวน์ในปัจจุบัน",
        images: ["/images/time-tripper_1.webp", "/images/time-tripper_2.webp", "/images/time-tripper_3.jpg"]
      },
      {
        name: "เรือกลไฟโบราณ TSS Earnslaw",
        description: "เรือลำนี้สร้างขึ้นตั้งแต่ปี ค.ศ. 1912 ได้รับสมญานามว่า \"Lady of the Lake\" ล่องเรือท่องทะเลสาบน้ำใสสะอาด ท่ามกลางขุนเขาที่สะท้อนบนผิวน้ำราวภาพวาด",
        images: ["/images/1XUfAWHAuxbB.jpg", "/images/OQMbNKCJyydf.jpg"]
      },
      {
        name: "วอลเตอร์พีคฟาร์ม (Walter Peak Farm)",
        description: "ฟาร์มเลี้ยงแกะสุดคลาสสิก ริมทะเลสาบ สัมผัสวิถีชีวิตชนบทของชาวนิวซีแลนด์ ชมการแสดงสุนัขต้อนแกะและการตัดขนแกะ",
        images: []
      },
      {
        name: "สะพานคาวารัว (Kawarau Bridge)",
        description: "สถานที่กำเนิดของบันจี้จัมพ์แห่งแรกของโลก ชมนักท้าความสูงกระโดดจากระดับ 43 เมตรลงสู่หุบเขา",
        images: ["/images/GNYU9JeoMzkQ.jpg", "/images/msUXppy6R0R6.jpg", "/images/l2P0cVUKZb2V.jpg"]
      },
      {
        name: "แอโรว์ทาวน์ (Arrowtown)",
        description: "เมืองเก่าแสนสงบที่ครั้งหนึ่งเคยรุ่งเรืองจากการทำเหมืองทองคำ ถนนเล็กๆ ล้อมด้วยบ้านไม้สีพาสเทล ร้านกาแฟน่ารัก และอาคารโบราณที่ได้รับการอนุรักษ์",
        images: ["/images/lynyeuI99SdP.jpg", "/images/yoj44VQVaskM.jpg", "/images/Rd8z2kwNR7HC.jpg"]
      },
      {
        name: "FERGBURGER",
        description: "เบอร์เกอร์ชื่อดังประจำเมืองควีนส์ทาวน์ ที่ได้รับการขนานนามว่า \"เบอร์เกอร์ที่อร่อยที่สุดในนิวซีแลนด์\"",
        images: []
      }
    ],
    highlights: [
      "09.00 น. กิจกรรม Time Tripper 4D",
      "10.30 น. ล่องเรือกลไฟโบราณ TSS Earnslaw",
      "ชมการตัดขนแกะที่ Walter Peak Farm",
      "รับประทานอาหารกลางวัน บาร์บีคิวสไตล์ฟาร์ม",
      "ช่วงบ่าย พาชมบันจี้จัมพ์ ที่สะพานคาวารัว",
      "เดินเล่นชมเมืองเก่าที่แอโรว์ทาวน์",
      "ช้อปปิ้งในตัวเมืองควีนส์ทาวน์",
      "อิ่มอร่อยมื้อเย็นกับ FERGBURGER เบอร์เกอร์ชื่อดังประจำเมืองควีนส์ทาวน์"
    ],
    accommodation: "Holiday Inn Express And Suites Queenstown",
    mapRoute: {
      origin: "Queenstown, New Zealand",
      destination: "Queenstown, New Zealand",
      waypoints: ["Walter Peak, New Zealand", "Kawarau Bridge, New Zealand", "Arrowtown, New Zealand"]
    }
  },
  {
    day: 4,
    date: "4 ธันวาคม 2568",
    title: "ควีนส์ทาวน์ – ครอมเวลล์ – วานากะ – อุทยานแห่งชาติเมานท์คุก",
    locations: [
      {
        name: "ครอมเวลล์ (Cromwell)",
        description: "แวะร้านผลไม้ชื่อดัง \"Mrs. Jones Fruit Stall\" อุดมไปด้วยผลไม้สดหลากหลายชนิด โดยเฉพาะเชอร์รี่สดหวานฉ่ำ",
        images: ["/images/YCjjllIi5Gxt.webp", "/images/RKxiIdIFt9O7.webp", "/images/Pb7GZTAgCySD.jpg"]
      },
      {
        name: "วานากะ (Wanaka)",
        description: "เมืองตากอากาศเล็กๆ แสนอบอุ่น โอบล้อมด้วยขุนเขาและทะเลสาบสีฟ้าสดใส สมัยก่อนเป็นจุดพักของชาวเมารีระหว่างทางไปค้นหาหินกรีนสโตน",
        images: []
      },
      {
        name: "Puzzling World",
        description: "อาคารแปลกตาที่เล่นกับมุมมองและภาพลวงตา เป็นอีกหนึ่งแลนด์มาร์คสนุกๆ ของเมืองนี้",
        images: ["/images/KzIFVijbnoTL.jpg", "/images/QXZkdjngBVWD.jpg", "/images/cpoO0zM4Iwg2.jpg"]
      },
      {
        name: "ฟาร์มลาเวนเดอร์ (Lavender Farm)",
        description: "หากอยู่ในช่วงดอกบาน จะได้เห็นทุ่งลาเวนเดอร์สีม่วงละมุนเรียงรายสุดสายตา พร้อมกลิ่นหอมอ่อนๆ ที่ชวนให้ผ่อนคลาย",
        images: ["/images/qwbWPmZM9hXk.jpg", "/images/jIWeracK4lfr.jpg", "/images/HbiT2z9xec6x.jpg"]
      },
      {
        name: "That Wanaka Tree",
        description: "ต้นไม้โดดเดี่ยวกลางน้ำที่กลายเป็นสัญลักษณ์ของความงดงามแห่งวานากะ ความงามของต้นไม้ต้นนี้จะแตกต่างกันไปตามฤดูกาล",
        images: ["/images/I5vybyRygxXM.jpg", "/images/gXunYqrcUs2M.jpg"]
      },
      {
        name: "Lindis Pass",
        description: "จุดชมวิวบนที่ราบสูงแมคเคนซี (Mackenzie Plateau)",
        images: []
      },
      {
        name: "โอมาราม่า (Omarama)",
        description: "เมืองเล็กๆ ท่ามกลางหุบเขาและทุ่งหญ้า สามารถมองเห็นเทือกเขาอัลป์การอยู่เบื้องหน้า",
        images: []
      },
      {
        name: "อุทยานแห่งชาติอาโอรากิ/เมานท์คุก (Aoraki / Mt. Cook National Park)",
        description: "ตลอดเส้นทางผ่านหุบเขาทัสมาน (Tasman Valley) เพลิดเพลินกับวิวทะเลสาบสีฟ้าเทอร์ควอยซ์ตัดกับเทือกเขาสูงตระหง่าน",
        images: []
      },
      {
        name: "Peter's Lookout",
        description: "จุดชมวิวชื่อดังของเส้นทางนี้ มองเห็นทิวทัศน์อันงดงามของเทือกเขาและทะเลสาบ",
        images: []
      }
    ],
    highlights: [
      "แวะชิมผลไม้สดที่ครอมเวลล์",
      "เที่ยวชมเมืองวานากะและถ่ายรูปกับ That Wanaka Tree",
      "ชมฟาร์มลาเวนเดอร์ (ตามฤดูกาล)",
      "เดินทางผ่าน Lindis Pass",
      "เข้าสู่อุทยานแห่งชาติเมานท์คุก",
      "ชมดาวยามค่ำคืน (หากเป็นคืนเดือนมืด)"
    ],
    accommodation: "Mt. Cook Lodge and Motel",
    mapRoute: {
      origin: "Queenstown, New Zealand",
      destination: "Mount Cook Village, New Zealand",
      waypoints: ["Cromwell, New Zealand", "Wanaka, New Zealand", "Omarama, New Zealand"]
    }
  },
  {
    day: 5,
    date: "5 ธันวาคม 2568",
    title: "Mt. Cook – ทะเลสาบปูคากิ – ทะเลสาบเทคาโป",
    locations: [
      {
        name: "Blue Lakes & Tasman Glacier View Point",
        description: "จุดชมวิวอันงดงามของทะเลสาบสีฟ้าใสตัดกับแนวเทือกเขาหิมะที่ปกคลุม",
        images: ["/images/vlT3F6nDOxMR.jpg", "/images/kNlFIBD0pxa4.jpg"]
      },
      {
        name: "ทะเลสาบปูคากิ (Lake Pukaki)",
        description: "ผืนน้ำสีเทอร์ควอยซ์ที่สะท้อนภาพยอดเขาเมาท์คุก (Mt. Cook) ยอดเขาที่สูงที่สุดในนิวซีแลนด์ (3,754 เมตร) โอบล้อมด้วยเทือกเขาเซาท์เทิร์นแอลป์",
        images: ["/images/rJDpykhc7eVy.jpg", "/images/TELHcUf9YMGD.webp", "/images/Gj3JPYAuJRH3.webp"]
      },
      {
        name: "ทะเลสาบเทคาโป (Lake Tekapo)",
        description: "ผืนน้ำสีเขียวอมฟ้าอันเป็นเอกลักษณ์ เกิดจากแร่ธาตุของธารน้ำแข็งที่ละลายไหลรวมกับสายน้ำในทะเลสาบ",
        images: []
      },
      {
        name: "อนุสาวรีย์สุนัขต้อนแกะ",
        description: "สัญลักษณ์แห่งความขอบคุณจากชาวฟาร์มต่อเพื่อนสี่ขาผู้ช่วยต้อนฝูงแกะในทุ่งหญ้ากว้างใหญ่",
        images: []
      },
      {
        name: "โบสถ์ Church of the Good Shepherd",
        description: "โบสถ์หินเล็กที่สุดในนิวซีแลนด์ ตั้งอยู่ริมทะเลสาบอันเงียบสงบ เป็นหนึ่งในจุดชมดาวที่งดงามที่สุดในโลก",
        images: ["/images/MpR0yUeDgmrV.jpg", "/images/ZsoAuQ3j7smy.jpg"]
      },
      {
        name: "Mt. John University Observatory",
        description: "หอดูดาวของ University of Canterbury ซึ่งตั้งอยู่บน Mt. John ติดกับทะเลสาบ Tekapo ชมวิวทะเลสาบแบบ 360 องศา",
        images: []
      }
    ],
    highlights: [
      "เดินเท้าสู่ Blue Lakes & Tasman Glacier View Point",
      "ชมทะเลสาบปูคากิและยอดเขาเมาท์คุก",
      "เที่ยวชมทะเลสาบเทคาโป",
      "ถ่ายรูปกับโบสถ์ Church of the Good Shepherd",
      "ขึ้นไปชมวิวบนยอดเขา Mt. John",
      "ชมดาวยามค่ำคืน (หากเป็นคืนเดือนมืด)"
    ],
    accommodation: "Peppers Blue Water (Tekapo Lake)",
    mapRoute: {
      origin: "Mount Cook Village, New Zealand",
      destination: "Lake Tekapo, New Zealand",
      waypoints: ["Lake Pukaki, New Zealand"]
    }
  },
  {
    day: 6,
    date: "6 ธันวาคม 2568",
    title: "ทะเลสาบเทคาโป – ฟาร์มทัวร์ – ทุ่งดอกลูปิน – ไครสต์เชิร์ช",
    locations: [
      {
        name: "Tekapo Farm Tour",
        description: "ท่องฟาร์มท่ามกลางขุนเขากว้างใหญ่กว่า 50,000 เอเคอร์ในรถ 4WD พร้อมไกด์ท้องถิ่น เพลิดเพลินกับฝูงสัตว์แสนน่ารัก ไม่ว่าจะเป็นแกะเมอริโน่กว่า 12,000 ตัว วัวแองกัส อัลปากา ม้า และสุนัขต้อนแกะ",
        images: ["/images/hyFxCP81Yma3.jpg", "/images/jRtBP2qewY4f.jpg"]
      },
      {
        name: "Mt. John Lookout",
        description: "จุดชมวิวพิเศษ ถ่ายภาพมุมสวยสุดเอ็กซ์คลูซีฟ พร้อมลองแต่งชุดชาวฟาร์มเก๋ๆ เป็นที่ระลึก",
        images: []
      },
      {
        name: "ฟาร์มปลาแซลมอน",
        description: "ชมวิธีเลี้ยงปลาในน้ำเย็นจากธารน้ำแข็ง",
        images: []
      },
      {
        name: "ทุ่งดอกลูปิน (Lupin)",
        description: "ความงามของทุ่งดอกลูปินที่จะผลิบานแต่งแต้มสีสันรอบทะเลสาบเทคาโปอย่างสวยงาม สีชมพู ม่วง ฟ้า และขาว ผลัดกันบานสะพรั่ง (ขึ้นอยู่กับสภาพอากาศในแต่ละปี)",
        images: []
      },
      {
        name: "แอชเบอร์ตัน (Ashburton)",
        description: "เมืองฟาร์มอันอุดมสมบูรณ์ แวะร้านผลิตภัณฑ์ท้องถิ่นมากมาย ทั้งครีมลาโนลิน เซรัมรกแกะยอดนิยม เครื่องสำอาง วิตามิน และของฝากพื้นเมือง",
        images: []
      }
    ],
    highlights: [
      "ร่วม Tekapo Farm Tour ในรถ 4WD",
      "ให้อาหารอัลปากาอย่างใกล้ชิด",
      "ชมฟาร์มปลาแซลมอน",
      "ชมทุ่งดอกลูปินบานสะพรั่ง",
      "ช้อปปิ้งผลิตภัณฑ์ท้องถิ่นที่แอชเบอร์ตัน"
    ],
    accommodation: "Chateau on the Park Hotel – Christchurch",
    mapRoute: {
      origin: "Lake Tekapo, New Zealand",
      destination: "Christchurch, New Zealand",
      waypoints: ["Ashburton, New Zealand"]
    }
  },
  {
    day: 7,
    date: "7 ธันวาคม 2568",
    title: "ไครสต์เชิร์ช – International Antarctic Centre – ช้อปปิ้ง",
    locations: [
      {
        name: "The International Antarctic Centre",
        description: "ศูนย์จำลองชีวิตและการวิจัยในทวีปแอนตาร์กติกา สุดขั้วโลกใต้ สัมผัสอุณหภูมิ -8°C และลมแรงเทียบเท่า -18°C พบกับเพนกวินพันธุ์เล็กที่สุดในโลก \"Kororā\" และตะลุยเส้นทางสุดโหดในรถแทรกเตอร์",
        images: ["/images/EnYLXr3GZ59o.jpg", "/images/9BrtpiM93kLr.webp"]
      },
      {
        name: "ไครสต์เชิร์ช (Christchurch)",
        description: "เมืองที่ใหญ่ที่สุดบนเกาะใต้ของนิวซีแลนด์ เมืองแห่งสวนสวยและสถาปัตยกรรมสไตล์อังกฤษ ชมโบสถ์ไครสต์เชิร์ชอันเก่าแก่ซึ่งได้รับความเสียหายจากเหตุแผ่นดินไหว",
        images: []
      },
      {
        name: "Riverside Market",
        description: "ตลาดในร่มยอดนิยมใจกลางเมือง ริมแม่น้ำเอวอน ที่รวบรวมร้านอาหารท้องถิ่น คาเฟ่ และร้านค้าสินค้าคุณภาพ",
        images: ["/images/hJTvV8hCiv9o.jpg", "/images/P6NykGvcS0yY.jpg", "/images/kDIF9lvo2t9A.jpg"]
      }
    ],
    highlights: [
      "เยี่ยมชม The International Antarctic Centre",
      "สัมผัส Antarctic Storm Room",
      "พบกับเพนกวินน้อย Little Blue Penguin",
      "ตะลุยในรถ Hägglunds Ride",
      "เที่ยวชมเมืองไครสต์เชิร์ช",
      "ช้อปปิ้งที่ Riverside Market"
    ],
    accommodation: "Chateau on the Park Hotel – Christchurch",
    mapRoute: {
      origin: "Christchurch, New Zealand",
      destination: "Christchurch, New Zealand",
      waypoints: ["International Antarctic Centre, Christchurch"]
    }
  },
  {
    day: 8,
    date: "8 ธันวาคม 2568",
    title: "ไครสต์เชิร์ช – กรุงเทพฯ",
    locations: [
      {
        name: "สนามบินไครสต์เชิร์ช",
        description: "เดินทางกลับสู่กรุงเทพฯ ผ่านซิดนีย์",
        images: []
      }
    ],
    highlights: [
      "รับประทานอาหารเช้าที่โรงแรม",
      "เดินทางสู่สนามบิน เวลา 08:00 น.",
      "ออกเดินทางสู่ซิดนีย์ เวลา 10:50 น.",
      "เดินทางถึงกรุงเทพฯ เวลา 19:50 น."
    ]
  }
];

export const souvenirs = [
  {
    name: "ครีมลาโนลิน",
    description: "ผลิตภัณฑ์จากรกแกะคุณภาพสูง บำรุงผิวให้ชุ่มชื้น"
  },
  {
    name: "เซรัมรกแกะ",
    description: "ผลิตภัณฑ์บำรุงผิวยอดนิยมจากนิวซีแลนด์"
  },
  {
    name: "ผลิตภัณฑ์จากแกะ",
    description: "เสื้อผ้าขนแกะ ตุ๊กตาแกะ และของที่ระลึกต่างๆ"
  },
  {
    name: "เชอร์รี่สด",
    description: "ผลไม้สดหวานฉ่ำจากครอมเวลล์ (ตามฤดูกาล)"
  },
  {
    name: "ผลิตภัณฑ์ลาเวนเดอร์",
    description: "น้ำหอม สบู่ และผลิตภัณฑ์จากลาเวนเดอร์"
  },
  {
    name: "ปลาแซลมอนรมควัน",
    description: "ปลาแซลมอนคุณภาพสูงจากฟาร์มท้องถิ่น"
  },
  {
    name: "วิตามินและอาหารเสริม",
    description: "ผลิตภัณฑ์สุขภาพคุณภาพสูงจากนิวซีแลนด์"
  }
];

export const packingList = [
  "หนังสือเดินทาง (อายุเหลือมากกว่า 6 เดือน)",
  "เสื้อผ้าสำหรับอากาศร้อน (ฤดูร้อนของนิวซีแลนด์)",
  "เสื้อแจ็คเก็ตหรือเสื้อกันหนาวบางๆ (สำหรับยามเช้าและค่ำคืน)",
  "รองเท้าสำหรับเดินเท้า (สะดวกสบาย)",
  "แว่นกันแดดและครีมกันแดด",
  "หมวกหรือผ้าคลุมศีรษะ",
  "กล้องถ่ายรูปและอุปกรณ์ชาร์จ",
  "ยาประจำตัว (หากมี)",
  "อะแดปเตอร์ปลั๊กไฟ (นิวซีแลนด์ใช้ Type I)",
  "กระเป๋าสะพายเล็กสำหรับพกพา",
  "ขนมหรือของว่างจากไทย (ห้ามนำผลไม้สดหรืออาหารสดเข้าประเทศ)"
];
