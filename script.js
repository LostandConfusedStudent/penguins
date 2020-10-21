var likePenguins = prompt("Do you like penguins? Yes or no.");
// Redefine variable to make input consist of all lowercase letters
likePenguins = likePenguins.toLowerCase();
if (likePenguins === "yes") {
    alert("We do, too");
} else if (likePenguins === "no") {
    alert("Aww...That's too bad...")
} else {
    alert("No need to answer...Or we're dumb. Need a yes or no...");
}