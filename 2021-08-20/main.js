const url = 'https://611e53249771bf001785c37f.mockapi.io/users';

const postObj = {
	"createdAt": "2021-08-20T14:18:37.169Z",
	"name": "Vovan",
	"avatar": "https://cdn.fakercloud.com/avatars/fotomagin_128.jpg",
	"surname": "Zenin",
	"email": "vv_Zen@i.ua",
	"phone": "095 52 777 01",
	"id": "24"
};

const putObj = {
	"createdAt": "2021-08-20T14:18:37.169Z",
	"name": "Vladymyr",
	"avatar": "https://cdn.fakercloud.com/avatars/fotomagin_128.jpg",
	"surname": "Zenin",
	"email": "vv_Zen@i.ua",
	"phone": "095 52 777 01",
	"id": "24"
};

async function getData() {
	fetch(url)
		.then(r => r.json())
		.then(await console.log);
}

async function postData() {
	const resp = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(postObj),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const json = await resp.json();

	console.log('Успех:', JSON.stringify(json));
}

async function putData() {
	const response = await fetch(url + '/25', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(putObj)
	});

	const result = await response.json();

	console.log('Успех:', JSON.stringify(result));
}

async function deleteData() {
	const response = await fetch(url + '/26', {method: 'DELETE',})
		.then(res => res.text())
		.then(res => console.log(res));

	const result = await response.json();

	console.log('Успех:', JSON.stringify(result));
}

// putData();
// postData();
// deleteData();
getData();