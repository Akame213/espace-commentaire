function addComment() {
  // Récupérer les valeurs du formulaire
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let commentText = document.getElementById("commentText").value;

  // Vérifier si les champs obligatoires sont remplis
  if (!firstName || !lastName || !commentText) {
    alert("Veuillez saisir le prénom, le nom et le commentaire.");
    return;
  }

  // Créer un élément de commentaire
  let commentElement = document.createElement("li");
  commentElement.className = "comment";
  commentElement.innerHTML = `<strong>${firstName} ${lastName}:</strong> ${commentText}`;

  // Ajouter le commentaire à la liste des commentaires
  document.getElementById("comments").appendChild(commentElement);
  if (commentText.length > 500) {
    alert("Le commentaire ne peut pas dépasser 500 caractères.");
    return;
  }

  // Effacer le formulaire
  document.getElementById("commentForm").reset();
}
