async function editFormHandler(event) {
  event.preventDefault();

  const pet_name = document.querySelector('input[name="pet-name"]').value.trim();
  const pet_age = document.querySelector('input[name="pet-age"]').value.trim();
  const pet_type = document.querySelector('input[name="pet-type"]').value.trim();
  const pet_health = document.querySelector('input[name="pet-health"]').value.trim();



  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      pet_name,
      pet_age,
      pet_type,
      peet_health,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
