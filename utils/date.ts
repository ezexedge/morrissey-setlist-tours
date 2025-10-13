export function formatDate(date:Date){
const dia = String(date.getDate()).padStart(2, "0");
const mes = String(date.getMonth() + 1).padStart(2, "0");
const año = date.getFullYear();

return `${año}-${mes}-${dia}`;
}