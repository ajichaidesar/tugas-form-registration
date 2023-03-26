// Data awal
let students = [
	{name: "John Doe", email: "johndoe@example.com", phone: "1234567890"},
	{name: "Jane Doe", email: "janedoe@example.com", phone: "0987654321"}
];

// Fungsi untuk menampilkan data mahasiswa ke dalam tabel
function showStudents() {
	let table = document.getElementById("studentsList");
	table.innerHTML = "";
	for (let i = 0; i < students.length; i++) {
		let row = table.insertRow(i);
		let nameCell = row.insertCell(0);
		let emailCell = row.insertCell(1);
		let phoneCell = row.insertCell(2);
		let actionCell = row.insertCell(3);
		nameCell.innerHTML = students[i].name;
		emailCell.innerHTML = students[i].email;
		phoneCell.innerHTML = students[i].phone;
		actionCell.innerHTML = '<button type="button" onclick="editStudent(' + i + ')">Edit</button> <button type="button" onclick="deleteStudent(' + i + ')">Delete</button>';
	}
}

// Fungsi untuk menambah data mahasiswa
function addStudent(name, email, phone) {
	students.push({name: name, email: email, phone: phone});
	showStudents();
}

// Fungsi untuk menghapus data mahasiswa
function deleteStudent(index) {
	students.splice(index, 1);
	showStudents();
}

// Fungsi untuk mengedit data mahasiswa
function editStudent(index) {
	let name = prompt("Name:", students[index].name);
	let email = prompt("Email:", students[index].email);
	let phone = prompt("Phone:", students[index].phone);
	students[index] = {name: name, email: email, phone: phone};
	showStudents();
}

// Fungsi untuk mencari data mahasiswa
function searchStudent(keyword) {
	let results = [];
	for (let i = 0; i < students.length; i++) {
		if (students[i].name.toLowerCase().includes(keyword.toLowerCase()) || students[i].email.toLowerCase().includes(keyword.toLowerCase()) || students[i].phone.toLowerCase().includes(keyword.toLowerCase())) {
			results.push(students[i]);
		}
	}
	let table = document.getElementById("studentsList");
	table.innerHTML = "";
	for (let i = 0; i < results.length; i++) {
		let row = table.insertRow(i);
		let nameCell = row.insertCell(0);
		let emailCell = row.insertCell(1);
		let phoneCell = row.insertCell(2);
		let actionCell = row.insertCell(3);
		nameCell.innerHTML = results[i].name;
		emailCell.innerHTML = results[i].email;
		phoneCell.innerHTML = results[i].phone;
		actionCell.innerHTML = '<button type="button" onclick="editStudent(' + students.indexOf(results[i]) + ')">Edit</button> <button type="button" onclick="deleteStudent(' + students.indexOf(results[i]) + ')">Delete</button>';
	}
}

// Menampilkan data awal ketika halaman dimuat
showStudents();

// Mengambil referensi elemen-elemen HTML yang diperlukan
let addForm = document.getElementById("addForm");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

// Menambahkan event listener pada form untuk menambahkan mahasiswa baru
addForm.addEventListener("submit", function(event) {
	event.preventDefault();
	let name = document.getElementById("nameInput").value;
	let email = document.getElementById("emailInput").value;
	let phone = document.getElementById("phoneInput").value;
	
	addStudent(name, email, phone);
	addForm.reset();
});


// Menambahkan event listener pada tombol cari untuk mencari mahasiswa
searchButton.addEventListener("click", function() {
	let keyword = searchInput.value;
	searchStudent(keyword);
});
