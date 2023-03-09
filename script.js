const form = document.querySelector('.form')
let ErrorMassage = []


function subTotal(harga, barang) {
  const total = harga * barang
  return total
}

function cekDiskon(subtotal) {
  let diskon

  if (subtotal >= 250000) {
    diskon = 25;
  } else if (subtotal >= 200000) {
    diskon = 20
  } else if (subtotal >= 150000) {
    diskon = 15
  } else if (subtotal >= 100000) {
    diskon = 10
  } else if (subtotal >= 50000) {
    diskon = 5
  } else {
    diskon = 0
  }
  return diskon
}

function nilaiDiskon(harga, diskon) {
  return harga * diskon / 100
}

function nilaiPajak(total) {
  const tax = total * 10 / 100
  return tax
}
function jumlahPembayaran(total, nilaiDis, tax) {
  return total - nilaiDis + tax
}

function validation(kodebarang, harga, jumlah, nama) {
  if (kodebarang == '') {
    ErrorMassage.push('Kode Barang Harus Diisi')
  }
  if (harga == '') {
    ErrorMassage.push('Harga Tidak boleh kosong')
  }
  if (jumlah == '') {
    ErrorMassage.push('Jumlah Tidak boleh kosong')
  }
  if (nama == '') {
    ErrorMassage.push('Nama Barang Tidak boleh kosong')
  }
}

form.addEventListener('submit', (event) => {
  let kodeBarang = document.getElementById('code').value;
  let harga = document.getElementById('price').value;
  let jumlahJual = document.getElementById('total').value;
  let namaBarang = document.getElementById('name').value;

  validation(kodeBarang, harga, jumlahJual, namaBarang, total, tax)

  if (ErrorMassage.length < 1) {
    const total = subTotal(harga, jumlahJual)
    const diskon = cekDiskon(total)
    const nilaiDis = nilaiDiskon(total, diskon)
    const pajak = nilaiPajak(total)
    const totalBayar = jumlahPembayaran(total, nilaiDis, pajak)

    document.getElementById('subtotal').value = `Rp ${total},-`;
    document.getElementById('discount').value = `${diskon}%`;
    document.getElementById('total_discount').value = `Rp ${nilaiDis},-`;
    document.getElementById('tax').value = `Rp ${pajak},-`;
    document.getElementById('total_price').value = `Rp ${totalBayar},-`;
  } else {
    alert(ErrorMassage.join('\n'))
    ErrorMassage = []
  }
})