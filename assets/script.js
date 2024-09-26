const char = createKnight("Victor");
const monster = createBigMonster();

stage.start(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);
