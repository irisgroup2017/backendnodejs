# backendnodejs
 backend for sales online
# HTTP Status Codes API
- 200 – ร้องขอสำเร็จ ทุกอย่างโอเค (OK)
- 201- สร้างบางอย่างเรียบร้อยแล้ว (Created)
- 202 – ยอมรับแล้ว แต่กำลังประมวลผลบางอย่าง เช่น video encoding หรือ ย่อขนาดรูปภาพ เป็นต้น
- 400 – ไวยากรณ์ที่ร้องขอมานั้นมีความผิดพลาด หรือบางคนอาจใช้เพื่อการทำ validation
- 401 – ไม่มีสิทธิ์ ไม่ได้รับอนุญาต (Unauthorized) ต้องทำการพิสูจน์ตัวตนก่อน
- 403 – ผู้ใช้ปัจจุบันถูกห้ามไม่ให้เข้าถึงข้อมูลส่วนนี้ (Forbidden)
- 404 – URL ที่เรียกมาไม่ใช่เส้นทางที่ถูกต้อง หรือทรัพยากรที่ร้องขอไม่พบบนเครื่องเซิร์ฟเวอร์
- 405 – Method Not Allowed เซิร์ฟเวอร์ไม่รู้จัก request methods ที่ร้องขอมา (เช่น get, post) หรือถูกปิด ไม่สามารถใช้งานได้
- 410 – ข้อมูลถูกลบไปเรียบร้อย อาจจะเป็นกรณีถูกระงับ หรือปิดการใช้งานแล้ว เป็นต้น
- 415 – คำขอมี Content-Type ซึ่งเซิร์ฟเวอร์ไม่รู้จักวิธีที่จะจัดการ (ไม่รองรับ)
- 429 – Rate Limited หยุดสักพักหนึ่ง ค่อยลองอีกครั้ง
- 500 – มีบางสิ่งที่ไม่คาดคิดเกิดขึ้นและเป็นความผิดพลาดของ เซิร์ฟเวอร์ (Internal Server Error)
- 503 – เซิร์ฟเวอร์ ยังไม่พร้อมบริการ โปรดลองอีกครั้ง