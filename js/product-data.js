const PRODUCTS_DETAIL = {
  'BEV-SYS-MACH-020L-V1': {
    name:'เครื่องทำเครื่องดื่มอัตโนมัติ V1', image:'images/BEV-SYS-MACH-020L-V1.png', emoji:'🤖',
    price:29900, oldPrice:33900, badge:'ขายดี',
    video:'nBXA8tBAndg',   // ← เปลี่ยนเป็น YouTube ID คลิปน้ำกระเจี๊ยบของคุณ
    gallery:[
      { src:'images/machine-full.jpg',    caption:'ภาพรวมเครื่องทั้งระบบ' },
      { src:'images/part-pot-030l.jpg',   caption:'หม้อต้มสแตนเลส 20L + สเกลลิตร' },
      { src:'images/part-pmp-sol.jpg',    caption:'ชุดปั๊ม + โซลินอยด์ + แมนิโฟลด์วาล์ว' },
      { src:'images/part-stir.jpg',       caption:'ชุดกวนแม่เหล็ก (Magnetic Stir)' },
      { src:'images/machine-pro-dim.jpg', caption:'ผังขนาดและจุดติดตั้ง' },
    ],
    full_desc:'เครื่องขนาด 20 ลิตร ควบคุมผ่านเว็บ ตวงน้ำอัตโนมัติ ต้มอุณหภูมิแม่นยำ แจ้งเตือนเมื่อต้องใส่วัตถุดิบ',
    specs:[['ความจุ','20 ลิตร'],['ควบคุม','Web Browser'],['ตวงน้ำ','Load Cell ±10g'],['อุณหภูมิ','±1°C'],['กำลังไฟ','2000W'],['วัสดุ','Stainless 304']],
    order_link:'https://line.me/R/ti/p/@yourid'
  },
  'BEV-PRT-POT-030L-V1': {
    name:'หม้อต้ม 30L พร้อมฮีเตอร์+วาล์ว', image:'images/BEV-PRT-POT-030L-V1.png', emoji:'⚙️',
    price:9900, oldPrice:12900, badge:'แนะนำ',
    full_desc:'หม้อต้ม 30L พร้อมฮีเตอร์+วาล์ว ประกอบสำเร็จพร้อมใช้',
    specs:[['ความจุ','30 ลิตร'],['ควบคุม','Web Browser'],['ตวงน้ำ','Load Cell ±10g'],['อุณหภูมิ','±1°C'],['กำลังไฟ','1500W'],['วัสดุ','Stainless 304']],
    order_link:'https://line.me/R/ti/p/@yourid'
  },
  'BEV-PRT-STIR-012V-V2': {
    name:'มอเตอร์กวนแม่เหล็กรุ่นใหม่แรงบิดสูง', image:'images/BEV-PRT-STIR-012V-V2.png', emoji:'🌿',
    price:1900, oldPrice:2100, badge:'ประหยัด 10%',
    full_desc:'มอเตอร์กวนแม่เหล็กรุ่นใหม่แรงบิดสูง ประกอบสำเร็จพร้อมใช้',
    specs:[['กระเจี๊ยบ','120g'],['เก๊กฮวย','150g'],['สามเกลอ','2 ห่อ'],['ตะกร้า','สแตนเลส 304'],['ทำได้','~30-45 ลิตร'],['อายุเก็บ','6 เดือน']],
    order_link:'https://line.me/R/ti/p/@yourid'
  },
  'BEV-PRT-LDC-040K-V1': {
    name:'โหลดเซลล์ 40kg พร้อม HX711 Update Controller', image:'images/BEV-PRT-LDC-040K-V1.png', emoji:'🧋',
    price:1500, oldPrice:null, badge:null,
    full_desc:'โหลดเซลล์ 40kg พร้อม HX711 Update Controller ประกอบสำเร็จพร้อมใช้',
    specs:[['ผงชาไทย','200g'],['นมสด','2 ลิตร'],['หญ้าหวาน','100g'],['ทำได้','10 ลิตร'],['ไม่ใช้','ครีมเทียม'],['อายุเก็บ','นม 7 วัน']],
    order_link:'https://line.me/R/ti/p/@yourid'
  },
  'accessory-basket': {
    name:'ตะกร้าใส่สมุนไพร (สแตนเลส)', image:'images/accessory-basket.jpg', emoji:'🧺',
    price:350, oldPrice:null, badge:null,
    full_desc:'ตะกร้าใส่สมุนไพรสแตนเลส 304 เกรดอาหาร ทนความร้อน รูระบายละเอียดกันสมุนไพรหลุด พร้อมหูจับยาว จับถนัด ล้างง่าย',
    specs:[['วัสดุ','Stainless 304'],['ขนาด','พอดีหม้อ 20L'],['รูระบาย','2mm'],['หูจับ','ยาว 15cm'],['ทนร้อน','200°C'],['ล้าง','เครื่องล้างจานได้']],
    order_link:'https://line.me/R/ti/p/@yourid'
  },
  'accessory-chiller': {
    name:'ชุด Cool Down (คอยล์ทองแดง)', image:'images/accessory-chiller.jpg', emoji:'❄️',
    price:1200, oldPrice:1500, badge:'ใหม่',
    full_desc:'ชุดลดอุณหภูมิเร็ว: คอยล์ทองแดง 10 เมตร + ปั๊มจุ่ม 12V หมุนเวียนน้ำเย็น ลดจาก 95°C → 60°C ใน 15 นาที เหมาะกับเครื่องดื่มที่ต้องเย็นเร็วหรือหยุดการสกัด',
    specs:[['คอยล์','ทองแดง 10m'],['ปั๊ม','12V DC'],['ลดtemp','95→60°C/15นาที'],['flow','5L/min'],['กำลังไฟ','20W'],['ติดตั้ง','ง่าย']],
    order_link:'https://line.me/R/ti/p/@yourid'
  },
};