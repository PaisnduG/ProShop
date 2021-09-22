import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin',
		email: 'admin@gmail.com',
		password: bcrypt.hashSync('111111', 10),
		isAdmin: true,
	},
	{
		name: 'Pasindu',
		email: 'pasindu@gmail.com',
		password: bcrypt.hashSync('111111', 10),
	},
]

export default users
