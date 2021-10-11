function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        Swal.fire({
            text: 'Nama Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        Swal.fire({
            text: 'NRP Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        Swal.fire({
            text: 'Email Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
        Swal.fire({
            text: 'Silakan Memilih Jurusan',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["alamat"].value == "") {
        Swal.fire({
            text: 'Silakan Lengkapi Alamat',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formPendaftaran"]["alamat"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["ket-vaksin"].selectedIndex < 1) {
        Swal.fire({
            text: 'Silakan Memilih Status Vaksinasi',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formPendaftaran"]["ket-vaksin"].focus();
        return false;
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "1") {
        if (document.forms["formPendaftaran"]["jenis-vaksin"].selectedIndex < 1) {
            Swal.fire({
                text: 'Silakan Memilih Jenis Vaksin',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formPendaftaran"]["jenis-vaksin"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["dosis"].value == "") {
            Swal.fire({
                text: 'Silakan Lengkapi Dosis Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formPendaftaran"]["dosis"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["no-sertif"].value == "") {
            Swal.fire({
                text: 'Silakan Lengkapi Nomor Sertifikat Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formPendaftaran"]["no-sertif"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["tgl-vaksin"].value == "") {
            Swal.fire({
                text: 'Silakan Lengkapi Tanggal Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formPendaftaran"]["tgl-vaksin"].focus();
            return false;
        }
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "2") {
        if (document.forms["formPendaftaran"]["alasan-vaksin"].selectedIndex < 1) {
            Swal.fire({
                text: 'Silakan Memilih Alasan Belum Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formPendaftaran"]["alasan-vaksin"].focus();
            return false;
        }
        else if (document.forms["formPendaftaran"]["alasan-vaksin"].value == "6") {
            if (document.forms["formPendaftaran"]["alasan-lain"].value == "") {
                Swal.fire({
                    text: 'Silakan Isi Alasan Belum Vaksinasi',
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                });
                document.forms["formPendaftaran"]["alasan-lain"].focus();
                return false;
            }
        }
    }

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Succes!',
                text: 'Your data has been submitted.',
                icon: 'success',
                confirmButtonColor: '#3085d6'
            });
            document.forms["formPendaftaran"].reset();
            document.getElementById('sudah-vaksin').style.display = 'none';
            document.getElementById('belum-vaksin').style.display = 'none';
        }
    });
    return false;
}

function isVaksin() {
    if (document.forms["formPendaftaran"]["ket-vaksin"].value == "0") {
        document.getElementById('sudah-vaksin').style.display = 'none';
        document.getElementById('belum-vaksin').style.display = 'none';
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "1") {
        document.getElementById('sudah-vaksin').style.display = 'block';
        document.getElementById('belum-vaksin').style.display = 'none';
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "2") {
        document.getElementById('sudah-vaksin').style.display = 'none';
        document.getElementById('belum-vaksin').style.display = 'block';
    }
}