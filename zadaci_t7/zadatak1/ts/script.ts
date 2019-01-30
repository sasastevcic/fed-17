let nodes = document.getElementsByTagName('button');
//Let nam pravi novi opseg za svaku iteraciju for petlje, tako da ce let ispis biti ispravan
//dok bi sa var uvek ispis bio 6
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(): void {
      console.log('Kliknuo sa na dugme #' + i);
   });
}