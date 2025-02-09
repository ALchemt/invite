document.getElementById('yes-btn').addEventListener('click', function() {
 document.getElementById('initial-text').style.display = 'none';
 document.getElementById('new-text').style.display = 'block';
  
 // Add animation to new text
 document.getElementById('new-text').classList.add('animate');
  
 // Add glow effect to yes button
 this.classList.add('glow');
});

document.getElementById('no-btn').addEventListener('click', function() {
 // Teleport (in this context, it seems like you want it to disappear or fade out)
 this.style.animation = 'fadeOut .5s forwards';
  
 // Add glow effect to no button before teleporting
 this.classList.add('glow');
});
