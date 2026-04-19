document.getElementById("btn").addEventListener("click", process);

function process() {
  let input = document.getElementById("user_in").value.toLowerCase();
  document.getElementById("ans").innerHTML = getResponse(input);
}

function getResponse(question) {
  if (
    question == "does a magic 8 ball actually work?" ||
    question == "does a magic 8 ball actually work"
  ) {
    return "How dare you doubt me!";
  } else if (
    question == "is javascript awesome?" ||
    question == "is javaScript awesome"
  ) {
    return "Of Course!";
  } else if (
    question == "should i learn to code?" ||
    question == "should i learn to code"
  ) {
    return "Absolutely, start today!";
  } else if (
    question == "can i time travel?" ||
    question == "can i time travel"
  ) {
    return "Only in your dreams... for now.";
  } else if (question == "") {
    return "Please ask a question...";
  } else {
    return randomResponse();
  }
}

function randomResponse() {
  let rand_num = Math.random();

  if (rand_num <= 0.2) {
    return "Without a Doubt.";
  } else if (rand_num <= 0.4) {
    return "As I see it, yes.";
  } else if (rand_num <= 0.6) {
    return "Concentrate and ask again.";
  } else if (rand_num <= 0.8) {
    return "Don't count on it";
  } else {
    return "Outlook not so good";
  }
}
