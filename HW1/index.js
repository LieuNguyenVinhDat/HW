function createCharacter(character, color) {
    let span = document.createElement("span");
    span.style.color = color;
    span.innerText = character;
    return span;
}


const body = document.body;
body.style.fontFamily = "Arial, Helvetica, sans-serif";
let divBorder = document.createElement('div');

Object.assign(divBorder.style, {
    width: '410px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 5px #000',
    margin: '12% auto',
    padding: '10px 0px',
});

let p1 = document.createElement('p');
p1.innerText = 'Google';
Object.assign(p1.style, {
    fontSize: '16pt',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
});



let p2 = document.createElement('p');
p2.innerText = 'Đăng nhập';

Object.assign(p2.style, {
    fontSize: '18pt',
    fontWeight: 'medium',
    textAlign: 'center',
    fontWeight: 'bold',
});

let p3 = document.createElement('p');
p3.innerText = 'Sử dụng tài khoản google của bạn';

Object.assign(p3.style, {
    fontSize: '13pt',
    fontWeight: 'medium',
    textAlign: 'center',
});

let form = document.createElement('form');
let div = document.createElement('div');

Object.assign(div.style, {
    width: '85%',
    margin: '0 auto',
});

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Email hoặc số điện thoại');

Object.assign(input.style, {
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    border: '1px solid #ccc',
});

let pQuenEmail = document.createElement('p');
pQuenEmail.innerText = 'Bạn quên địa chỉ email?';

Object.assign(pQuenEmail.style, {
    margin: '5px 0px 25px 0px',
    cursor: 'pointer',
    fontSize: '11pt',
    color: 'blue',
});

let spanKhongPhaiMayTinh = document.createElement('span');
spanKhongPhaiMayTinh.innerText = 'Đây không phải máy tính của bạn? Hãy sử dụng cửa sổ duyệt web riêng tư để đăng nhập.';

Object.assign(spanKhongPhaiMayTinh.style, {
    fontSize: '10pt',
});

let spanTimHieuThem = document.createElement('span');
spanTimHieuThem.innerText = 'Tìm hiểu thêm';

Object.assign(spanTimHieuThem.style, {
    fontSize: '11pt',
    fontWeight: 'bold',
    color: 'blue',
    cursor: 'pointer',
});

let divFooter = document.createElement('div');

Object.assign(divFooter.style, {
    display: 'flex',
    margin: '15px 0px',
});

let divTaoTaiKhoan = document.createElement('div');

Object.assign(divTaoTaiKhoan.style, {
    display: 'inline-flex',
    width: '50%',
    justifyContent: 'left',
});
let TaoTaiKhoan = document.createElement('button');
TaoTaiKhoan.innerText = 'Tạo tài khoản';
Object.assign(TaoTaiKhoan.style, {
    width: '65%',
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'blue',
    cursor: 'pointer',
    fontSize: '11pt',
    background: '#00000000',
    border: 'none',
});
divTaoTaiKhoan.append(TaoTaiKhoan);

let divTiepTheo = document.createElement('div');
Object.assign(divTiepTheo.style, {
    display: 'inline-flex',
    width: '50%',
    justifyContent: 'right',
});
let TiepTheo = document.createElement('button');
TiepTheo.innerText = 'Tiếp theo';
Object.assign(TiepTheo.style, {
    width: '65%',
    height: '40px',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    fontSize: '11pt',
    background: 'blue',
    border: 'none',
});

divTiepTheo.append(TiepTheo);

divFooter.append(divTaoTaiKhoan);
divFooter.append(divTiepTheo);

div.append(input);
div.append(pQuenEmail);
div.append(spanKhongPhaiMayTinh);
div.append(spanTimHieuThem);
div.append(divFooter);

form.append(div);


divBorder.append(p1);
divBorder.append(p2);
divBorder.append(p3);
divBorder.append(form);

body.append(divBorder);