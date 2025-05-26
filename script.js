const terminalText = [
    'Initializing LumanOS v1.0...',
    '[OK] Loading kernel modules...',
    '[OK] Starting neon core engine...',
    '[OK] Connecting to mainframe...',
    'Welcome, user_00X. Launching interface...'
  ];

  const terminal = document.getElementById('terminal-text');
  const bootSound = document.getElementById('boot-sound');
  const desktop = document.getElementById('desktop');
  const bootScreen = document.getElementById('boot-screen');

  let line = 0;
  function typeNextLine() {
    if (line < terminalText.length) {
      terminal.textContent += terminalText[line] + '\n';
      line++;
      setTimeout(typeNextLine, 700);
    } else {
      setTimeout(() => {
        bootSound.play();
        bootScreen.classList.add('hidden');
        desktop.classList.remove('hidden');
      }, 1000);
    }
  }

  window.onload = typeNextLine;

  function enterSystem() {
    alert('Access granted. Welcome to LumanOS!');
  }