let choice;
let rawOrderCode = "";
let cleanOrderCode = "";
let isCodeValid = false;
let itemName = "";
let itemPrice = 0;
let isVip = false;

do {
  const menu = `HE THONG BAN LE PHU KIEN PHONG GYM
  1. Nhap va chuan hoa ma don hang
  2. Tinh tien va in hoa don
  3. Thoat chuong trinh
  Vui long chon (1-3):`;  

  choice = Number(prompt(menu));

  switch (choice) {
    case 1:
      rawOrderCode = prompt("Nhap ma don hang (vi du: GYM-SHAKER-VIP): ") || "";
      cleanOrderCode = rawOrderCode.trim().toUpperCase();

      if (cleanOrderCode.length >= 8 && cleanOrderCode.startsWith("GYM-")) {
        isCodeValid = true;

        if (cleanOrderCode.includes("SHAKER")) {
          itemName = "Binh lac (Shaker)";
          itemPrice = 120000;
        } else if (cleanOrderCode.includes("GLOVES")) {
          itemName = "Gang tay tap ta (Gloves)";
          itemPrice = 180000;
        } else if (cleanOrderCode.includes("STRAP")) {
          itemName = "Day keo lung (Strap)";
          itemPrice = 150000;
        } else {
          isCodeValid = false;
          itemName = "";
          itemPrice = 0;
        }

        isVip = cleanOrderCode.includes("VIP");

        if (isCodeValid) {
          alert(`Nhap ma thanh cong: ${cleanOrderCode}`);
          console.log(`Da tiep nhan ma don: ${cleanOrderCode}`);
        } else {
          alert("Loai phu kien khong hop le!");
        }
      } else {
        isCodeValid = false;
        alert("Ma don khong hop le! Ma phai bat dau bang 'GYM-' va dai tu 8 ky tu.");
      }
      break;

    case 2:
      if (!isCodeValid || itemPrice === 0) {
        alert("Vui long nhap ma don hang hop le o muc 1 truoc!");
        break;
      }

      let discount = isVip ? itemPrice * 0.1 : 0;
      let finalAmount = itemPrice - discount;

      console.log("");
      console.log("HOA DON BAN LE PHU KIEN GYM");
      console.log(`Ma don hang: ${cleanOrderCode}`);
      console.log(`San pham: ${itemName}`);
      console.log(`Hoi vien VIP: ${isVip ? "Co (Giam 10%)" : "Khong"}`);
      console.log(`Gia niem yet: ${itemPrice} VND`);
      console.log(`Chiet khau VIP: -${discount} VND`);
      console.log(`Tong thanh toan: ${finalAmount} VND`);

      alert("In hoa don thanh cong! Vui long mo Console (F12) de xem.");
      break;

    case 3:
      alert("Cam on ban da su dung chuong trinh!");
      break;

    default:
      alert("Lua chon khong hop le! Vui long nhap tu 1 den 3.");
      break;
  }
} while (choice !== 3);
