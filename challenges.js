const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const idx = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          "\n"
        )} \n (Write option number)`
      )
    );
    if (idx >= 0 && idx < this.options.length) {
      poll.answers[idx]++;
    }
    displayResults(this.answers, "string");
  },
};

function displayResults(arr, type = "array") {
  if (type === "array") {
    console.log(arr);
  } else if (type === "string") {
    console.log(`the results are ${arr.join(", ")}`);
  }
}
// const extra = displayResults.bind(null, [1, 5, 3, 9, 6, 1]);
// extra("string");
// extra("array");
// extra();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//Think about IIFE and closures.
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
