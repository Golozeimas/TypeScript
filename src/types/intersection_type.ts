type Usuario = {
  email: string;
};

type Admin = {
  permissoes: string[];
};

// para o admin que for usuário também, o type é bem flexível
type AdminUsuario = Usuario & Admin;

// interessante uso do type 
// mas dar pra fazer a mesma coisa com interface
// mas é melhor com type!
const admin: AdminUsuario = {
  email: "admin@email.com",
  permissoes: ["criar", "editar"]
};


console.log(admin)

/*
// com interface
interface Usuario = {
	email: string
}

interface Admin = {
	permissoes: string []
}

// usa type para 'juntar'
type AdminUsuario = Usuario & Admin;
*/