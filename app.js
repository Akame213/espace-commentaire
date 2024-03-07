const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log(event.target, event.currentTarget);
});

function foo() {
  console.log("foo");
}

foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();

// Comment configurer le linter de VS Code et/ou Prettier
// fahedm
